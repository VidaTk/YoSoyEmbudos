import Link from "next/link";

export default function InicioPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Yo Soy Líder Profesional
        </p>
        <h1 className="mt-3 font-sans text-4xl font-bold text-graphite sm:text-5xl">
          Coaching para líderes de multinivel
        </h1>
        <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-graphite-soft">
          Con Antonio Villanueva. Elige el camino que mejor le queda a tu
          negocio hoy — o responde 4 preguntas rápidas y te decimos cuál es.
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
              120 minutos en vivo para aprender a construir tu negocio desde
              cero, sin quemar tu lista de contactos.
            </p>
          </Link>

          <Link
            href="/bootcamp"
            className="rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="font-sans text-xl font-bold text-graphite">
              Bootcamp
            </h2>
            <p className="mt-2 font-serif text-sm leading-relaxed text-graphite-soft">
              El sistema completo para pasar de vender solo a construir un
              equipo que duplica.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
