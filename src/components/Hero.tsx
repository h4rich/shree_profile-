import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

const tagline = "Premium Profiles. Elegant Glass. Perfect Solutions.".split(
  " ",
);

const MagneticButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 dark:bg-slate-950 pt-20"
    >
      {/* Background Image with Parallax & Heavy Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Glass Profile Solutions"
          className="absolute -top-[10%] left-0 w-full h-[120%] object-cover"
        />
        {/* Dual overlay layers to guarantee text is incredibly easy to read */}
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 transition-colors" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-transparent to-slate-900/50" />
      </div>

      {/* Floating Glass Panels (Parallax) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[5%] top-[25%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="w-56 h-72 rounded-2xl glass-panel opacity-60 flex flex-col justify-between p-6">
          <div className="w-12 h-1 bg-white/30 rounded-full" />
          <div className="w-full h-32 bg-white/10 rounded-xl" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute right-[10%] bottom-[15%] hidden lg:block z-10 pointer-events-none"
      >
        <div className="w-64 h-48 rounded-xl glass-panel opacity-80 backdrop-blur-xl border-accent-gold/20 border" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase mb-8 text-white/80"
        >
          Established in Gota, Ahmedabad
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-6 leading-tight">
          <span className="block">Shree Profile</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
            & Glass
          </span>
        </h1>

        <div className="flex flex-wrap justify-center mb-10 max-w-2xl mx-auto gap-2">
          {tagline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-lg md:text-2xl font-light text-slate-300"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Link to="contact" smooth={true} duration={1000}>
            <MagneticButton className="group relative flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-medium text-lg overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-colors hover:bg-sky-400">
              <span className="relative z-10 w-full text-center">
                Get a Free Quote
              </span>
            </MagneticButton>
          </Link>
          <Link to="services" smooth={true} duration={800}>
            <MagneticButton className="group flex items-center justify-center px-8 py-4 glass text-white rounded-full font-medium text-lg transition-all hover:bg-white/20">
              View Services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
