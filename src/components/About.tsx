import React from "react";
import { motion } from "framer-motion";
import { Gem, PenTool, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Gem className="w-8 h-8 text-accent" />,
    title: "Premium Materials",
    desc: "We use only the highest grade aluminium and toughened glass for exceptional durability and finish.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-accent-gold" />,
    title: "Custom Designs",
    desc: "Tailored to your specific architectural requirements, delivering aesthetics that match your vision.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
    title: "Precise Finishing",
    desc: "Every cut, joint, and edge is finished with incredible precision for flawless functionality.",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Precision in every profile, elegance in every glass.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Shree Profile & Glass is a trusted aluminium profile and glass
              solutions provider based in Gota, Ahmedabad. We specialize in
              stylish and durable solutions for modern homes, offices, kitchens,
              and commercial spaces. Our focus is on premium-quality materials,
              precise finishing, customized designs, and reliable service.
            </p>

            <motion.div
              className="grid gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-start p-4 rounded-2xl glass transition-transform hover:scale-[1.02] bg-white border-slate-200"
                >
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl mr-5 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Showcase */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4 bg-slate-200/50 dark:bg-slate-800/50">
              <div className="w-full h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-2xl shadow-xl flex items-center gap-4 bg-white dark:bg-slate-800"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-5xl font-display font-bold text-accent">
                5+
              </div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase shrink-0">
                Years of
                <br />
                Experience
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
