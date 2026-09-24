"use client";

import { useState, type FormEvent } from "react";
import { leerUtmDeUrl } from "@/lib/utm";

export function BootcampForm() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const respuesta = await fetch("/api/bootcamp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          whatsapp: whatsapp.trim(),
          utm: leerUtmDeUrl(),
        }),
      });

      if (!respuesta.ok) throw new Error("Respuesta no exitosa");

      const linkPago = process.env.NEXT_PUBLIC_MERCADOPAGO_LINK;
      if (linkPago) {
        window.location.href = linkPago;
      }
    } catch {
      setError(
        "No pudimos guardar tu registro. Revisa tu conexión e inténtalo de nuevo."
      );
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="bootcamp-nombre" className="sr-only">
          Nombre
        </label>
        <input
          id="bootcamp-nombre"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-graphite placeholder-graphite-soft/60 outline-none focus:border-gold-dark focus:ring-1 focus:ring-gold-dark"
          autoComplete="given-name"
        />
      </div>

      <div>
        <label htmlFor="bootcamp-whatsapp" className="sr-only">
          WhatsApp
        </label>
        <input
          id="bootcamp-whatsapp"
          type="tel"
          placeholder="WhatsApp (con lada)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-graphite placeholder-graphite-soft/60 outline-none focus:border-gold-dark focus:ring-1 focus:ring-gold-dark"
          autoComplete="tel"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-lg bg-ink px-6 py-3.5 text-sm font-bold tracking-wide text-gold transition-opacity hover:opacity-90 disabled:opacity-60 sm:text-base"
      >
        {enviando ? "Procesando…" : "INSCRIBIRME AL BOOTCAMP ($397)"}
      </button>
    </form>
  );
}
