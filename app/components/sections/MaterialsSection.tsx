"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const materials = [
  {
    id: 1,
    name: 'Acero Inoxidable',
    description: 'Material duradero y resistente a la corrosión que mantiene su acabado impecable a lo largo del tiempo.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Piedras Naturales',
    description: 'Cuidadosamente seleccionadas por su belleza única, cada piedra aporta color y significado especial a nuestras creaciones.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L2 12H5V20H19V12H22L12 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Artesanía Manual',
    description: 'Cada pieza es elaborada a mano por artesanos expertos, garantizando atención al detalle y acabados perfectos.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11.5V14M7 11.5V7.8C7 7.51997 7 7.37996 7.0545 7.27174C7.10243 7.17616 7.17616 7.10243 7.27174 7.0545C7.37996 7 7.51997 7 7.8 7H16.2C16.48 7 16.62 7 16.7282 7.0545C16.8238 7.10243 16.8976 7.17616 16.9455 7.27174C17 7.37996 17 7.51997 17 7.8V11.2C17 11.48 17 11.62 16.9455 11.7282C16.8976 11.8238 16.8238 11.8976 16.7282 11.9455C16.62 12 16.48 12 16.2 12H7.8C7.51997 12 7.37996 12 7.27174 11.9455C7.17616 11.8976 7.10243 11.8238 7.0545 11.7282C7 11.62 7 11.48 7 11.2V11.5ZM15.5 7V5M19 14V17M19 17H16M19 17H22M13 19V17C13 16.0572 13 15.5858 12.7929 15.2929C12.5858 15 12.1144 15 11.1716 15H7M5 14V22M9 22V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Diseño Atemporal',
    description: 'Creaciones elegantes que trascienden tendencias pasajeras, para que las disfrutes durante muchos años.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className="snap-section min-h-screen py-24 px-6 md:px-12 bg-beige-100 flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Materiales y Calidad</h2>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Utilizamos solo los mejores materiales para crear piezas que sean tan duraderas como hermosas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 p-8 bg-white shadow-sm"
            >
              <div className="text-gold-500 flex-shrink-0 mt-1">
                {material.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3">{material.name}</h3>
                <p className="text-black/70">{material.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-black text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-4">Envíos a toda Europa</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Cada pieza llega cuidadosamente empaquetada en elegante presentación, lista para disfrutar o regalar.
          </p>
          <div className="inline-block border-b border-gold-300 text-gold-300 pb-1">
            Información de envíos
          </div>
        </motion.div>
      </div>
    </section>
  );
} 