import type { Metadata } from "next";
import Link from "next/link";
import { WebinarForm } from "./WebinarForm";

export const metadata: Metadata = {
  title: "Masterclass gratuita — Yo Soy Líder Profesional",
  description:
    "120 minutos en vivo para construir tu negocio de multinivel desde cero, sin quemar tu lista de contactos.",
};

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-ink">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-white/50 hover:text-gold"
        >
          Yo Soy Líder Profesional
        </Link>

        <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-gold">
              Masterclass en vivo · Gratuita
            </p>
            <h1 className="mt-3 font-sans text-3xl font-bold leading-tight text-white sm:text-4xl">
              Cómo construir tu negocio de multinivel sin quemar tu lista de
              contactos
            </h1>
            <p className="mt-5 font-serif text-lg leading-relaxed text-white/80">
              120 minutos en vivo donde vemos cómo prospectar de forma
              constante, cómo presentar tu propuesta sin sentir que estás
              rogando, y cómo dar tus primeros pasos con un sistema — no con
              pura fuerza de voluntad.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 shadow-xl sm:p-8">
            <h2 className="font-sans text-xl font-bold text-white">
              Reserva tu lugar
            </h2>
            <p className="mt-2 font-serif text-sm text-white/70">
              Cupo limitado por sesión.
            </p>
            <div className="mt-5">
              <WebinarForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
