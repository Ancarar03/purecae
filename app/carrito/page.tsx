"use client";

import { useCartStore } from '@/app/lib/store';
import Navbar from '@/app/components/ui/Navbar';
import CartItem from '@/app/components/cart/CartItem';
import CartSummary from '@/app/components/cart/CartSummary';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  // Prevenir errores de hidratación con useState
  const [mounted, setMounted] = useState(false);
  
  // Obtener items del carrito
  const items = useCartStore((state) => state.items);
  
  // Montar el componente solo en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">Tu carrito</h1>
            <p className="text-gray-500">Cargando...</p>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif mb-6">Tu carrito</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-8">Tu carrito está vacío</p>
              <Link 
                href="/catalogo" 
                className="inline-block px-8 py-3 bg-black text-white hover:bg-gold-500 hover:text-black transition-all"
              >
                Ver catálogo
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lista de productos */}
              <div className="lg:col-span-2">
                <div className="mb-4 pb-2 border-b border-gray-200 hidden md:flex">
                  <div className="w-20 mr-4"></div> {/* Espacio para imagen */}
                  <div className="flex-grow">Producto</div>
                  <div className="w-32">Cantidad</div>
                  <div className="w-24 text-right">Total</div>
                  <div className="w-8"></div> {/* Espacio para botón eliminar */}
                </div>
                
                <div className="space-y-1">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <Link 
                    href="/catalogo" 
                    className="text-sm text-gray-600 hover:text-black flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Continuar comprando
                  </Link>
                  
                  <button 
                    onClick={() => useCartStore.getState().clearCart()} 
                    className="text-sm text-gray-500 hover:text-red-500"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
              
              {/* Resumen del carrito */}
              <div className="lg:col-span-1">
                <CartSummary />
                
                <div className="mt-6 bg-beige-50 p-6 rounded-sm">
                  <h3 className="text-lg font-medium mb-3">Métodos de pago aceptados</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center text-xs">VISA</div>
                    <div className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center text-xs">MC</div>
                    <div className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center text-xs">AMEX</div>
                    <div className="h-8 w-12 bg-gray-200 rounded-sm flex items-center justify-center text-xs">PP</div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    <p className="mb-1">Pago 100% seguro mediante cifrado SSL</p>
                    <p>Todos los pedidos son procesados en 24-48h</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
} 