"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useCartStore } from '@/app/lib/store';
import { CheckoutFormValues, checkoutFormSchema } from '@/app/lib/schema';
import { useRouter } from 'next/navigation';
import FormField from './FormField';

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { executeRecaptcha } = useReCaptcha();
  
  // Obtener items del carrito
  const { items, totalPrice, clearCart } = useCartStore((state) => ({
    items: state.items,
    totalPrice: state.totalPrice,
    clearCart: state.clearCart,
  }));

  // Configurar react-hook-form con validación zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      country: 'España',
      acceptTerms: false,
    },
  });

  // Manejar el envío del formulario
  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Si no hay productos, redirigir al carrito
      if (items.length === 0) {
        router.push('/carrito');
        return;
      }
      
      // Obtener token de reCAPTCHA
      const recaptchaToken = await executeRecaptcha('checkout_form');
      
      // Verificar el token de reCAPTCHA
      const verifyResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: recaptchaToken,
        }),
      });
      
      const verifyResult = await verifyResponse.json();
      
      if (!verifyResult.success) {
        throw new Error('No se pudo verificar que no eres un robot. Por favor, inténtalo de nuevo.');
      }
      
      // Calcular gastos de envío
      const shippingCost = totalPrice > 50 ? 0 : 4.95;
      
      // Crear sesión de checkout con Stripe
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items,
          customer: {
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
          shipping: {
            address: {
              line1: data.address,
              postal_code: data.postalCode,
              city: data.city,
              state: data.province,
              country: data.country,
            },
          },
          shippingCost,
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.url) {
        // Redirigir a la página de checkout de Stripe
        window.location.href = result.url;
      } else {
        throw new Error(result.error || 'Hubo un error al procesar el pago.');
      }
    } catch (err: any) {
      console.error('Error en el checkout:', err);
      setError(err.message || 'Hubo un error inesperado. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Datos personales */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-serif mb-4">Datos personales</h2>
        </div>
        
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <FormField
            label="Nombre completo"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Tu nombre y apellidos"
            required
          />
          
          <FormField
            label="Correo electrónico"
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="tu@email.com"
            type="email"
            required
          />
          
          <FormField
            label="Teléfono"
            name="phone"
            register={register}
            error={errors.phone?.message}
            placeholder="+34 600 000 000"
            required
          />
        </div>
        
        {/* Dirección de envío */}
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <FormField
            label="Dirección"
            name="address"
            register={register}
            error={errors.address?.message}
            placeholder="Calle, número, piso..."
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Código postal"
              name="postalCode"
              register={register}
              error={errors.postalCode?.message}
              placeholder="28001"
              required
            />
            
            <FormField
              label="Ciudad"
              name="city"
              register={register}
              error={errors.city?.message}
              placeholder="Madrid"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Provincia"
              name="province"
              register={register}
              error={errors.province?.message}
              placeholder="Madrid"
              required
            />
            
            <FormField
              label="País"
              name="country"
              register={register}
              error={errors.country?.message}
              placeholder="España"
              required
            />
          </div>
        </div>
        
        {/* Términos y condiciones */}
        <div className="md:col-span-2 mt-4">
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="acceptTerms"
                type="checkbox"
                {...register('acceptTerms')}
                className="w-4 h-4 border border-gray-300 rounded focus:ring-gold-500"
              />
            </div>
            <label
              htmlFor="acceptTerms"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Acepto los <a href="/terminos" className="text-gold-500 hover:underline">términos y condiciones</a> y la <a href="/privacidad" className="text-gold-500 hover:underline">política de privacidad</a>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="mt-1 text-sm text-red-600">{errors.acceptTerms.message}</p>
          )}
        </div>
        
        {/* Error message */}
        {error && (
          <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-sm text-red-600">
            {error}
          </div>
        )}
        
        {/* Submit button */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={isSubmitting || items.length === 0}
            className="w-full py-3 bg-black text-white hover:bg-gold-500 hover:text-black transition-all disabled:bg-gray-300 disabled:text-gray-500"
          >
            {isSubmitting ? 'Procesando...' : 'Continuar al pago'}
          </button>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Pago seguro con cifrado SSL. Tus datos están protegidos.
          </p>
        </div>
      </form>
    </div>
  );
} 