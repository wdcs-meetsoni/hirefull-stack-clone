
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import NavLink from "@/components/ui/NavLink";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You've been added to our newsletter.",
      });
      
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <a href="/" className="text-2xl font-display font-bold">
              <span className="text-blue-400">Dev</span>Hire
            </a>
            <p className="text-gray-400">
              Professional development services to transform your ideas into powerful, scalable applications.
            </p>
            <div className="flex space-x-4 pt-2">
              {['twitter', 'facebook', 'linkedin', 'github'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink href="#home" className="text-gray-400 hover:text-white">Home</NavLink>
              <NavLink href="#services" className="text-gray-400 hover:text-white">Services</NavLink>
              <NavLink href="#about" className="text-gray-400 hover:text-white">About Us</NavLink>
              <NavLink href="#contact" className="text-gray-400 hover:text-white">Contact</NavLink>
            </nav>
          </div>
          
          <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Frontend Development</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Backend Development</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Full Stack Solutions</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Database Architecture</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a>
            </nav>
          </div>
          
          <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  variant="warning"
                  className="ml-2"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevHire. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
