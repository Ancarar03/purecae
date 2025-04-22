import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token de reCAPTCHA no proporcionado' },
        { status: 400 }
      );
    }
    
    // Validar el token con la API de reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: token,
        }),
      }
    );
    
    const data = await recaptchaResponse.json();
    
    if (data.success) {
      return NextResponse.json({ success: true, score: data.score });
    } else {
      return NextResponse.json(
        { success: false, error: data['error-codes'] || 'Verificación fallida' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error verificando reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Error al verificar reCAPTCHA' },
      { status: 500 }
    );
  }
} 