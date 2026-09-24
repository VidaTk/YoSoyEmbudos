export interface LeadPayload {
  origen: "webinar" | "bootcamp" | "diagnostico" | "contacto";
  [campo: string]: string | number | undefined;
}

// Único punto que habla con el Google Apps Script del Sheet de leads.
// Todas las API routes del sitio reutilizan esta función en vez de
// duplicar la llamada al webhook.
export async function enviarLeadASheets(payload: LeadPayload): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error(
      "GOOGLE_SHEETS_WEBHOOK_URL no está configurada en el entorno."
    );
  }

  const respuesta = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fecha_hora: new Date().toISOString(),
      ...payload,
    }),
  });

  if (!respuesta.ok) {
    throw new Error(`Google Sheets respondió con estado ${respuesta.status}`);
  }
}
