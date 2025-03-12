
import { useState, useEffect, useRef } from "react";
import BlurCard from "@/components/ui/BlurCard";
import { Check, Monitor, Server, Database, Code, Globe, Smartphone, Shield, Zap, Layers } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Create beautiful, responsive user interfaces with modern frameworks like React, Angular and Vue.js.",
    icon: <Monitor className="h-10 w-10 text-primary" />,
    features: [
      "Responsive design for all devices",
      "Modern UI/UX implementation",
      "Performance optimization",
      "Cross-browser compatibility"
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Build robust, scalable server-side applications with Node.js, Python, Java and more.",
    icon: <Server className="h-10 w-10 text-primary" />,
    features: [
      "API development and integration",
      "Authentication systems",
      "Data processing pipelines",
      "Serverless architecture"
    ]
  },
  {
    id: 3,
    title: "Database Architecture",
    description: "Design efficient database solutions with SQL, NoSQL, and cloud database services.",
    icon: <Database className="h-10 w-10 text-primary" />,
    features: [
      "Schema design and optimization",
      "Data migration and integration",
      "Query performance tuning",
      "Database scaling solutions"
    ]
  },
  {
    id: 4,
    title: "Full Stack Solutions",
    description: "End-to-end development with integrated technologies for seamless applications.",
    icon: <Layers className="h-10 w-10 text-primary" />,
    features: [
      "Complete application architecture",
      "Integrated front and back end",
      "Deployment and DevOps",
      "Maintenance and support"
    ]
  },
  {
    id: 5,
    title: "Web Application Development",
    description: "Build custom web applications that drive business growth and improve user experience.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "SaaS platform development",
      "E-commerce solutions"
    ]
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    features: [
      "React Native development",
      "Native iOS and Android apps",
      "Hybrid mobile applications",
      "App store optimization"
    ]
  },
];

const Services = () => {
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
    <section id="services" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Comprehensive <span className="text-gradient">Development</span> Services
          </h2>
          <p className="text-xl text-gray-600">
            We offer end-to-end development solutions to transform your ideas into powerful, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <BlurCard 
              key={service.id} 
              delayReveal={index * 100}
              className="flex flex-col h-full p-6"
            >
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-auto">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact us</a> to discuss your project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
