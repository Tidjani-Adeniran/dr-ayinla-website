"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/code-noir", label: t("codeNoir") },
    { href: "/publications", label: t("publications") },
    { href: "/media", label: t("media") },
    { href: "/appointments", label: t("appointments") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* BRAND / LOGO */}
        <Link
          href="/"
          className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight hover:text-amber-900 transition-colors"
        >
          Dr. Ayinla <span className="text-amber-900 font-normal text-sm sm:text-base italic">(Dr. Freud)</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 transition-colors hover:text-amber-900 ${
                isActive(item.href)
                  ? "text-amber-900 font-semibold"
                  : "text-stone-700"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-900 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* RIGHT CONTROLS (Language Switcher & CTA / Hamburger) */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <Link
            href="/appointments"
            className="hidden sm:inline-flex bg-stone-900 text-stone-100 px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-900 transition-colors shadow-xs"
          >
            {t("bookBtn")}
          </Link>

          {/* HAMBURGER BUTTON (MOBILE ONLY) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-200/60 transition-colors focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-stone-900 rounded-full transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-stone-900 rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-stone-900 rounded-full transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-stone-50 border-b border-stone-200 shadow-2xl z-40 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-amber-900/10 text-amber-900 font-semibold border-l-4 border-amber-900"
                      : "text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-200">
              <Link
                href="/appointments"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center bg-stone-900 text-stone-100 py-3 rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors shadow-sm"
              >
                {t("bookBtn")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}