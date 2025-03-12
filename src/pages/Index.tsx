
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Hire Expert Full Stack Developers | DevHire</title>
        <meta name="description" content="Hire expert full stack developers for your next project. We specialize in React, Node.js, Python and more technologies to build scalable applications." />
        <meta name="keywords" content="full stack developers, hire developers, web development, app development, react, node.js, javascript, python" />
        <meta property="og:title" content="Hire Expert Full Stack Developers | DevHire" />
        <meta property="og:description" content="Hire expert full stack developers for your next project. We specialize in React, Node.js, Python and more technologies to build scalable applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devhire.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Expert Full Stack Developers | DevHire" />
        <meta name="twitter:description" content="Hire expert full stack developers for your next project. We specialize in React, Node.js, Python and more technologies to build scalable applications." />
        <link rel="canonical" href="https://devhire.com" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        
        <Footer />
        
        <button
          onClick={scrollToTop}
          className={`fixed right-6 bottom-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
            showScrollToTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default Index;
