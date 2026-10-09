import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PhoneCall, Ruler, FileCheck, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={24} />,
    title: "1. Enquiry",
    desc: "Reach out to us with your requirements. We discuss your needs and initial ideas.",
  },
  {
    icon: <Ruler size={24} />,
    title: "2. Site Visit & Measurement",
    desc: "Our experts visit your location to take precise measurements and assess the space.",
  },
  {
    icon: <FileCheck size={24} />,
    title: "3. Design & Quote",
    desc: "We provide tailored design options and a transparent quotation for the project.",
  },
  {
    icon: <Hammer size={24} />,
    title: "4. Fabrication & Installation",
    desc: "Using premium materials, we fabricate off-site and expertly install on-site.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "5. Handover",
    desc: "Final inspection ensures everything is perfect before we hand over the finished space.",
  },
];

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="py-24 bg-slate-100 dark:bg-slate-950 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            How It Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            A Seamless Process
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-[29px] top-[10px] bottom-[10px] w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <motion.div
            className="absolute left-[29px] top-[10px] bottom-[10px] w-1 bg-gradient-to-b from-accent to-accent-gold rounded-full origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-16 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-20"
              >
                {/* Step indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-accent z-10">
                  {step.icon}
                </div>

                <div className="glass p-8 rounded-3xl bg-white dark:bg-slate-900 border-transparent hover:border-accent/40 transition-colors">
                  <h4 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
