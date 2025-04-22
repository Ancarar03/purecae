"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the homepage, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }
    
    // If we're already on the homepage, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`relative z-20 ${isScrolled ? 'bg-white/75' : 'bg-white/90'} p-1 rounded-md shadow-md transition-all duration-300`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="h-14 w-36 relative">
            <Image
              src="/images/logo.png?v=5"
              alt="Purecae Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link 
            href="/" 
            className="tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm"
          >
            Inicio
          </Link>
          <button
            onClick={() => scrollToSection('collection')}
            className="tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm"
          >
            Colección
          </button>
          <Link
            href="/catalogo" 
            className={`tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm ${pathname === '/catalogo' ? 'text-gold-400' : ''}`}
          >
            Catálogo
          </Link>
          <button
            onClick={() => scrollToSection('story')}
            className="tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm"
          >
            Historia
          </button>
          <button
            onClick={() => scrollToSection('materials')}
            className="tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm"
          >
            Materiales
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="tracking-wide hover:text-gold-400 transition-colors font-medium drop-shadow-sm"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white"
          >
            {isMenuOpen ? (
              <IoClose size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 z-20 shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center text-white text-lg py-6">
              <Link 
                href="/" 
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <button 
                onClick={() => scrollToSection('collection')}
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
              >
                Colección
              </button>
              <Link 
                href="/catalogo" 
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <button 
                onClick={() => scrollToSection('story')}
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
              >
                Historia
              </button>
              <button 
                onClick={() => scrollToSection('materials')}
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
              >
                Materiales
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-center py-2 tracking-wide hover:text-gold-400 transition-colors font-medium"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 