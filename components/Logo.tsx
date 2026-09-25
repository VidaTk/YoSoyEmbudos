// onDark usa la variante del logo con texto blanco (fondos oscuros:
// Webinar, Diagnóstico); el default es la variante con texto negro
// (fondos claros: Inicio, Bootcamp).
export function Logo({
  className = "h-9 w-auto",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={onDark ? "/logo-dark.webp" : "/logo.png"}
      alt="Yo Soy Líder PRO"
      className={className}
    />
  );
}
