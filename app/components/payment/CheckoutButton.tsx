"use client";

import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

interface CheckoutButtonProps {
  productName: string;
  productPrice: string;
}

export default function CheckoutButton({ productName, productPrice }: CheckoutButtonProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setShowCheckout(true)}
        className="inline-flex justify-center items-center px-8 py-3 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500 text-center"
      >
        Comprar ahora
      </button>
      
      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutForm 
          productName={productName}
          productPrice={productPrice}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
} 