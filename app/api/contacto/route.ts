import { NextRequest, NextResponse } from "next/server";
import { enviarLeadASheets } from "@/lib/sheets";

interface ContactoPayload {
  origen?: "webinar" | "contacto";
  nombre?: string;
  whatsapp?: string;
  correo?: string;
  utm?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  let body: ContactoPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const origen = body.origen === "webinar" ? "webinar" : "contacto";
  const nombre = body.nombre?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";
  const correo = body.correo?.trim() ?? "";
  const utm = body.utm ?? {};

  if (nombre.length < 2) {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }

  if (whatsapp.length < 8 && correo.length === 0) {
    return NextResponse.json(
      { error: "Escribe un WhatsApp o un correo" },
      { status: 400 }
    );
  }

  try {
    await enviarLeadASheets({
      origen,
      nombre,
      whatsapp,
      correo,
      ...utm,
    });
  } catch (error) {
    console.error("Error al enviar el lead de contacto a Sheets:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el registro" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
