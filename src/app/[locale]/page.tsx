import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-amber-900/10 border border-amber-900/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-800 animate-pulse"></span>
              {t("badge")}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-stone-900 leading-[1.15]">
              {t("heroTitle")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-stone-700 text-lg font-light leading-relaxed max-w-xl">
              {t("heroSub")}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/appointments"
                className="bg-stone-900 text-stone-100 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-amber-900 transition-all shadow-md hover:shadow-lg"
              >
                {t("bookBtn")}
              </Link>
              <Link
                href="/code-noir"
                className="border border-stone-300 bg-white text-stone-900 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-stone-100 transition-all shadow-xs"
              >
                {t("exploreBtn")}
              </Link>
            </div>
          </FadeIn>

          {/* Quick Stats */}
          <FadeIn delay={0.5}>
            <div className="pt-8 border-t border-stone-200 grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">{t("stat1Num")}</p>
                <p className="text-xs text-stone-600 font-medium">{t("stat1Text")}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">{t("stat2Num")}</p>
                <p className="text-xs text-stone-600 font-medium">{t("stat2Text")}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">{t("stat3Num")}</p>
                <p className="text-xs text-stone-600 font-medium">{t("stat3Text")}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Hero Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <FadeIn delay={0.3} direction="left" className="w-full">
            <div className="relative w-full max-w-md aspect-[4/5] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/dr-ayinla.jpg"
                alt="Dr. Ayinla (Dr. Freud)"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent z-10 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-200">
                  Université d'Abomey-Calavi
                </span>
                <p className="text-sm font-serif italic text-stone-200 mt-1">
                  "Le premier pas vers le changement commence par une conversation."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("pillarsTitle")}
            </h2>
            <p className="text-stone-600 text-sm font-light">
              {t("pillarsSub")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white border border-stone-200 p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold">
                  01
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">{t("p1Title")}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t("p1Desc")}</p>
              </div>
              <Link href="/about" className="text-xs font-semibold text-amber-900 hover:text-stone-900 pt-4 block">
                Learn more →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-stone-200 p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold">
                  02
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">{t("p2Title")}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t("p2Desc")}</p>
              </div>
              <Link href="/code-noir" className="text-xs font-semibold text-amber-900 hover:text-stone-900 pt-4 block">
                Explore Code Noir →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white border border-stone-200 p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold">
                  03
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900">{t("p3Title")}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t("p3Desc")}</p>
              </div>
              <Link href="/appointments" className="text-xs font-semibold text-amber-900 hover:text-stone-900 pt-4 block">
                Book a session →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. CODE NOIR INITIATIVE PREVIEW BANNER */}
      <section className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="bg-stone-900 text-stone-100 p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono uppercase bg-amber-800 text-stone-100 px-3 py-1 rounded-full font-semibold">
                {t("codeNoirSectionBadge")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-100">
                {t("codeNoirSectionTitle")}
              </h2>
              <p className="text-stone-300 text-sm font-light leading-relaxed">
                {t("codeNoirSectionText")}
              </p>
            </div>
            <Link
              href="/code-noir"
              className="bg-white text-stone-900 font-medium px-6 py-3.5 rounded-xl text-xs hover:bg-amber-100 transition-colors shadow-sm shrink-0"
            >
              {t("codeNoirBtn")} →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 4. PUBLICATIONS & MEDIA TEASERS */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Publications Teaser */}
        <FadeIn delay={0.1}>
          <div className="bg-white border border-stone-200 p-8 rounded-3xl space-y-4 shadow-sm h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-amber-900 font-semibold">
                {t("pubsSectionBadge")}
              </span>
              <h3 className="text-2xl font-serif font-semibold text-stone-900">
                {t("pubsSectionTitle")}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {t("pubsSectionSub")}
              </p>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-stone-900 transition-colors pt-4"
            >
              {t("pubsBtn")} →
            </Link>
          </div>
        </FadeIn>

        {/* Media & TikTok Teaser */}
        <FadeIn delay={0.2}>
          <div className="bg-white border border-stone-200 p-8 rounded-3xl space-y-4 shadow-sm h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-amber-900 font-semibold">
                {t("mediaSectionBadge")}
              </span>
              <h3 className="text-2xl font-serif font-semibold text-stone-900">
                {t("mediaSectionTitle")}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {t("mediaSectionSub")}
              </p>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-stone-900 transition-colors pt-4"
            >
              {t("mediaBtn")} →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 5. FINAL MASTER APPOINTMENT CTA */}
      <section className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center bg-amber-50/70 border border-amber-200/80 p-10 sm:p-14 rounded-3xl space-y-6 shadow-sm">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900">
                {t("ctaTitle")}
              </h2>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                {t("ctaText")}
              </p>
            </div>

            <Link
              href="/appointments"
              className="inline-block bg-stone-900 text-stone-100 font-medium px-8 py-4 rounded-xl hover:bg-amber-900 transition-all shadow-md hover:shadow-lg text-sm"
            >
              {t("ctaBtn")}
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}