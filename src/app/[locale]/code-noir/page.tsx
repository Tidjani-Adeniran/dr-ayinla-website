import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import FadeIn from "@/components/FadeIn";

export default function CodeNoirPage() {
  const t = useTranslations("CodeNoirPage");

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20 text-stone-800">
      {/* HEADER SECTION */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-stone-900/10 border border-stone-900/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-stone-900">
            <span className="w-2 h-2 rounded-full bg-amber-800 animate-pulse"></span>
            {t("badge")}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-stone-900 leading-[1.15]">
            {t("title")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-stone-600 text-lg sm:text-xl font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </FadeIn>
      </section>

      {/* VISION & STRATEGIC POSITIONING */}
      <section className="bg-white border border-stone-200 p-8 sm:p-12 rounded-3xl space-y-6 shadow-sm">
        <FadeIn>
          <h2 className="text-2xl font-serif font-semibold text-stone-900 border-b border-stone-100 pb-3">
            {t("sec1Title")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-stone-700 font-light text-base leading-relaxed">
            {t("sec1Text1")}
          </p>
        </FadeIn>
      </section>

      {/* WHAT IT IS VS WHAT IT IS NOT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What it IS */}
        <FadeIn delay={0.1}>
          <div className="bg-stone-50 border border-stone-200 p-8 rounded-3xl space-y-6 h-full shadow-xs">
            <h3 className="text-xl font-serif font-semibold text-stone-900 border-b border-stone-200 pb-3">
              {t("whatIsTitle")}
            </h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-stone-900">{t("w1Title")}</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{t("w1Desc")}</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-stone-900">{t("w2Title")}</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{t("w2Desc")}</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-stone-900">{t("w3Title")}</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{t("w3Desc")}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* What it IS NOT */}
        <FadeIn delay={0.2}>
          <div className="bg-amber-900/5 border border-amber-900/20 p-8 rounded-3xl space-y-6 h-full shadow-xs">
            <h3 className="text-xl font-serif font-semibold text-amber-950 border-b border-amber-900/10 pb-3">
              {t("whatIsNotTitle")}
            </h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-950">{t("n1Title")}</h4>
                <p className="text-xs text-amber-950/80 font-light leading-relaxed">{t("n1Desc")}</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-950">{t("n2Title")}</h4>
                <p className="text-xs text-amber-950/80 font-light leading-relaxed">{t("n2Desc")}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CLINICAL SAFETY & CRISIS PROTOCOL BANNER */}
      <section className="bg-stone-900 text-stone-100 p-8 sm:p-12 rounded-3xl space-y-4 shadow-xl">
        <FadeIn>
          <div className="inline-block text-[10px] font-mono uppercase bg-amber-800 text-stone-100 px-2.5 py-1 rounded-md font-semibold mb-2">
            Priorité Absolue
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-100">
            {t("safetyTitle")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
            {t("safetyText")}
          </p>
        </FadeIn>
      </section>

      {/* CURRENT DEVELOPMENT & CONTRIBUTIONS CALLOUT */}
      <section className="bg-amber-50/70 border border-amber-200 p-8 sm:p-12 rounded-3xl space-y-6 text-center max-w-3xl mx-auto shadow-sm">
        <FadeIn>
          <span className="inline-block text-xs font-mono uppercase bg-amber-900 text-amber-100 px-3 py-1 rounded-full font-semibold">
            En Développement Actif
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 mt-3">
            {t("devTitle")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-stone-700 font-light text-sm sm:text-base leading-relaxed">
            {t("devText")}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/contact"
            className="inline-block bg-amber-900 text-stone-100 font-medium px-8 py-3.5 rounded-xl hover:bg-amber-800 transition-all shadow-md text-sm"
          >
            {t("devBtn")}
          </Link>
        </FadeIn>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="text-center bg-white border border-stone-200 p-10 sm:p-14 rounded-3xl space-y-6 shadow-sm">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("ctaTitle")}
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed">
              {t("ctaText")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Link
            href="/contact"
            className="inline-block bg-stone-900 text-stone-100 font-medium px-8 py-4 rounded-xl hover:bg-stone-800 transition-all shadow-md hover:shadow-lg text-sm"
          >
            {t("ctaBtn")}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}