"use client";

export function QuizProgressBar({
  paso,
  total,
}: {
  paso: number;
  total: number;
}) {
  const porcentaje = (paso / total) * 100;

  return (
    <div className="mb-8">
      <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-gold">
        Pregunta {paso} de {total}
      </p>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label="Progreso del diagnóstico"
        aria-valuenow={paso}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-300 ease-out"
          style={{ width: `${porcentaje}%` }}
        />
      </div>
    </div>
  );
}
