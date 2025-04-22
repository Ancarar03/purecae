import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { cookies } from 'next/headers';
import { formatAmountForStripe } from '@/app/lib/stripe';

// Inicializa Stripe con la clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const { items, customer, shipping } = await req.json();
    
    if (!items || !items.length) {
      return NextResponse.json(
        { error: 'Debe proporcionar al menos un producto.' },
        { status: 400 }
      );
    }
    
    // Validar datos del cliente
    if (!customer.email || !customer.name) {
      return NextResponse.json(
        { error: 'La información del cliente es incompleta.' },
        { status: 400 }
      );
    }
    
    // Validar dirección de envío
    if (!shipping?.address) {
      return NextResponse.json(
        { error: 'La dirección de envío es requerida.' },
        { status: 400 }
      );
    }
    
    // Crear líneas de producto para Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [new URL(item.image, process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin).href],
          metadata: {
            productId: item.slug,
          },
        },
        unit_amount: formatAmountForStripe(item.price),
      },
      quantity: item.quantity,
    }));
    
    // Calcular gastos de envío (gratis si > 50€)
    const orderTotal = items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
    
    // Añadir gastos de envío si corresponde
    const shippingCost = orderTotal > 50 ? 0 : 4.95;
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Gastos de envío',
            metadata: {
              type: 'shipping',
            },
          },
          unit_amount: formatAmountForStripe(shippingCost),
        },
        quantity: 1,
      });
    }
    
    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['ES', 'PT', 'FR', 'IT', 'DE', 'BE', 'NL', 'LU', 'GB'],
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/carrito`,
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'eur',
            },
            display_name: 'Envío estándar',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
      ],
      customer_email: customer.email,
      client_reference_id: crypto.randomUUID(),
      metadata: {
        customerName: customer.name,
      },
    });
    
    // Guardar ID de sesión en una cookie (útil para verificar el pago después)
    cookies().set('stripe_session_id', session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hora
      path: '/',
    });
    
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creando sesión de checkout:', error);
    return NextResponse.json(
      { error: error.message || 'Error al procesar el pago.' },
      { status: 500 }
    );
  }
} 