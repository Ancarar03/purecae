"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo de la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-serif ${scrolled ? 'text-gold-500' : 'text-white'}`}>
            PURECAE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="#"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Inicio
            </Link>
            <Link 
              href="/catalogo"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Catálogo
            </Link>
            <Link 
              href="#collection"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Colección
            </Link>
            <Link 
              href="#story"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Historia
            </Link>
            <Link 
              href="#materials"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Materiales
            </Link>
            <Link 
              href="#contact"
              className={`transition-colors ${scrolled ? 'text-black hover:text-gold-500' : 'text-white/80 hover:text-white'}`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`focus:outline-none ${scrolled ? 'text-black' : 'text-white'}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="#collection"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Colección
          </Link>
          <Link
            href="#story"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Historia
          </Link>
          <Link
            href="#materials"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Materiales
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-black hover:text-gold-500 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </motion.div>
    </nav>
  );
} 