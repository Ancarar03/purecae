"use client";

import { useCartStore, CartItem as CartItemType } from '@/app/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  
  // Crear funciones memorizadas para evitar recálculos innecesarios
  const handleDecrement = useCallback(() => {
    updateQuantity(item.id, item.quantity - 1);
  }, [updateQuantity, item.id, item.quantity]);
  
  const handleIncrement = useCallback(() => {
    updateQuantity(item.id, item.quantity + 1);
  }, [updateQuantity, item.id, item.quantity]);
  
  const handleRemove = useCallback(() => {
    removeItem(item.id);
  }, [removeItem, item.id]);
  
  // Calcular el precio total del item (evita cálculos repetidos)
  const totalPrice = `${(item.price * item.quantity).toFixed(2).replace('.', ',')} €`;
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200 gap-4">
      {/* Imagen del producto */}
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-sm"
          sizes="(max-width: 768px) 80px, 80px"
        />
      </div>
      
      {/* Información del producto */}
      <div className="flex-grow">
        <Link href={`/productos/${item.slug}`} className="text-base font-medium hover:text-gold-500 transition">
          {item.name}
        </Link>
        <p className="text-gold-500">{item.formattedPrice}</p>
      </div>
      
      {/* Control de cantidad */}
      <div className="flex items-center border border-gray-300">
        <button 
          onClick={handleDecrement}
          className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100 transition"
        >
          -
        </button>
        <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
        <button 
          onClick={handleIncrement}
          className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>
      
      {/* Precio total */}
      <div className="w-24 text-right">
        <p className="font-medium">{totalPrice}</p>
      </div>
      
      {/* Botón eliminar */}
      <button 
        onClick={handleRemove}
        className="flex-shrink-0 ml-2 text-gray-400 hover:text-red-500 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
} 