"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="story" className="snap-section min-h-screen relative bg-black text-white py-24 px-6 md:px-12 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gold-300">Nuestra Historia</h2>
          <div className="space-y-6 text-white/80">
            <p className="text-lg">
              Desde 2020, <span className="text-gold-300">PURECAE</span> nació de la pasión por crear piezas únicas que combinen elegancia atemporal con diseño contemporáneo.
            </p>
            <p className="text-lg">
              Cada joya está cuidadosamente elaborada a mano, combinando acero inoxidable de la más alta calidad con piedras naturales seleccionadas por su belleza y significado.
            </p>
            <p className="text-lg">
              Nuestro compromiso es crear piezas que no solo complementen tu estilo, sino que también cuenten una historia y perduren en el tiempo.
            </p>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="w-24 h-1 bg-gold-300"></div>
            <span className="text-sm uppercase tracking-widest text-gold-300">DESDE 2020</span>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-full min-h-[400px] md:min-h-[600px]"
        >
          <Image
            src="/images/1.jpg"
            alt="Purecae artisanal jewelry"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
} 