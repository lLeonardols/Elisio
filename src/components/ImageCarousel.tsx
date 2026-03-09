import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  // ✅ Use APENAS o caminho relativo à pasta public
  const images = [
    '/Elisio/imagens/Elisio1.jpg',
    '/Elisio/imagens/Elisio2.jpg',
    '/Elisio/imagens/Elisio3.jpg',
    '/Elisio/imagens/Elisio4.jpg',
    '/Elisio/imagens/Elisio5.jpg',
    '/Elisio/imagens/Elisio6.jpg',
    '/Elisio/imagens/Elisio7.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group aspect-square rounded-3xl overflow-hidden border-4 border-primary/20">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          alt={`Imagem ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      {/* Controls */}
      <button 
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;