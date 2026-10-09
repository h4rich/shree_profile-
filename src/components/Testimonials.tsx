import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Shree Profile completely transformed our office space with their sleek glass partitions. Their attention to detail and finishing is unmatched.",
    author: "Rahul Patel",
    role: "Architect, DesignCorp",
  },
  {
    text: "We wanted a minimal wardrobe profile and an LED mirror for our new home. They delivered exactly what we envisioned with premium quality materials.",
    author: "Neha Sharma",
    role: "Homeowner",
  },
  {
    text: "Highly professional team. The site measurement, ordering, and installation process was seamless. The frosted glass shutters look fantastic.",
    author: "Amit Desai",
    role: "Interior Designer",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Words From Our Clients
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative h-[350px] md:h-[250px] flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 z-20 p-2 rounded-full glass hover:bg-white/10 transition-colors text-white hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:-right-12 z-20 p-2 rounded-full glass hover:bg-white/10 transition-colors text-white hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4"
            >
              <div className="glass-panel p-10 md:p-12 rounded-3xl bg-slate-800/40 border-slate-700 max-w-3xl mx-auto relative">
                <Quote className="absolute top-6 left-6 text-accent/20 w-16 h-16 pointer-events-none" />
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8 relative z-10 text-center">
                  "{testimonials[current].text}"
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold font-display text-white">
                    {testimonials[current].author}
                  </h4>
                  <span className="text-slate-400 text-sm uppercase tracking-wider">
                    {testimonials[current].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile controls & dots */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${current === i ? "bg-accent" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
