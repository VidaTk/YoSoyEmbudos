"use client";

import { useState, type FormEvent } from "react";
import { leerUtmDeUrl } from "@/lib/utm";

export function WebinarForm() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (nombre.trim().length < 2) {
      setError("Escribe tu nombre.");
      return;
    }
    if (whatsapp.trim().length < 8) {
      setError("Escribe un número de WhatsApp válido.");
      return;
    }

    setError(null);
    setEnviando(true);

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origen: "webinar",
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          utm: leerUtmDeUrl(),
        }),
      });

      if (!respuesta.ok) throw new Error("Respuesta no exitosa");

      setEnviado(true);

      const everWebinarUrl = process.env.NEXT_PUBLIC_EVERWEBINAR_URL;
      if (everWebinarUrl) {
        window.location.href = everWebinarUrl;
      }
    } catch {
      setError(
        "No pudimos guardar tu registro. Revisa tu conexión e inténtalo de nuevo."
      );
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-center">
        <p className="font-sans text-lg font-bold text-white">
          ¡Listo, {nombre.split(" ")[0]}!
        </p>
        <p className="mt-2 font-serif text-white/80">
          Guardamos tu registro. Si no fuiste redirigido automáticamente,
          revisa tu WhatsApp para confirmar tu lugar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="webinar-nombre" className="sr-only">
          Nombre
        </label>
        <input
          id="webinar-nombre"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          autoComplete="given-name"
        />
      </div>

      <div>
        <label htmlFor="webinar-whatsapp" className="sr-only">
          WhatsApp
        </label>
        <input
          id="webinar-whatsapp"
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
        {enviando ? "Reservando…" : "RESERVAR MI LUGAR GRATIS"}
      </button>
    </form>
  );
}
