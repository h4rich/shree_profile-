import React from "react";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/10 mb-8 gap-6">
          <div className="flex-1">
            <img
              src="/shree_logo.svg"
              alt="Shree Profile Logo"
              className="h-[40px] lg:h-[50px] w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 flex-1 w-full uppercase text-xs tracking-wider font-semibold">
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={800}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="p-4 rounded-full bg-slate-900 border border-white/10 hover:bg-slate-800 hover:border-accent transition-colors cursor-pointer flex items-center justify-center group"
            >
              <ArrowUp
                size={20}
                className="text-white group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs">
          <p>
            &copy; {new Date().getFullYear()} Shree Profile & Glass. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0 opacity-60">
            Designed & Developed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
