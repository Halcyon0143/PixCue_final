
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#121212]/80 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="material-container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-gradient">
            Jane Doe
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href.substring(1)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors ripple-effect rounded-full"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors ripple-effect rounded-full"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button className="ml-4 btn-material-contained rounded-full">
            Resume
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="ripple-effect flex items-center px-3 py-2 rounded-full text-gray-300 hover:text-primary-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-[#1E1E1E]/90 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href.substring(1)}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-white/5 ripple-effect rounded-full"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-white/5 ripple-effect rounded-full"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="px-3 py-3">
              <Button 
                className="w-full btn-material-contained rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
