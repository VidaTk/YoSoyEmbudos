// Número real del negocio. Se puede sobreescribir en Vercel vía
// NEXT_PUBLIC_WHATSAPP_NUMBER si llega a cambiar.
const NUMERO_WHATSAPP_DEFAULT = "525663533760";

export function construirLinkWhatsApp(mensaje: string): string {
  const numero = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || NUMERO_WHATSAPP_DEFAULT
  ).replace(/[^\d]/g, "");
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${numero}?text=${texto}`;
}
