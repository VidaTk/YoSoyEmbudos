import { construirLinkWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const mensaje = "Hola, tengo una pregunta sobre Yo Soy Líder PRO.";

  return (
    <a
      href={construirLinkWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 fill-white"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.905 6.478L4 29l7.72-1.868A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.965 17.14c-.29.816-1.68 1.56-2.317 1.653-.59.086-1.34.122-2.163-.137-.499-.158-1.14-.37-1.964-.724-3.454-1.492-5.71-4.972-5.883-5.204-.172-.232-1.41-1.876-1.41-3.578 0-1.703.895-2.54 1.212-2.888.318-.348.694-.435.925-.435.232 0 .463.002.665.012.213.01.499-.081.78.596.29.696.986 2.4 1.072 2.575.087.174.145.377.029.609-.116.232-.174.377-.348.58-.174.203-.366.454-.522.61-.174.174-.355.362-.153.71.203.348.902 1.49 1.937 2.413 1.331 1.187 2.454 1.554 2.802 1.728.348.174.551.145.754-.087.203-.232.87-1.014 1.102-1.362.232-.348.463-.29.782-.174.319.116 2.024.955 2.372 1.128.348.174.58.26.667.406.087.145.087.842-.203 1.658Z" />
      </svg>
    </a>
  );
}
