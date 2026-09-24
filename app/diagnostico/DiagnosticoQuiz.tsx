"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { preguntas, resultados, type SegmentoId } from "./data";
import { QuizProgressBar } from "@/components/QuizProgressBar";
import { leerUtmDeUrl } from "@/lib/utm";
import { construirLinkWhatsApp } from "@/lib/whatsapp";

type Paso =
  | { tipo: "pregunta"; indice: number }
  | { tipo: "contacto" }
  | { tipo: "resultado" };

export function DiagnosticoQuiz() {
  const [paso, setPaso] = useState<Paso>({ tipo: "pregunta", indice: 0 });
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [segmento, setSegmento] = useState<SegmentoId | null>(null);

  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalPreguntas = preguntas.length;

  const responderPregunta = (indice: number, texto: string, seg?: SegmentoId) => {
    const pregunta = preguntas[indice];
    setRespuestas((prev) => ({ ...prev, [pregunta.id]: texto }));

    if (indice === 0 && seg) {
      setSegmento(seg);
    }

    if (indice + 1 < totalPreguntas) {
      setPaso({ tipo: "pregunta", indice: indice + 1 });
    } else {
      setPaso({ tipo: "contacto" });
    }
  };

  const handleSubmitContacto = async (e: FormEvent) => {
    e.preventDefault();

    if (nombre.trim().length < 2) {
      setError("Escribe tu nombre.");
      return;
    }
    if (whatsapp.trim().length < 8) {
      setError("Escribe un número de WhatsApp válido.");
      return;
    }
    if (!segmento) {
      setError("Ocurrió un error con tu diagnóstico, vuelve a empezar.");
      return;
    }

    setError(null);
    setEnviando(true);

    try {
      const respuesta = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          segmento,
          respuestas,
          utm: leerUtmDeUrl(),
        }),
      });

      if (!respuesta.ok) throw new Error("Respuesta no exitosa");

      setPaso({ tipo: "resultado" });
    } catch {
      setError(
        "No pudimos guardar tu diagnóstico. Revisa tu conexión e inténtalo de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  if (paso.tipo === "pregunta") {
    const pregunta = preguntas[paso.indice];
    return (
      <div className="animate-fade-in">
        <QuizProgressBar paso={paso.indice + 1} total={totalPreguntas} />
        <h1 className="font-sans text-2xl font-bold text-white sm:text-3xl">
          {pregunta.texto}
        </h1>
        <div className="mt-8 space-y-3">
          {pregunta.opciones.map((opcion) => (
            <button
              key={opcion.texto}
              type="button"
              onClick={() =>
                responderPregunta(paso.indice, opcion.texto, opcion.segmento)
              }
              className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left font-sans text-base text-white transition-colors hover:border-gold hover:bg-white/10 sm:text-lg"
            >
              {opcion.texto}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (paso.tipo === "contacto") {
    return (
      <div className="animate-fade-in">
        <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-gold">
          Último paso
        </p>
        <h1 className="font-sans text-2xl font-bold text-white sm:text-3xl">
          ¿A dónde te enviamos tu diagnóstico?
        </h1>
        <p className="mt-3 font-serif text-base leading-relaxed text-white/80">
          Con tus respuestas ya sabemos en qué etapa estás. Déjanos tu nombre
          y WhatsApp para mostrarte el resultado.
        </p>

        <form onSubmit={handleSubmitContacto} className="mt-6 space-y-3" noValidate>
          <div>
            <label htmlFor="diag-nombre" className="sr-only">
              Nombre
            </label>
            <input
              id="diag-nombre"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              autoComplete="given-name"
            />
          </div>

          <div>
            <label htmlFor="diag-whatsapp" className="sr-only">
              WhatsApp
            </label>
            <input
              id="diag-whatsapp"
              type="tel"
              placeholder="WhatsApp (con lada)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              autoComplete="tel"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-medium text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-bold tracking-wide text-ink transition-opacity hover:opacity-90 disabled:opacity-60 sm:text-base"
          >
            {enviando ? "Enviando…" : "VER MI RESULTADO"}
          </button>
        </form>
      </div>
    );
  }

  // paso.tipo === "resultado"
  if (!segmento) {
    return (
      <div className="animate-fade-in">
        <p className="font-serif text-white/80">
          Algo salió mal con tu diagnóstico.{" "}
          <Link href="/diagnostico" className="text-gold underline">
            Vuelve a intentarlo
          </Link>
          .
        </p>
      </div>
    );
  }

  const resultado = resultados[segmento];

  return (
    <div className="animate-fade-in">
      <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-gold">
        Tu diagnóstico
      </p>
      <h1 className="font-sans text-3xl font-bold text-white sm:text-4xl">
        {resultado.titulo}
      </h1>
      <p className="mt-5 font-serif text-lg leading-relaxed text-white/85">
        {resultado.texto}
      </p>

      <div className="mt-8">
        <BotonResultado segmento={segmento} texto={resultado.ctaTexto} />
      </div>
    </div>
  );
}

function BotonResultado({
  segmento,
  texto,
}: {
  segmento: SegmentoId;
  texto: string;
}) {
  const claseBase =
    "inline-block w-full rounded-lg bg-gold px-6 py-4 text-center text-base font-bold tracking-wide text-ink transition-opacity hover:opacity-90 sm:w-auto sm:px-10";

  if (segmento === "nuevo") {
    const everWebinarUrl = process.env.NEXT_PUBLIC_EVERWEBINAR_URL || "#";
    return (
      <a href={everWebinarUrl} target="_blank" rel="noopener noreferrer" className={claseBase}>
        {texto}
      </a>
    );
  }

  if (segmento === "estancado") {
    return (
      <Link href="/bootcamp" className={claseBase}>
        {texto}
      </Link>
    );
  }

  const mensaje =
    "Vengo del diagnóstico de Yo Soy Líder Profesional — soy Empresario, quiero saber más de la Mentoría Empresarial.";
  return (
    <a
      href={construirLinkWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={claseBase}
    >
      {texto}
    </a>
  );
}
