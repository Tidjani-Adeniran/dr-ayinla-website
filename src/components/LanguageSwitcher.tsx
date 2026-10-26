"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs font-semibold px-2.5 py-1 rounded border border-stone-300 text-stone-800 hover:bg-stone-200/80 transition-colors uppercase tracking-wider flex items-center gap-1.5"
      title={locale === "en" ? "Passer en français" : "Switch to English"}
    >
      <span className={locale === "fr" ? "font-bold text-amber-900" : "text-stone-500"}>
        FR
      </span>
      <span className="text-stone-300">|</span>
      <span className={locale === "en" ? "font-bold text-amber-900" : "text-stone-500"}>
        EN
      </span>
    </button>
  );
}