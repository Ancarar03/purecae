"use client";

import { useCartStore } from '@/app/lib/store';
import Link from 'next/link';
import { useMemo } from 'react';

interface CartSummaryProps {
  showCheckoutButton?: boolean;
}

export default function CartSummary({ showCheckoutButton = true }: CartSummaryProps) {
  // Utilizar selectores específicos para evitar rerenders innecesarios
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  
  // Memoizar los cálculos para evitar cálculos repetidos en cada render
  const { shippingCost, total, formattedTotalPrice, formattedShippingCost } = useMemo(() => {
    // Calcular gastos de envío (gratis si es más de 50€)
    const shippingCost = totalPrice > 50 ? 0 : 4.95;
    const total = totalPrice + shippingCost;
    
    // Formatos para mostrar
    const formatPrice = (price: number) => `${price.toFixed(2).replace('.', ',')} €`;
    
    return {
      shippingCost,
      total,
      formattedTotalPrice: formatPrice(total),
      formattedShippingCost: formatPrice(shippingCost)
    };
  }, [totalPrice]);
  
  if (items.length === 0) {
    return (
      <div className="bg-beige-50 p-6 rounded-sm">
        <h3 className="text-lg font-medium mb-4">Resumen del pedido</h3>
        <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
        <Link 
          href="/catalogo" 
          className="block w-full py-3 bg-black text-white text-center hover:bg-gold-500 hover:text-black transition-all"
        >
          Continuar comprando
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-beige-50 p-6 rounded-sm">
      <h3 className="text-lg font-medium mb-4">Resumen del pedido</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{`${totalPrice.toFixed(2).replace('.', ',')} €`}</span>
        </div>
        <div className="flex justify-between">
          <span>Gastos de envío</span>
          <span>{shippingCost === 0 ? 'Gratis' : formattedShippingCost}</span>
        </div>
        {shippingCost > 0 && (
          <div className="text-xs text-gray-500 italic">
            Envío gratuito a partir de 50€
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span className="text-lg">{formattedTotalPrice}</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">IVA incluido</div>
      </div>
      
      {showCheckoutButton && items.length > 0 && (
        <Link 
          href="/checkout" 
          className="block w-full py-3 bg-black text-white text-center hover:bg-gold-500 hover:text-black transition-all"
        >
          Finalizar compra
        </Link>
      )}
    </div>
  );
} 