"use client";

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/app/lib/store';
import Navbar from '@/app/components/ui/Navbar';
import { sendOrderConfirmationEmail } from '@/app/lib/email';

// Componente cliente que usa SearchParams
function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const clearCart = useCartStore((state) => state.clearCart);
  const hasCleanedUpRef = useRef(false);
  
  // Limpiar carrito al cargar la página (solo una vez)
  useEffect(() => {
    // Evitar múltiples limpiezas
    if (hasCleanedUpRef.current) return;
    
    // Marcar como limpiado
    hasCleanedUpRef.current = true;
    
    // Limpiar carrito
    clearCart();
    
    // Enviar correo de confirmación (simulado)
    const sendEmail = async () => {
      if (sessionId) {
        try {
          await sendOrderConfirmationEmail(sessionId);
        } catch (error) {
          console.error('Error enviando email de confirmación:', error);
        }
      }
    };
    
    sendEmail();
  }, [sessionId, clearCart]);
  
  return (
    <div className="max-w-2xl mx-auto text-center px-4">
      <div className="mb-6 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-serif mb-4">¡Gracias por tu compra!</h1>
      <p className="text-xl text-gray-600 mb-10">
        Hemos recibido tu pedido y lo estamos procesando.
      </p>
      
      <div className="bg-beige-50 p-8 mb-10 rounded-sm">
        <h2 className="text-xl font-medium mb-4">Detalles del pedido</h2>
        <p className="mb-2">ID de pedido: {sessionId ? sessionId.substring(0, 8) : 'No disponible'}</p>
        <p className="mb-6">Recibirás un correo electrónico con la confirmación y los detalles de tu compra.</p>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-500">Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos.</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          href="/" 
          className="px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
        >
          Volver a inicio
        </Link>
        <Link 
          href="/catalogo" 
          className="px-6 py-3 bg-black text-white hover:bg-gold-500 hover:text-black transition-all"
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}

// Componente de carga
function SuccessPageLoading() {
  return (
    <div className="max-w-2xl mx-auto text-center px-4 pt-20">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-24 w-24 bg-gray-200 rounded-full mb-8"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-10"></div>
        <div className="h-40 bg-gray-100 w-full mb-10"></div>
        <div className="flex space-x-4">
          <div className="h-10 bg-gray-200 rounded w-32"></div>
          <div className="h-10 bg-gray-800 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-16">
        <Suspense fallback={<SuccessPageLoading />}>
          <SuccessContent />
        </Suspense>
      </main>
    </>
  );
} 