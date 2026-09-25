import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yosoyliderpro.com"),
  title: "Yo Soy Líder PRO",
  description:
    "Coaching para líderes de multinivel — con Tony Villanueva. Encuentra el siguiente paso para escalar tu negocio.",
  openGraph: {
    title: "Yo Soy Líder PRO",
    description: "Coaching para líderes de multinivel — con Tony Villanueva.",
    siteName: "Yo Soy Líder PRO",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${jakarta.variable} ${lora.variable}`}>
      <body className="font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
