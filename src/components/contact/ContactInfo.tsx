
import React from "react";
import BlurCard from "@/components/ui/BlurCard";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "contact@devhire.com",
      link: "mailto:contact@devhire.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      details: "1234 Tech Ave, San Francisco, CA 94107",
      link: "https://maps.google.com",
    },
  ];

  return (
    <BlurCard 
      className={`p-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} 
      style={{ animationDelay: '0.2s' }}
      delayReveal={0}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-start hover:text-primary transition-colors duration-300"
          >
            <div className="bg-primary/10 rounded-full p-2 mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600">{item.details}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {['twitter', 'linkedin', 'github', 'instagram'].map((social, index) => (
            <a
              key={index}
              href="#"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">{social}</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </BlurCard>
  );
};

export default ContactInfo;
