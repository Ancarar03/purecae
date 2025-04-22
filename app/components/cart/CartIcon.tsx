"use client";

import { useCartStore } from '@/app/lib/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  // Prevenir errores de hidratación con useState
  const [mounted, setMounted] = useState(false);
  
  // Obtener el total de items del carrito
  const totalItems = useCartStore((state) => state.totalItems);
  
  // Montar el componente solo en el cliente para evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div className="w-6 h-6 relative flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
    );
  }
  
  return (
    <Link href="/carrito" className="relative flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems > 9 ? '9+' : totalItems}
        </span>
      )}
    </Link>
  );
} 