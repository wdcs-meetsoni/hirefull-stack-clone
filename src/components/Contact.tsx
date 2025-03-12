
import { useState, useEffect, useRef } from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
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

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Discuss Your <span className="text-gradient">Next Project</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Get in touch with our team to discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo isVisible={isVisible} />
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
