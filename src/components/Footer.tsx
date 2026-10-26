import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  return (
    <footer className="border-t border-stone-200 bg-stone-100/60 py-10 text-stone-700 text-sm w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-base text-stone-900">Dr. Ayinla (Dr. Freud)</h3>
          <p className="text-stone-600 text-xs leading-relaxed max-w-sm font-light">
            {t("bio")}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wider mb-2.5">
            {t("quickLinks")}
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-medium">
            <li><Link href="/" className="hover:text-amber-900 transition-colors">{tNav("home")}</Link></li>
            <li><Link href="/about" className="hover:text-amber-900 transition-colors">{tNav("about")}</Link></li>
            <li><Link href="/code-noir" className="hover:text-amber-900 transition-colors">{tNav("codeNoir")}</Link></li>
            <li><Link href="/publications" className="hover:text-amber-900 transition-colors">{tNav("publications")}</Link></li>
            <li><Link href="/media" className="hover:text-amber-900 transition-colors">{tNav("media")}</Link></li>
            <li><Link href="/appointments" className="hover:text-amber-900 transition-colors">{tNav("appointments")}</Link></li>
            <li><Link href="/contact" className="hover:text-amber-900 transition-colors">{tNav("contact")}</Link></li>
          </ul>
        </div>

        {/* Column 3: Professional Notice & Socials */}
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wider mb-1">
              {t("noticeTitle")}
            </h4>
            <p className="text-[11px] text-stone-500 leading-relaxed font-light">
              {t("noticeText")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-stone-900 uppercase tracking-wider mb-1.5">
              {t("connect")}
            </h4>
            <div className="flex items-center gap-3 text-xs font-medium">
              <a
                href="https://www.tiktok.com/@dr.freud229"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 transition-colors"
              >
                TikTok
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://www.facebook.com/share/19hdb4RB4U/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 transition-colors"
              >
                Facebook
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="mailto:tidjanisobour@gmail.com"
                className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500 font-light">
        <p>© {new Date().getFullYear()} {t("rights")}</p>
        <p>Code Noir — Relational Wisdom & AI Initiative</p>
      </div>
    </footer>
  );
}