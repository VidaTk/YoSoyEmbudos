import { NextRequest, NextResponse } from "next/server";
import { enviarLeadASheets } from "@/lib/sheets";

interface BootcampPayload {
  nombre?: string;
  whatsapp?: string;
  utm?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  let body: BootcampPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const nombre = body.nombre?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";
  const utm = body.utm ?? {};

  if (nombre.length < 2) {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }

  if (whatsapp.length < 8) {
    return NextResponse.json({ error: "WhatsApp inválido" }, { status: 400 });
  }

  try {
    await enviarLeadASheets({
      origen: "bootcamp",
      nombre,
      whatsapp,
      estado: "registrado",
      ...utm,
    });
  } catch (error) {
    console.error("Error al enviar el lead del Bootcamp a Sheets:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el registro" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
