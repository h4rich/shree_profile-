import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { ShieldCheck, Target, Users, ThumbsUp } from "lucide-react";

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};
const reasons = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Premium Quality",
    desc: "Uncompromising standards ensuring longevity and durability.",
  },
  {
    icon: <Target size={32} />,
    title: "Precision Engineering",
    desc: "Flawless exact measurements and highly detailed finishing.",
  },
  {
    icon: <Users size={32} />,
    title: "Expert Installers",
    desc: "Our skilled technicians ensure safe and perfect implementation.",
  },
  {
    icon: <ThumbsUp size={32} />,
    title: "100% Satisfaction",
    desc: "We stand behind our work, guaranteeing client happiness.",
  },
];

const stats = [
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 5, suffix: "+", label: "Years of Experience" },
  { number: 100, suffix: "%", label: "Customer Satisfaction" },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl glass-panel bg-white/5 border-white/10"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-gold mb-3">
                <AnimatedCounter from={0} to={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Tiles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Shree Profile Advantage
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 transition-colors group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-3">
                {reason.title}
              </h4>
              <p className="text-slate-400">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
