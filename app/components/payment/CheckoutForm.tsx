"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CheckoutFormProps {
  productName: string;
  productPrice: string;
  onClose: () => void;
}

export default function CheckoutForm({ productName, productPrice, onClose }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'España',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }
    
    // Format expiry date with slash
    if (name === 'cardExpiry') {
      const cleaned = value.replace(/\s/g, '').replace(/\//g, '');
      let formatted = cleaned;
      if (cleaned.length > 2) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setOrderComplete(true);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded-md shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif">Finalizar compra</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!orderComplete ? (
            <div>
              <div className="mb-6 border-b pb-4">
                <h3 className="font-medium mb-2">Resumen del pedido</h3>
                <div className="flex justify-between items-center">
                  <span>{productName}</span>
                  <span className="font-medium text-gold-500">{productPrice}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex mb-6">
                  <div 
                    className={`flex-1 text-center py-2 border-b-2 ${currentStep === 1 ? 'border-gold-400 text-gold-500 font-medium' : 'border-gray-200'}`}
                  >
                    Datos de envío
                  </div>
                  <div 
                    className={`flex-1 text-center py-2 border-b-2 ${currentStep === 2 ? 'border-gold-400 text-gold-500 font-medium' : 'border-gray-200'}`}
                  >
                    Método de pago
                  </div>
                </div>

                {currentStep === 1 && (
                  <form>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre completo</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium mb-1">Dirección</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">Ciudad</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="postalCode" className="block text-sm font-medium mb-1">Código postal</label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-1">País</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                          required
                        >
                          <option value="España">España</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Francia">Francia</option>
                          <option value="Italia">Italia</option>
                          <option value="Alemania">Alemania</option>
                          <option value="Reino Unido">Reino Unido</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500"
                      >
                        Continuar
                      </button>
                    </div>
                  </form>
                )}

                {currentStep === 2 && (
                  <form onSubmit={submitOrder}>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Número de tarjeta</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Fecha de caducidad</label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/AA"
                            maxLength={5}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCVC" className="block text-sm font-medium mb-1">CVC</label>
                          <input
                            type="text"
                            id="cardCVC"
                            name="cardCVC"
                            value={formData.cardCVC}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 border border-gray-300 text-gray-700 font-medium transition-colors hover:bg-gray-50"
                      >
                        Volver
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Procesando...' : `Pagar ${productPrice}`}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="mb-6 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif mb-2">¡Pedido completado!</h2>
              <p className="text-gray-600 mb-6">
                Gracias por tu compra. Hemos enviado un correo electrónico con los detalles de tu pedido a {formData.email}.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500"
              >
                Volver a la tienda
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
} 