"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="snap-section relative h-screen w-full overflow-hidden bg-black">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/portada.jpg"
          alt="Purecae luxury jewelry"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
          quality={75}
        />
        {/* Overlay oscuro para mejorar contraste */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-gold-300 mb-6 tracking-wider drop-shadow-md">
            ARTESANÍA ETERNA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-xl mx-auto drop-shadow-md">
            Diseños exclusivos en acero inoxidable y piedras naturales
          </p>
          
          <Link href="#collection">
            <span
              className="inline-block px-8 py-3 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500 cursor-pointer"
            >
              EXPLORAR COLECCIÓN
            </span>
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div 
            className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce"
          />
        </div>
      </div>
    </section>
  );
} 