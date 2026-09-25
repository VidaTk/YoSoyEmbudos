import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { DiagnosticoQuiz } from "./DiagnosticoQuiz";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito — Yo Soy Líder PRO",
  description:
    "4 preguntas para saber exactamente en qué etapa está tu negocio de multinivel y cuál es tu siguiente paso.",
};

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen bg-ink">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12 sm:px-8">
        <Link href="/" className="mb-10 inline-block">
          <Logo className="h-9 w-auto" onDark />
        </Link>

        <div className="flex-1">
          <DiagnosticoQuiz />
        </div>
      </div>
    </main>
  );
}
