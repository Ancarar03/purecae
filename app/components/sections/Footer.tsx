"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and branding */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 mb-6">
              <Image
                src="/images/1.jpg"
                alt="Purecae Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gold-300">PURECAE</h3>
            <p className="text-white/70 text-center md:text-left">
              Joyas artesanales únicas diseñadas con pasión y elaboradas con los mejores materiales.
            </p>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-lg font-serif mb-6 text-gold-300">Contacto</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@purecae.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>wa.me/c/34632138331</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-lg font-serif mb-6 text-gold-300">Navegación</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="#" className="hover:text-gold-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-300 transition-colors">
                  Colección
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-300 transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-300 transition-colors">
                  Materiales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-300 transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-lg font-serif mb-6 text-gold-300">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Suscríbete para recibir novedades y ofertas exclusivas.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-400 text-black font-medium hover:bg-gold-500 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        {/* Social and copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://instagram.com/purecae" target="_blank" rel="noreferrer" className="text-white/70 hover:text-gold-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-gold-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-gold-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184A4.92 4.92 0 0011.9 8.035a14.03 14.03 0 01-10.2-5.157 4.892 4.892 0 001.525 6.574 4.924 4.924 0 01-2.23-.618v.063a4.925 4.925 0 003.95 4.827 4.996 4.996 0 01-2.224.085 4.936 4.936 0 004.6 3.42A9.868 9.868 0 010 19.54a13.98 13.98 0 007.557 2.21 13.93 13.93 0 0014.001-14.01c0-.214-.005-.428-.015-.64A9.935 9.935 0 0024 4.59h-.047z" />
              </svg>
            </a>
          </div>
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Purecae. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 