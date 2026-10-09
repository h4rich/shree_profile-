import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Why Us", to: "why-us" },
  { name: "Gallery", to: "gallery" },
  { name: "Testimonials", to: "testimonials" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3"
          : "bg-white dark:bg-slate-950 py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer z-50 flex items-center"
        >
          <img
            src="/shree_logo.svg"
            alt="Shree Profile Logo"
            className="h-[50px] w-auto lg:h-[60px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-accent after:w-full"
              className="relative cursor-pointer text-sm font-medium hover:text-accent transition-colors
                         after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 
                         after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="ml-4 px-6 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:scale-105 transition-transform cursor-pointer"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-slate-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 min-h-screen z-40 flex flex-col justify-center items-center gap-8 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium hover:text-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={800}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-8 py-3 rounded-full text-lg bg-accent text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-accent/20 cursor-pointer"
              >
                Get Free Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
