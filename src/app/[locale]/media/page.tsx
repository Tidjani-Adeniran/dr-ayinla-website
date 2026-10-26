import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import FadeIn from "@/components/FadeIn";

export default function MediaPage() {
  const t = useTranslations("MediaPage");

  const tiktokVideos = [
    {
      title: t("v1Title"),
      desc: t("v1Desc"),
      tag: "Intelligence Relationnelle",
    },
    {
      title: t("v2Title"),
      desc: t("v2Desc"),
      tag: "Pression Familiale",
    },
    {
      title: t("v3Title"),
      desc: t("v3Desc"),
      tag: "Communication",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20 text-stone-800">
      {/* HEADER SECTION */}
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

      {/* TIKTOK FEATURED SECTION */}
      <section className="space-y-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-stone-900">
                {t("tiktokSecTitle")}
              </h2>
              <p className="text-sm text-stone-600 font-light mt-1 max-w-xl">
                {t("tiktokSecSub")}
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@dr.freud229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-stone-100 text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-amber-900 transition-colors shrink-0 shadow-sm"
            >
              {t("visitTiktok")} →
            </a>
          </div>
        </FadeIn>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiktokVideos.map((video, idx) => (
            <FadeIn key={idx} delay={0.1 * (idx + 1)}>
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between p-6 space-y-4">
                <div className="space-y-3">
                  <span className="inline-block text-[10px] font-mono uppercase bg-amber-900/10 text-amber-900 px-2.5 py-0.5 rounded-md font-semibold">
                    {video.tag}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-stone-900 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {video.desc}
                  </p>
                </div>

                <a
                  href="https://www.tiktok.com/@dr.freud229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-stone-900 transition-colors pt-2"
                >
                  {t("watchBtn")} <span>→</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* KEYNOTE & SPEAKING TOPICS CATALOGUE */}
      <section className="bg-stone-100/70 border border-stone-200 p-8 sm:p-12 rounded-3xl space-y-8">
        <FadeIn>
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("speakingTitle")}
            </h2>
            <p className="text-sm text-stone-600 font-light">
              {t("speakingSub")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-xs h-full">
              <span className="text-xs font-mono uppercase text-amber-900 font-semibold">
                Topic 01
              </span>
              <h3 className="text-lg font-serif font-semibold text-stone-900">
                {t("k1Title")}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {t("k1Desc")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-xs h-full">
              <span className="text-xs font-mono uppercase text-amber-900 font-semibold">
                Topic 02
              </span>
              <h3 className="text-lg font-serif font-semibold text-stone-900">
                {t("k2Title")}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {t("k2Desc")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-xs h-full">
              <span className="text-xs font-mono uppercase text-amber-900 font-semibold">
                Topic 03
              </span>
              <h3 className="text-lg font-serif font-semibold text-stone-900">
                {t("k3Title")}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {t("k3Desc")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MEDIA CALL TO ACTION */}
      <section className="text-center bg-white border border-stone-200 p-10 sm:p-14 rounded-3xl space-y-6 shadow-sm">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif font-semibold text-stone-900">
              {t("mediaCtaTitle")}
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed">
              {t("mediaCtaSub")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Link
            href="/contact"
            className="inline-block bg-stone-900 text-stone-100 font-medium px-8 py-4 rounded-xl hover:bg-amber-900 transition-all shadow-md hover:shadow-lg text-sm"
          >
            {t("mediaCtaBtn")}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}