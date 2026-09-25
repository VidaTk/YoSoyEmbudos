export type SegmentoId = "nuevo" | "estancado" | "empresario";

export interface OpcionPregunta {
  texto: string;
  segmento?: SegmentoId;
}

export interface Pregunta {
  id: string;
  texto: string;
  opciones: OpcionPregunta[];
}

// El segmento se calcula ÚNICAMENTE con la respuesta a la pregunta 1
// (ingresos). Las preguntas 2-4 solo se guardan como datos adicionales
// del lead, no cambian la ruta.
export const preguntas: Pregunta[] = [
  {
    id: "ingresos",
    texto: "¿Cuánto generas hoy al mes con tu negocio de multinivel?",
    opciones: [
      { texto: "Menos de $10,000 MXN", segmento: "nuevo" },
      { texto: "Entre $10,000 y $50,000 MXN", segmento: "estancado" },
      { texto: "Más de $50,000 MXN", segmento: "empresario" },
    ],
  },
  {
    id: "freno",
    texto: "¿Cuál es tu mayor freno hoy?",
    opciones: [
      { texto: "No tengo equipo ni prospectos constantes" },
      { texto: "Tengo equipo pero no crece" },
      { texto: "Tengo equipo grande y yo soy el cuello de botella" },
    ],
  },
  {
    id: "tiempo",
    texto: "¿Cuánto tiempo le dedicas a tu negocio por semana?",
    opciones: [
      { texto: "Menos de 5 horas" },
      { texto: "Entre 5 y 20 horas" },
      { texto: "Más de 20 horas" },
    ],
  },
  {
    id: "inversion",
    texto: "¿Ya has invertido antes en formación o coaching para tu negocio?",
    opciones: [
      { texto: "No, nunca" },
      { texto: "Sí, pero no me funcionó" },
      { texto: "Sí, y me ha funcionado" },
    ],
  },
];

export interface ResultadoSegmento {
  titulo: string;
  texto: string;
  ctaTexto: string;
}

export const resultados: Record<SegmentoId, ResultadoSegmento> = {
  nuevo: {
    titulo: "Estás en fase de Construcción",
    texto:
      "Lo que necesitas hoy no es esforzarte más, es tener un sistema. Prospectar sin un método claro cansa y no duplica. Antes de sumar más horas a tu negocio, vale la pena que veas cómo se construyen las bases: cómo conseguir prospectos de forma constante y cómo presentar tu propuesta sin sentir que estás rogando. Ese es exactamente el punto de partida que trabajamos en la masterclass gratuita.",
    ctaTexto: "Reservar mi lugar en el webinar gratuito",
  },
  estancado: {
    titulo: "Tienes equipo, te falta sistema",
    texto:
      "Ya diste el paso más difícil: dejar de vender solo. Ahora el reto es distinto — pasar de tener gente en tu equipo a construir un equipo que duplica sin que tú estés empujando cada resultado. Eso no se resuelve con más esfuerzo personal, se resuelve con un sistema de duplicación que tu gente pueda copiar. De eso se trata el Curso Intensivo: El Camino del Líder PRO — te lo entrego paso a paso.",
    ctaTexto: "Inscribirme al Curso Intensivo ($397)",
  },
  empresario: {
    titulo: "Estás listo para escalar, no para aprender de cero",
    texto:
      "Con el nivel que ya tienes, un contenido genérico te va a quedar corto. Lo que necesitas es una mirada a la medida de tu negocio: dónde está el cuello de botella, qué estructura te falta para que tu equipo crezca sin depender de ti al 100%, y cómo escalar con orden. Eso es justo lo que trabajamos en la Mentoría Empresarial — platiquemos primero por WhatsApp para ver si encajas.",
    ctaTexto: "Agendar una llamada de diagnóstico por WhatsApp",
  },
};
