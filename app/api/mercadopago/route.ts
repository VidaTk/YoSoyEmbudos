import { NextRequest, NextResponse } from "next/server";

// El link de pago del Bootcamp (NEXT_PUBLIC_MERCADOPAGO_LINK) es un link
// directo de Mercado Pago, sin checkout dinámico — igual que el resto del
// sitio. Este endpoint solo recibe la notificación IPN/webhook que Mercado
// Pago manda cuando cambia el estado de un pago, y responde 200 para que
// Mercado Pago no reintente. Para consultar el detalle real del pago (y
// por ejemplo marcar el lead como "pagado" en el Sheet) hace falta un
// MERCADOPAGO_ACCESS_TOKEN que hoy no existe en el proyecto — no se
// implementa esa parte para no inventar una integración a medias.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Notificación de Mercado Pago recibida:", body);
  } catch {
    // Mercado Pago a veces manda la notificación como query params, no body.
  }

  return NextResponse.json({ ok: true });
}
