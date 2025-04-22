"use client";

import { useEffect, useState, useRef } from 'react';
import { useCartStore } from '@/app/lib/store';
import { useRouter } from 'next/navigation';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Navbar from '@/app/components/ui/Navbar';
import CheckoutForm from '@/app/components/checkout/CheckoutForm';
import CartSummary from '@/app/components/cart/CartSummary';
import Link from 'next/link';

export default function CheckoutPage() {
  // Prevenir errores de hidratación
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const redirectedRef = useRef(false);
  
  // Obtener estado del carrito
  const items = useCartStore((state) => state.items);
  
  // Efecto para el montaje inicial
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Efecto separado que maneja la redirección una sola vez
  useEffect(() => {
    // Solo ejecutar si está montado y no se ha redirigido antes
    if (mounted && items.length === 0 && !redirectedRef.current) {
      // Marcar que ya se ha redirigido para evitar múltiples redirecciones
      redirectedRef.current = true;
      
      // Usar setTimeout para salir del ciclo de renderizado actual
      const redirectTimer = setTimeout(() => {
        router.push('/carrito');
      }, 0);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [mounted, items.length, router]);
  
  // Render placeholder durante hidratación
  if (!mounted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-serif mb-6">Finalizar compra</h1>
            <p className="text-gray-500">Cargando...</p>
          </div>
        </div>
      </>
    );
  }
  
  // Redireccionar si carrito vacío y mostrar una vista temporal
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-28 pb-16 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-serif mb-6">Tu carrito está vacío</h1>
            <p className="mb-8">Añade productos a tu carrito antes de finalizar la compra.</p>
            <Link 
              href="/catalogo" 
              className="inline-block px-8 py-3 bg-black text-white hover:bg-gold-500 hover:text-black transition-all"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-2">Finalizar compra</h1>
            <p className="text-gray-600">Completa los datos para procesar tu pedido</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario de checkout */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
            
            {/* Resumen del carrito */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-medium mb-4">Tu pedido</h2>
              <CartSummary showCheckoutButton={false} />
              
              <div className="mt-8">
                <Link 
                  href="/carrito" 
                  className="text-sm text-gray-600 hover:text-black flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver al carrito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ReCaptchaProvider>
  );
} 