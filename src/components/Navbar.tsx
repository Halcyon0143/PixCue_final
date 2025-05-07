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
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold text-gradient"
          >
            PixCue
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.name}
                to={link.href!}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors ripple-effect rounded-full"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id!)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors ripple-effect rounded-full"
              >
                {link.name}
              </button>
            )
          )}
          <Button
            className="ml-4 btn-material-contained rounded-full"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
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
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  to={link.href!}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-white/5 ripple-effect rounded-full"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.id!);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-white/5 ripple-effect rounded-full"
                >
                  {link.name}
                </button>
              )
            )}
            <div className="px-3 py-3">
              <Button
                className="w-full btn-material-contained rounded-full"
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
