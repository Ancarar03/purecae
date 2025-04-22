import { z } from 'zod';

// Esquema de validación para el formulario de checkout
export const checkoutFormSchema = z.object({
  // Datos personales
  name: z.string().min(2, 'El nombre es demasiado corto').max(50, 'El nombre es demasiado largo'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string()
    .min(9, 'El número de teléfono debe tener al menos 9 dígitos')
    .max(15, 'El número de teléfono es demasiado largo')
    .regex(/^\+?[0-9\s]+$/, 'Formato de teléfono inválido'),
  
  // Dirección de envío
  address: z.string().min(5, 'La dirección es demasiado corta'),
  postalCode: z.string()
    .min(5, 'El código postal debe tener 5 dígitos')
    .max(5, 'El código postal debe tener 5 dígitos')
    .regex(/^[0-9]+$/, 'El código postal debe contener solo números'),
  city: z.string().min(2, 'La ciudad es demasiado corta'),
  province: z.string().min(2, 'La provincia es demasiado corta'),
  country: z.string().min(2, 'El país es demasiado corto'),
  
  // Términos y condiciones
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  
  // Verificación reCAPTCHA (se validará en el servidor)
  recaptchaToken: z.string().optional(),
});

// Tipo para TypeScript basado en el esquema
export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>; 