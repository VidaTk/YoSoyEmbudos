import type { Metadata } from "next";
import Link from "next/link";
import { construirLinkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ingresar — Yo Soy Líder Profesional",
  description: "Acceso para alumnos de Yo Soy Líder Profesional.",
};

export default function IngresarPage() {
  const mensaje =
    "Hola, necesito ayuda para entrar a mi cuenta de Yo Soy Líder Profesional.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Área de alumnos
        </p>
        <h1 className="mt-3 font-sans text-3xl font-bold text-graphite sm:text-4xl">
          Ingresar a mi cuenta
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-graphite-soft">
          El acceso a la plataforma de alumnos se está configurando. Si ya
          eres parte del Bootcamp o la Mentoría y necesitas entrar, escríbenos
          por WhatsApp y te ayudamos directo.
        </p>
        <a
          href={construirLinkWhatsApp(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-ink px-8 py-3.5 font-sans text-sm font-bold tracking-wide text-gold transition-opacity hover:opacity-90"
        >
          Escribir por WhatsApp
        </a>
        <div className="mt-4">
          <Link
            href="/"
            className="font-sans text-sm text-graphite-soft hover:text-gold-dark"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
