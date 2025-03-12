
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/ui/NavLink";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHireDeveloper = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-display font-bold tracking-tight animate-fade-in flex items-center"
          >
            <span className="text-indigo-700">HIRE</span>
            <span className="text-xs bg-indigo-700 text-white px-1 mx-1">&lt;FULLSTACK&gt;</span>
            <span className="text-indigo-700">DEVELOPERINDIA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 animate-fade-in">
            <NavLink href="#home">ABOUT US</NavLink>
            <NavLink href="#services">HIRE RESOURCES</NavLink>
            <NavLink href="#portfolio">PORTFOLIO</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in">
            <Button 
              variant="talent"
              onClick={handleHireDeveloper}
              className="px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              HIRE A TALENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#home" onClick={closeMobileMenu}>
              ABOUT US
            </NavLink>
            <NavLink href="#services" onClick={closeMobileMenu}>
              HIRE RESOURCES
            </NavLink>
            <NavLink href="#portfolio" onClick={closeMobileMenu}>
              PORTFOLIO
            </NavLink>
          </nav>
          <div className="mt-8">
            <Button 
              variant="talent"
              className="w-full transition-all duration-300 shadow-md"
              onClick={handleHireDeveloper}
            >
              HIRE A TALENT
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
