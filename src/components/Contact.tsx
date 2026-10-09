import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const InstagramIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Let's Start Your Project
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Visit our workshop or reach out to us directly for a free quote.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {/* Contact Details Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Location */}
            <div className="glass p-8 rounded-2xl bg-white dark:bg-slate-900 border-t-4 border-t-accent flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] h-full">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent mb-2 shrink-0">
                <MapPin size={28} />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Our Locations
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://maps.app.goo.gl/8T1iVTcR4UojBTHZ9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors leading-relaxed block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Ahmedabad
                    </span>
                    12A Rajvee Complex, Near Goteshwar Estate, Gota – 382481
                  </a>
                  <a
                    href="https://goo.gl/maps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors leading-relaxed block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Pune
                    </span>
                    Shree profile and glass, near tarun steel, bhawani peth,
                    411002
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass p-8 rounded-2xl bg-white dark:bg-slate-900 border-t-4 border-t-accent flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent mb-2">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Email Us
                </h4>
                <a
                  href="mailto:shreeprofile2019@gmail.com"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                >
                  shreeprofile2019@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-8 rounded-2xl bg-white dark:bg-slate-900 border-t-4 border-t-accent flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] h-full">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent mb-2 shrink-0">
                <Phone size={28} />
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Phone / WhatsApp
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+919657836462"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Ahmedabad
                    </span>
                    +91 96578 36462
                  </a>
                  <a
                    href="tel:+918087395711"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors block"
                  >
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      Pune
                    </span>
                    +91 80873 95711
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="glass p-8 rounded-2xl bg-white dark:bg-slate-900 border-t-4 border-t-accent flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent mb-2">
                <InstagramIcon size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Instagram
                </h4>
                <a
                  href="https://www.instagram.com/shree_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors block"
                >
                  @shree_profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <motion.div
              className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden glass p-2 bg-slate-200 dark:bg-slate-800 shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md font-bold text-sm text-slate-900 dark:text-white">
                Ahmedabad Branch
              </div>
              <iframe
                title="Map of Shree profile and glass, Ahmedabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1904768567856!2d72.53982479999999!3d23.0901221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8365c08ca4af%3A0x2e033892ebbc335f!2sShree%20profile%20and%20glass!5e0!3m2!1sen!2sin!4v1791436791711!5m2!1sen!2sind"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden glass p-2 bg-slate-200 dark:bg-slate-800 shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md font-bold text-sm text-slate-900 dark:text-white">
                Pune Branch
              </div>
              <iframe
                title="Map of Shree profile and glass, Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.0445486764671!2d73.86891140994028!3d18.511573031931757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0411031df4b%3A0x34453a43c11bfa98!2sLaxmi%20Bazar%20Sanskritik%20Bhavan%2C%20979%2F1%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Nana%20Peth%2C%20Bhawani%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1791528495705!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
