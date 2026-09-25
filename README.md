# YoSoyEmbudos

Sitio de embudos de **Yo Soy Líder PRO** (Tony Villanueva) —
[yosoyliderpro.com](https://yosoyliderpro.com). Proyecto Next.js (App
Router) desplegado en Vercel.

## Páginas

- `/` — Inicio, enlaza a Webinar, Curso Intensivo y Diagnóstico.
- `/webinar` — Masterclass gratuita (tema oscuro negro/dorado). El
  formulario guarda el lead y redirige a EverWebinar.
- `/bootcamp`, `/bootcamp/gracias`, `/bootcamp/pago-fallido` — Venta del
  Curso Intensivo: El Camino del Líder PRO ($397 MXN, tema claro). El
  formulario guarda el lead y redirige al link de pago de Mercado Pago.
- `/ingresar` — Acceso de alumnos (placeholder, deriva a WhatsApp).
- `/diagnostico` — Quiz de 4 preguntas que segmenta al visitante en
  "nuevo", "estancado" o "empresario" según la primera respuesta, y lo
  dirige a la oferta correspondiente.

## 1. Correr el proyecto en local

Requisitos: Node.js 18.18+ (recomendado 20 LTS) y npm.

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Sin llenar `.env.local` el sitio funciona igual: los formularios mostrarán
un error de "configuración incompleta" al enviarse (esperado hasta que
configures `GOOGLE_SHEETS_WEBHOOK_URL`), y los botones de EverWebinar /
Mercado Pago / WhatsApp no tendrán a dónde ir hasta llenar sus variables.

## 2. Variables de entorno

| Variable | Qué es |
|---|---|
| `GOOGLE_SHEETS_WEBHOOK_URL` | URL del Google Apps Script Web App que recibe todos los leads del sitio y los escribe en Google Sheets. |
| `NEXT_PUBLIC_EVERWEBINAR_URL` | Link de registro del webinar evergreen en EverWebinar. |
| `NEXT_PUBLIC_MERCADOPAGO_LINK` | Link de pago directo de Mercado Pago para el Curso Intensivo. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp del negocio, con lada, solo dígitos. Opcional: si se deja vacío usa el default real en `lib/whatsapp.ts`. |

## 3. Google Sheet de leads

Todos los formularios del sitio (webinar, bootcamp, diagnóstico) mandan su
lead al mismo webhook (`GOOGLE_SHEETS_WEBHOOK_URL`), con un campo `origen`
que indica de qué formulario viene. El Apps Script (`Code.gs`, fuera de
este repo) debe leer ese campo y escribir cada lead en la pestaña
correspondiente del Sheet. Ver snippet sugerido en la descripción del PR
que agregó `/diagnostico`.

## 4. Desplegar en Vercel

1. Sube este repositorio a GitHub (ya está: `VidaTk/YoSoyEmbudos`).
2. En [vercel.com](https://vercel.com), **Add New Project** → importa el repo.
3. Framework Preset: Vercel detecta Next.js automáticamente.
4. En **Environment Variables**, agrega las 4 variables de la tabla de
   arriba con sus valores reales de producción.
5. Deploy.
6. Conecta el dominio `yosoyliderpro.com` desde **Settings → Domains**.
