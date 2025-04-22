"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Product data
const jewelryItems = [
  {
    id: 1,
    slug: 'pendientes-perlas',
    name: 'Pendientes de Perlas',
    image: '/images/4.jpg',
    description: 'Pendientes de aro con perlas naturales',
  },
  {
    id: 2,
    slug: 'collar-minimalista',
    name: 'Collar Minimalista',
    image: '/images/3.jpg',
    description: 'Collar dorado de diseño minimalista',
  },
  {
    id: 3,
    slug: 'joya-signature',
    name: 'Joya Signature',
    image: '/images/1.jpg',
    description: 'Pieza icónica de nuestra colección',
  },
  {
    id: 4,
    slug: 'aretes-delicados',
    name: 'Aretes Delicados',
    image: '/images/2.jpg',
    description: 'Aretes con elegante diseño y acabado perfecto',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function CollectionSection() {
  return (
    <section id="collection" className="snap-section min-h-screen bg-beige-50 py-24 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Nuestra Colección</h2>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Piezas artesanales únicas creadas con los mejores materiales y el cuidado de manos expertas.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {jewelryItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-white"
            >
              <Link href={`/productos/${item.slug}`} className="block">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-serif mb-2">{item.name}</h3>
                  <p className="text-black/70">{item.description}</p>
                  <div className="mt-4 border-b border-gold-500 text-black pb-1 inline-flex items-center group-hover:border-black transition-colors">
                    Ver detalles
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 