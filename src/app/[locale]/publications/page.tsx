import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";

export default function PublicationsPage() {
  const t = useTranslations("PublicationsPage");

  const articles = [
    {
      id: "a1",
      title: t("a1Title"),
      excerpt: t("a1Excerpt"),
      date: t("a1Date"),
      category: t("a1Category"),
      readTime: t("a1ReadTime"),
      featured: true,
    },
    {
      id: "a2",
      title: t("a2Title"),
      excerpt: t("a2Excerpt"),
      date: t("a2Date"),
      category: t("a2Category"),
      readTime: t("a2ReadTime"),
      featured: false,
    },
    {
      id: "a3",
      title: t("a3Title"),
      excerpt: t("a3Excerpt"),
      date: t("a3Date"),
      category: t("a3Category"),
      readTime: t("a3ReadTime"),
      featured: false,
    },
  ];

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-stone-800">
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

      {/* FEATURED ESSAY (HERO POST) */}
      <FadeIn delay={0.2}>
        <div className="bg-stone-900 text-stone-100 border border-stone-800 p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase bg-amber-800 text-stone-100 px-2.5 py-1 rounded-md font-semibold">
                {t("featuredTag")}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {featuredArticle.date} • {featuredArticle.readTime} {t("minRead")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-semibold text-stone-100 leading-snug">
              {featuredArticle.title}
            </h2>

            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed">
              {featuredArticle.excerpt}
            </p>

            <div className="pt-2">
              <button className="bg-white text-stone-900 font-medium px-6 py-3 rounded-xl text-xs hover:bg-amber-100 transition-colors shadow-sm">
                {t("readBtn")} →
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ARTICLES GRID */}
      <section className="space-y-8">
        <FadeIn>
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-serif font-semibold text-stone-900">
              Recent Articles & Working Papers
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularArticles.map((article, idx) => (
            <FadeIn key={article.id} delay={0.1 * (idx + 1)}>
              <div className="bg-white border border-stone-200 p-8 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                    <span className="text-amber-900 font-semibold">{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-stone-900 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">
                    {article.readTime} {t("minRead")}
                  </span>
                  <button className="text-xs font-semibold text-amber-900 hover:text-stone-900 transition-colors">
                    {t("readBtn")} →
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}