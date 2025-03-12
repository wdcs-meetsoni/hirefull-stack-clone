
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

const NavLink = ({
  href,
  children,
  className,
  activeClassName = "text-primary font-medium",
  onClick,
}: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if current path matches this link
  useEffect(() => {
    const updateActive = () => {
      const path = window.location.hash || window.location.pathname;
      const targetPath = href.startsWith("#") ? href : href.split("#")[0];
      setIsActive(path === targetPath || path === targetPath + "/");
    };
    
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, [href]);

  const isHashLink = href.startsWith("#");
  
  const handleClick = (e: React.MouseEvent) => {
    if (isHashLink) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth"
        });
        
        // Update URL without full page reload
        if (history.pushState) {
          history.pushState(null, "", href);
        }
      }
    }
    
    if (onClick) onClick();
  };

  return isHashLink ? (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative px-3 py-2 transition-colors duration-300 hover:text-primary",
        isActive && activeClassName,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span 
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
          (isActive || isHovered) ? "w-full" : "w-0"
        )}
      />
    </a>
  ) : (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-2 transition-colors duration-300 hover:text-primary",
        isActive && activeClassName,
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span 
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
          (isActive || isHovered) ? "w-full" : "w-0"
        )}
      />
    </Link>
  );
};

export default NavLink;
