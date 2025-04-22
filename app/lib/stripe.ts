import { loadStripe, Stripe } from '@stripe/stripe-js';

// Cargar stripe una sola vez
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    // Asegúrate de reemplazar con tu clave pública de Stripe en modo test o producción
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
  }
  return stripePromise;
};

// Calcular precio en centavos para Stripe (maneja 15.95€ => 1595)
export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100);
};

// Convertir centavos a euros con formato (1595 => 15,95 €)
export const formatAmountFromStripe = (amount: number): string => {
  return `${(amount / 100).toFixed(2).replace('.', ',')} €`;
}; 