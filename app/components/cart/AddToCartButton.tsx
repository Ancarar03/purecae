"use client";

import { useCartStore, CartItem } from '@/app/lib/store';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface AddToCartButtonProps {
  product: {
    slug: string;
    name: string;
    price: number;
    formattedPrice: string;
    image: string;
  };
  showNotification?: boolean;
  navigateToCart?: boolean;
}

export default function AddToCartButton({ 
  product, 
  showNotification = true,
  navigateToCart = false
}: AddToCartButtonProps) {
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);
  
  // Extraer solo la función que necesitamos, en lugar del objeto completo
  const addItem = useCartStore((state) => state.addItem);
  
  // Memoizar la función para evitar recreaciones en cada render
  const handleAddToCart = useCallback(() => {
    // Evitar agregar al carrito si ya se mostró la notificación (previene clics repetidos)
    if (isAdded) return;
    
    // Crear un ID único para este item en el carrito
    const cartItem = {
      id: `${product.slug}-${uuidv4()}`, // ID único para permitir duplicados si es necesario
      ...product,
    };
    
    // Añadir al carrito
    addItem(cartItem);
    
    // Mostrar notificación
    if (showNotification) {
      setIsAdded(true);
      
      // Limpiar notificación después de un tiempo
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
      
      // Limpiar timeout si el componente se desmonta
      return () => clearTimeout(timer);
    }
    
    // Navegar al carrito si es necesario
    if (navigateToCart) {
      // Usar setTimeout para evitar actualizaciones de estado durante el render
      setTimeout(() => {
        router.push('/carrito');
      }, 0);
    }
  }, [addItem, product, showNotification, navigateToCart, router, isAdded]);
  
  return (
    <div className="relative">
      <button
        onClick={handleAddToCart}
        className="inline-flex justify-center items-center px-6 py-3 bg-black text-white hover:bg-gold-500 hover:text-black transition-all font-medium tracking-wide text-center"
        disabled={isAdded} // Deshabilitar el botón mientras se muestra la notificación
      >
        {isAdded ? 'Añadido' : 'Añadir al carrito'}
      </button>
      
      {isAdded && (
        <div className="absolute top-0 left-0 right-0 transform -translate-y-full bg-green-600 text-white py-2 px-4 rounded-t-sm text-center text-sm">
          ¡Añadido al carrito!
        </div>
      )}
    </div>
  );
} 