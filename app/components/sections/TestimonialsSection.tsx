"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Mis pendientes de Purecae son perfectos para el día a día. Ligeros, elegantes y recibo muchos cumplidos.",
    author: "María C.",
    image: "/images/4.jpg"
  },
  {
    id: 2,
    quote: "La calidad es excepcional. Mi collar se mantiene impecable después de meses de uso continuo.",
    author: "Laura T.",
    image: "/images/3.jpg"
  },
  {
    id: 3,
    quote: "El diseño minimalista y elegante hace que combine con todo mi guardarropa. Una inversión que valió la pena.",
    author: "Carmen G.",
    image: "/images/2.jpg"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="snap-section min-h-screen bg-beige-50 py-24 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            La satisfacción de quienes eligen nuestras piezas es nuestro mayor logro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Navigation buttons (small screens) */}
          <div className="md:hidden flex justify-center space-x-6 mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Left navigation button */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <button 
              onClick={prevTestimonial}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Testimonial content */}
          <div className="md:col-span-10">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-1/2 aspect-square relative">
                        <Image
                          src={testimonial.image}
                          alt={`Cliente de Purecae - ${testimonial.author}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <svg className="w-12 h-12 text-gold-300 mb-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0001 16.5C11.0001 17.3284 10.3285 18 9.50006 18H4.50006C3.67163 18 3.00006 17.3284 3.00006 16.5V13.5C3.00006 10.4624 5.46249 8 8.50006 8V10C6.56709 10 5.00006 11.567 5.00006 13.5V16H9.50006C10.3285 16 11.0001 16.6716 11.0001 17.5V16.5ZM21.0001 16.5C21.0001 17.3284 20.3285 18 19.5001 18H14.5001C13.6716 18 13.0001 17.3284 13.0001 16.5V13.5C13.0001 10.4624 15.4625 8 18.5001 8V10C16.5671 10 15.0001 11.567 15.0001 13.5V16H19.5001C20.3285 16 21.0001 16.6716 21.0001 17.5V16.5Z"/>
                        </svg>
                        <p className="text-xl md:text-2xl mb-8 font-serif italic">"{testimonial.quote}"</p>
                        <p className="text-right font-medium">— {testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gold-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right navigation button */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <button 
              onClick={nextTestimonial}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 