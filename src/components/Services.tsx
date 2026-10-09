import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { X } from "lucide-react";

type ServiceData = {
  name: string;
  img: string;
  content: React.ReactNode;
};

const servicesList: ServiceData[] = [
  {
    name: "Slim Partition",
    img: "https://images.unsplash.com/photo-1779785654826-e7c84d0d71ab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
        <p className="text-xl leading-relaxed">
          Our Slim Partition range combines slim aluminium profiles with glass
          to create modern, spacious and elegant interiors.
        </p>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Profile Series:
          </strong>
          <ul className="list-disc pl-6 space-y-2">
            <li>16×45mm – Ultra Slim Series</li>
            <li>10×45mm – Premium Slim Series</li>
            <li>7×45mm – Minimal Series</li>
            <li>10×40mm – Compact Series</li>
          </ul>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Suitable for:
          </strong>
          <p className="leading-relaxed">
            Home partitions • Living rooms • Bedrooms • Office cabins •
            Workstations • Showrooms • Commercial spaces
          </p>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Glass Options:
          </strong>
          <p className="leading-relaxed">
            Clear Glass • Tinted Glass • Frosted Glass • Mirror • Decorative
            Glass
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Wardrobe Profile",
    img: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
        <p className="text-xl leading-relaxed">
          Our aluminium wardrobe profiles are designed for stylish sliding and
          framed wardrobe shutters. They can be combined with glass, mirror and
          other panel options.
        </p>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Wardrobe Series:
          </strong>
          <ul className="list-disc pl-6 space-y-2">
            <li>Luna Series – Elegant and contemporary wardrobe design</li>
            <li>Terra Series – Bold and sophisticated profile design</li>
            <li>Elio Series – Sleek and minimalist wardrobe solution</li>
            <li>Stellar Series – Premium modern wardrobe profile</li>
            <li>Luxe Leather Series – Luxury leather-finish wardrobe design</li>
            <li>Enigma Series – Distinctive and stylish wardrobe profile</li>
          </ul>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Panel Options:
          </strong>
          <p className="leading-relaxed">
            Mirror • Clear Glass • Tinted Glass • Frosted Glass • Decorative
            Glass • Leather Finish
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Kitchen Profile",
    img: "https://images.unsplash.com/photo-1682662044733-9120471befc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
        <p className="text-xl leading-relaxed">
          Our aluminium kitchen profiles provide a modern alternative to
          traditional shutter framing, offering a sleek appearance and durable
          construction.
        </p>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Profile Applications:
          </strong>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kitchen shutters</li>
            <li>Glass shutters</li>
            <li>Wall cabinets</li>
            <li>Tall units</li>
            <li>Display cabinets</li>
            <li>Modular kitchen frames</li>
          </ul>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Panel Options:
          </strong>
          <p className="leading-relaxed">
            Clear Glass • Tinted Glass • Frosted Glass • Mirror • Back-Painted
            Glass
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Office Partition",
    img: "https://images.unsplash.com/photo-1637665637343-d497d345ed2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
        <p className="text-xl leading-relaxed">
          Create professional and modern workspaces with aluminium and glass
          office partition systems.
        </p>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Profile Options:
          </strong>
          <ul className="list-disc pl-6 space-y-2">
            <li>Slim aluminium profiles</li>
            <li>16×45mm profiles</li>
            <li>10×45mm profiles</li>
            <li>7×45mm profiles</li>
            <li>10×40mm profiles</li>
            <li>Customized profiles</li>
          </ul>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Applications:
          </strong>
          <p className="leading-relaxed">
            Cabins • Meeting rooms • Reception areas • Workstations • Conference
            rooms • Manager cabins
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "LED Mirror",
    img: "/ser1.webp",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
        <p className="text-xl leading-relaxed">
          Our customized LED Mirrors combine premium mirror glass with modern
          LED lighting to create stylish and functional interior solutions.
        </p>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Options:
          </strong>
          <ul className="list-disc pl-6 space-y-2">
            <li>Backlit LED Mirror</li>
            <li>Front-lit LED Mirror</li>
            <li>Custom-shaped LED Mirror</li>
            <li>Touch-Sensor LED Mirror</li>
            <li>Customized Size & Design</li>
            <li>Warm / Cool / Neutral Lighting Options</li>
          </ul>
        </div>
        <div>
          <strong className="block text-slate-900 dark:text-white mb-3 text-xl font-display">
            Suitable for:
          </strong>
          <p className="leading-relaxed">
            Bathrooms • Bedrooms • Dressing Areas • Salons • Hotels • Showrooms
            • Commercial Interiors
          </p>
        </div>
      </div>
    ),
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null,
  );

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      className="py-24 bg-slate-100 dark:bg-slate-950 relative"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Profile & Glass Solutions
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We bring modern aesthetics to your spaces with high-quality,
            durable, and fully customized aluminium and glass products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full rounded-3xl relative group overflow-hidden"
              >
                <div className="glass p-0 h-full flex flex-col rounded-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-accent/40 shadow-sm group-hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] transition-all overflow-hidden cursor-pointer">
                  {/* Clean Image Area */}
                  <div className="w-full h-64 md:h-72 relative overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay at bottom to help text blend nicely if we wanted overlapping, but we are keeping text separate */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Clean Text Content */}
                  <div className="p-8 flex flex-col justify-center items-center text-center flex-grow bg-white dark:bg-slate-900 z-10">
                    <h4 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                      {service.name}
                    </h4>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-0 md:p-6 lg:p-12 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="min-h-screen md:min-h-0 w-full relative max-w-6xl mx-auto flex flex-col md:flex-row bg-white dark:bg-slate-900 shadow-2xl md:rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 z-[100] p-2 rounded-full bg-white text-black shadow-lg hover:scale-110 hover:shadow-xl transition-all"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-5/12 h-[35vh] md:h-auto relative">
                <img
                  src={selectedService.img}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end">
                  <h2 className="p-8 text-4xl md:text-5xl font-display font-bold text-white">
                    {selectedService.name}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 overflow-y-auto bg-slate-50 dark:bg-slate-900">
                <div className="max-w-2xl">
                  <div className="mb-8 hidden md:block">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                      {selectedService.name}
                    </h2>
                    <div className="w-20 h-1 bg-accent mt-6"></div>
                  </div>
                  {selectedService.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
