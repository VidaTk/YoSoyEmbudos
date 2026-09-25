// El logo tiene texto negro que se pierde sobre fondos oscuros, así que
// las páginas de tema oscuro (Webinar, Diagnóstico) usan onDark para
// ponerle un fondo blanco chico detrás.
export function Logo({
  className = "h-9 w-auto",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="Yo Soy Líder PRO" className={className} />
  );

  if (!onDark) return img;

  return (
    <span className="inline-block rounded-lg bg-white px-3 py-2">{img}</span>
  );
}
