import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Dr. Ayinla (Dr. Freud) — Relational Intelligence",
  description: "Relational-intelligence consultant, founder of Code Noir, and medical practitioner.",
  icons: {
    icon: "/drfreud.ico?v=2", // The query string forces browsers to bust their image cache!
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch translation messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#FAF8F5] text-stone-900 antialiased flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}