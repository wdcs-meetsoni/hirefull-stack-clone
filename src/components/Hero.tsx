
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BlurCard from "@/components/ui/BlurCard";
import { ArrowRight, Code, Server, Database } from "lucide-react";

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
    }
  }, [currentIndex, text]);

  return (
    <span className="relative">
      {displayedText}
      <span className="absolute -right-1 top-0 w-1 h-full bg-primary animate-pulse" 
        style={{ opacity: currentIndex < text.length ? 1 : 0 }}>
      </span>
    </span>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-3xl space-y-6 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Professional Development Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Hire Expert <span className="text-gradient">Full Stack</span> Developers for Your <TypingText text="Project" />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get access to elite developers who can transform your ideas into powerful, scalable applications with modern technology stacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <BlurCard className="p-6" delayReveal={200}>
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Responsive, performant and beautiful user interfaces with React, Vue and Angular.
              </p>
            </BlurCard>
            
            <BlurCard className="p-6" delayReveal={400}>
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Scalable server solutions with Node.js, Python, and Java technologies.
              </p>
            </BlurCard>
            
            <BlurCard className="p-6" delayReveal={600}>
              <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized database solutions with SQL, NoSQL, and cloud database services.
              </p>
            </BlurCard>
            
            <BlurCard className="p-6" delayReveal={800}>
              <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-600">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end development with integrated technologies for seamless applications.
              </p>
            </BlurCard>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className={`mt-20 text-center ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company, index) => (
              <div key={index} className="flex items-center text-xl font-display font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
