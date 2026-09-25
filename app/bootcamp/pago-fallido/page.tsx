import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago no completado — Curso Intensivo",
  description: "Tu pago del Curso Intensivo no se pudo procesar.",
};

export default function BootcampPagoFallidoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-red-600">
          Pago no completado
        </p>
        <h1 className="mt-3 font-sans text-3xl font-bold text-graphite sm:text-4xl">
          Tu pago no se pudo procesar
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-graphite-soft">
          No pasó nada grave — puede haber sido un error momentáneo de tu
          banco o de la tarjeta. Intenta de nuevo o escríbenos si el
          problema sigue.
        </p>
        <Link
          href="/bootcamp"
          className="mt-8 inline-block rounded-lg bg-ink px-8 py-3.5 font-sans text-sm font-bold tracking-wide text-gold transition-opacity hover:opacity-90"
        >
          Intentar de nuevo
        </Link>
      </div>
    </main>
  );
}
