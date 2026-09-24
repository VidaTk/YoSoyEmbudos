// El número real se configura en Vercel vía NEXT_PUBLIC_WHATSAPP_NUMBER
// (formato con código de país, ej. 5215512345678). Aquí nunca se hardcodea.
export function construirLinkWhatsApp(mensaje: string): string {
  const numero = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /[^\d]/g,
    ""
  );
  const texto = encodeURIComponent(mensaje);
  return numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`;
}
