import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Gracias! — Bootcamp",
  description: "Tu pago del Bootcamp fue confirmado.",
};

export default function BootcampGraciasPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Pago confirmado
        </p>
        <h1 className="mt-3 font-sans text-3xl font-bold text-graphite sm:text-4xl">
          ¡Bienvenido al Bootcamp!
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-graphite-soft">
          Recibimos tu pago. En los próximos minutos te llega la confirmación
          y los accesos a tu WhatsApp.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-ink px-8 py-3.5 font-sans text-sm font-bold tracking-wide text-gold transition-opacity hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
