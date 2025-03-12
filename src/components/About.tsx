import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";
import { Users, Award, Clock, Briefcase, Info } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLearnMore = () => {
    window.open("https://example.com/about", "_blank");
  };

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: "100+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      value: "30+",
      label: "Tech Partnerships",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We're a Team of <span className="text-gradient">Elite Developers</span> Ready to Build Your Vision
            </h2>
            <p className="text-lg text-gray-600">
              With over a decade of experience in the industry, we've built a reputation for delivering high-quality, scalable, and innovative solutions for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600">
              Our team consists of expert developers, designers, and project managers who are passionate about creating exceptional digital experiences that drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {stat.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold">{stat.value}</h4>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={handleLearnMore}
            >
              <Info className="mr-2 h-4 w-4" />
              Learn More About Us
            </Button>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
            style={{ animationDelay: '0.4s' }}
          >
            <BlurCard className="p-6 h-full" delayReveal={200}>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions that drive innovation and growth in the digital landscape.
              </p>
            </BlurCard>
            
            <BlurCard className="p-6 h-full" delayReveal={400}>
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We combine technical expertise with a deep understanding of business needs to deliver tailored solutions that exceed expectations.
              </p>
            </BlurCard>
            
            <BlurCard className="p-6 h-full md:col-span-2" delayReveal={600}>
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Expert team with specialized skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transparent development process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Focus on performance and scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </BlurCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
