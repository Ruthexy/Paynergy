import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// 👇 Import your logo from assets (adjust the path if needed)
import logo from "../assets/paynergy icon w bg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Paynergy Logo"
                className="h-8 w-auto object-contain"
              />
              <span
                className={`font-sans font-bold text-xl lg:text-2xl transition-colors ${
                  isScrolled ? "text-charcoal" : "text-white lg:text-charcoal"
                }`}
              >
                Paynergy
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-sans font-medium cursor-pointer transition-colors hover:text-electric-lime ${
                  isScrolled ? "text-charcoal" : "text-white lg:text-charcoal"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#early-access")}
              className="bg-electric-lime text-charcoal px-6 py-2 rounded-lg font-sans font-bold hover:bg-lime-400 transition-colors"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-charcoal hover:text-electric-lime"
                  : "text-white"
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-2 text-charcoal hover:text-electric-lime hover:bg-off-white rounded-md transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#early-access")}
            className="w-full bg-electric-lime text-charcoal px-6 py-3 rounded-lg font-sans font-bold hover:bg-lime-400 transition-colors mt-4"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
