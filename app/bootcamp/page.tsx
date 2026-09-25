import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BootcampForm } from "./BootcampForm";

export const metadata: Metadata = {
  title: "Curso Intensivo: El Camino del Líder PRO — Yo Soy Líder PRO",
  description:
    "Cómo iniciar a implementar estrategias para hacer crecer tu negocio de multinivel.",
};

export default function BootcampPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-20">
        <Link href="/" className="mb-10 inline-block">
          <Logo className="h-9 w-auto" />
        </Link>

        <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-gold-dark">
              Curso Intensivo: El Camino del Líder PRO
            </p>
            <h1 className="mt-3 font-sans text-3xl font-bold leading-tight text-graphite sm:text-4xl">
              De vender solo a construir un equipo que duplica
            </h1>
            <p className="mt-5 font-serif text-lg leading-relaxed text-graphite-soft">
              Ya tienes equipo — el reto ahora es que crezca sin que tú
              empujes cada resultado. En el Curso Intensivo te entrego, paso
              a paso, el sistema de duplicación que tu gente puede copiar.
            </p>
            <p className="mt-8 font-sans text-3xl font-bold text-graphite">
              $397 MXN
            </p>
          </div>

          <div className="rounded-2xl border border-graphite/10 bg-paper-soft p-6 shadow-sm sm:p-8">
            <h2 className="font-sans text-xl font-bold text-graphite">
              Reserva tu lugar
            </h2>
            <p className="mt-2 font-serif text-sm text-graphite-soft">
              Al inscribirte te llevamos directo al pago seguro.
            </p>
            <div className="mt-5">
              <BootcampForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
