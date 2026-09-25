import { NextRequest, NextResponse } from "next/server";
import { enviarLeadASheets } from "@/lib/sheets";

interface DiagnosticoPayload {
  nombre?: string;
  whatsapp?: string;
  segmento?: string;
  respuestas?: Record<string, string>;
  utm?: Record<string, string>;
}

const SEGMENTOS_VALIDOS = ["nuevo", "estancado", "empresario"];

export async function POST(request: NextRequest) {
  let body: DiagnosticoPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const nombre = body.nombre?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";
  const segmento = body.segmento?.trim() ?? "";
  const respuestas = body.respuestas ?? {};
  const utm = body.utm ?? {};

  if (nombre.length < 2) {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }

  if (whatsapp.length < 8) {
    return NextResponse.json({ error: "WhatsApp inválido" }, { status: 400 });
  }

  if (!SEGMENTOS_VALIDOS.includes(segmento)) {
    return NextResponse.json({ error: "Segmento inválido" }, { status: 400 });
  }

  try {
    await enviarLeadASheets({
      origen: "diagnostico",
      nombre,
      whatsapp,
      segmento,
      ...respuestas,
      ...utm,
    });
  } catch (error) {
    console.error("Error al enviar el lead del diagnóstico a Sheets:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el registro" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
