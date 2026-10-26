import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20 text-stone-800">
      {/* HERO BANNER SECTION */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-amber-900/10 border border-amber-900/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-amber-900">
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

      {/* EDITORIAL PORTRAIT & KEY PHILOSOPHY QUOTE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <FadeIn delay={0.2} direction="right" className="w-full">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/dr-ayinla.jpg"
                alt="Docteur Freud (Dr. Ayinla)"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent z-10 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-200">
                  Université d'Abomey-Calavi
                </span>
                <p className="text-sm font-serif italic text-stone-200 mt-1">
                  Docteur Freud — Relational Intelligence
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <FadeIn delay={0.3}>
            <blockquote className="bg-amber-50/70 border-l-4 border-amber-800 p-6 sm:p-8 rounded-r-2xl shadow-sm space-y-3">
              <p className="font-serif italic text-xl text-stone-900 leading-relaxed">
                "{t("quote")}"
              </p>
              <footer className="text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — Docteur Freud
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-4 font-light text-stone-700 leading-relaxed text-base">
              <h2 className="text-2xl font-serif font-semibold text-stone-900 border-b border-stone-200 pb-2">
                {t("bioTitle")}
              </h2>
              <p>{t("bioP1")}</p>
              <p>{t("bioP2")}</p>
              <p>{t("bioP3")}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="bg-stone-100/70 border border-stone-200 p-8 sm:p-12 rounded-3xl space-y-8">
        <FadeIn>
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("whoTitle")}
            </h2>
            <p className="text-sm text-stone-600 font-light">
              {t("whoSubtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[t("whoItem1"), t("whoItem2"), t("whoItem3"), t("whoItem4")].map((item, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-stone-100 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4 CORE GOALS / PILLARS GRID */}
      <section className="space-y-10">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("goalsTitle")}
            </h2>
            <div className="w-12 h-0.5 bg-amber-800 mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all h-full">
              <span className="text-xs font-mono uppercase bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-semibold">
                01. Vision
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("g1Title")}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {t("g1Desc")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all h-full">
              <span className="text-xs font-mono uppercase bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-semibold">
                02. Structure
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("g2Title")}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {t("g2Desc")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all h-full">
              <span className="text-xs font-mono uppercase bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-semibold">
                03. Dialogue
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("g3Title")}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {t("g3Desc")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-all h-full">
              <span className="text-xs font-mono uppercase bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-semibold">
                04. Guidance
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("g4Title")}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {t("g4Desc")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE THIS PRACTICE & SOCIOCULTURAL CONTEXT */}
      <section className="bg-amber-900 text-stone-100 p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <FadeIn>
            <h2 className="text-3xl font-serif font-semibold text-amber-100">
              {t("whyTitle")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-stone-200 text-base font-light leading-relaxed">
              {t("whyText1")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-amber-100/90 text-base font-light leading-relaxed">
              {t("whyText2")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="text-center bg-white border border-stone-200 p-10 sm:p-14 rounded-3xl space-y-6 shadow-sm">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900">
              {t("ctaTitle")}
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed">
              {t("ctaText")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Link
            href="/appointments"
            className="inline-block bg-stone-900 text-stone-100 font-medium px-8 py-4 rounded-xl hover:bg-stone-800 transition-all shadow-md hover:shadow-lg text-sm"
          >
            {t("ctaBtn")}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}