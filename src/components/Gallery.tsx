import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "/gallary/img1.webp", title: "Project 1" },
  { src: "/gallary/img2.webp", title: "Project 2" },
  { src: "/gallary/img3.webp", title: "Project 3" },
  { src: "/gallary/img4.webp", title: "Project 4" },
  { src: "/gallary/img5.webp", title: "Project 5" },
  { src: "/gallary/img6.webp", title: "Project 6" },
  { src: "/gallary/img7.webp", title: "Project 7" },
  { src: "/gallary/img8.webp", title: "Project 8" },
  { src: "/gallary/img9.webp", title: "Project 9" },
  { src: "/gallary/img10.webp", title: "Project 10" },
  { src: "/gallary/img11.webp", title: "Project 11" },
  { src: "/gallary/img12.webp", title: "Project 12" },
  { src: "/gallary/img13.webp", title: "Project 13" },
  { src: "/gallary/img14.webp", title: "Project 14" },
  { src: "/gallary/img15.webp", title: "Project 15" },
  { src: "/gallary/img16.webp", title: "Project 16" },
  { src: "/gallary/img17.webp", title: "Project 17" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
            Our Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            A Glimpse of Perfection
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Browse through our recently completed profile and glass
            installations.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer inline-block w-full"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="text-white mb-2 ml-auto" />
                <h4 className="text-white font-display font-bold text-lg">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
