import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative w-full min-h-screen">
      <CustomCursor />
      <Preloader />

      {/* Temporary Theme Toggle for Testing */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-24 right-6 z-50 p-3 rounded-full glass shadow-xl"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919657836462"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all animate-pulse"
      >
        <MessageCircle size={28} />
      </a>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
