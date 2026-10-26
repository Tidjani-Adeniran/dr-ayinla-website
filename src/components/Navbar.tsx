"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  // Helper function to detect active routes accurately across languages
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/code-noir", label: t("codeNoir") },
    { href: "/publications", label: t("publications") },
    { href: "/media", label: t("media") },
    { href: "/appointments", label: t("appointments") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200 w-full">
      {/* Container expanded to full width with comfortable horizontal padding */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-4 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <Link
          href="/"
          className="font-serif font-semibold text-xl tracking-tight text-stone-900 hover:text-amber-900 transition-colors"
        >
          Dr. Ayinla
        </Link>

        {/* Dynamic Navigation Links with Active Indicator & Smooth Hover */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? "text-amber-900 font-semibold bg-amber-900/10 shadow-xs"
                    : "text-stone-600 hover:text-stone-950 hover:bg-stone-200/60"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-800 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher & Call to Action */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/appointments"
            className="hidden sm:inline-block bg-stone-900 text-stone-100 text-xs font-medium px-4 py-2 rounded-lg hover:bg-amber-900 transition-all shadow-sm hover:shadow"
          >
            {t("bookBtn")}
          </Link>
        </div>
      </div>
    </header>
  );
}