
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    } else {
      // Reset after a delay to create a loop effect
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 2000);
      
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="relative">
      {displayedText}
      <span className="absolute -right-1 top-0 w-1 h-full bg-indigo-600 animate-pulse" 
        style={{ opacity: currentIndex < text.length ? 1 : 0 }}>
      </span>
    </span>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = heroRef.current?.querySelectorAll('.animate-item');
    childElements?.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleGetStarted = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" ref={heroRef}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="max-w-4xl mx-auto space-y-6 text-center animate-item">
            <div className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600">
              Professional Development Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-center">
              Hire <span className="text-indigo-700">Full Stack</span> Developers
              <br />for tailored <span className="text-indigo-700">End-to-End</span> Solution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get access to elite developers who can transform your ideas into powerful, scalable applications with modern technology stacks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleGetStarted}
                className="group shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleViewServices}
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* OUR SERVICES section */}
        <div className="mt-24 text-center animate-item">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">OUR SERVICES</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Mobile App Developers', icon: '📱' },
              { name: 'Ecommerce Developers', icon: '🛒' },
              { name: 'JavaScript Developers', icon: 'JS' },
              { name: 'Web Application Developers', icon: '🌐' },
              { name: 'Game Developers', icon: '🎮' }
            ].map((service, index) => (
              <div 
                key={index} 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
              >
                <span className="mr-2">{service.icon}</span>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
