import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function InicioPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <Logo className="h-12 w-auto" />
        <h1 className="mt-6 font-sans text-4xl font-bold text-graphite sm:text-5xl">
          Coaching para líderes de multinivel
        </h1>
        <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-graphite-soft">
          Con Tony Villanueva. Elige el camino que mejor le queda a tu negocio
          de multinivel hoy — o responde 4 preguntas rápidas y te guiamos en
          la decisión.
        </p>

        <div className="mt-10">
          <Link
            href="/diagnostico"
            className="inline-block rounded-lg bg-ink px-8 py-4 text-center font-sans text-base font-bold tracking-wide text-gold transition-opacity hover:opacity-90"
          >
            Hacer el diagnóstico gratuito
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Link
            href="/webinar"
            className="rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="font-sans text-xl font-bold text-graphite">
              Masterclass gratuita
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-graphite-soft">
              Clase gratuita en vivo para aprender cuál es el Camino del
              Líder PRO.
            </p>
          </Link>

          <Link
            href="/bootcamp"
            className="rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="font-sans text-xl font-bold text-graphite">
              Curso Intensivo: El Camino del Líder PRO
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-graphite-soft">
              Cómo iniciar a implementar estrategias para hacer crecer tu
              negocio de multinivel.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
