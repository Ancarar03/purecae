// Este es un servicio simulado para enviar correos electrónicos de confirmación
// En producción, deberías usar un servicio como Resend, SendGrid, Amazon SES, etc.

/**
 * Simula el envío de un correo electrónico de confirmación de pedido
 * @param sessionId - ID de la sesión de Stripe para referencia
 */
export async function sendOrderConfirmationEmail(sessionId: string): Promise<void> {
  // En un entorno de producción, aquí es donde realizarías la llamada a un servicio de correo real
  console.log(`Envío de correo de confirmación para el pedido ${sessionId}`);
  
  // Simular un retraso
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return Promise.resolve();
}

/**
 * Implementación con Resend (descomentada cuando tengas tu API key)
 */
/*
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmationEmail(sessionId: string): Promise<void> {
  try {
    // Obtener información del pedido desde tu base de datos o Stripe
    // const orderDetails = await getOrderDetails(sessionId);
    
    await resend.emails.send({
      from: 'Purecae Jewelry <ventas@purecae.com>',
      to: 'customer@example.com', // orderDetails.email
      subject: 'Confirmación de pedido - Purecae Jewelry',
      html: `
        <h1>¡Gracias por tu compra!</h1>
        <p>Hemos recibido tu pedido con ID: ${sessionId}</p>
        <p>Estamos procesando tu pedido y te notificaremos cuando sea enviado.</p>
        <hr />
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        <p>Equipo Purecae</p>
      `,
    });
  } catch (error) {
    console.error('Error enviando email:', error);
    throw error;
  }
}
*/ 