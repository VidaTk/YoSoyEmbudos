import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosticoQuiz } from "./DiagnosticoQuiz";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito — Yo Soy Líder Profesional",
  description:
    "4 preguntas para saber exactamente en qué etapa está tu negocio de multinivel y cuál es tu siguiente paso.",
};

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen bg-ink">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12 sm:px-8">
        <Link
          href="/"
          className="mb-10 font-sans text-sm font-semibold uppercase tracking-wide text-white/50 hover:text-gold"
        >
          Yo Soy Líder Profesional
        </Link>

        <div className="flex-1">
          <DiagnosticoQuiz />
        </div>
      </div>
    </main>
  );
}
