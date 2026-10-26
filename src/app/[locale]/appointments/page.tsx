import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";

export default function AppointmentsPage() {
  const t = useTranslations("Appointments");

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <FadeIn>
        <div className="border-b border-stone-200 pb-8 space-y-4">
          <p className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            {t("badge")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-stone-900">
            {t("title")}
          </h1>
          <p className="text-stone-600 text-lg font-light leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </FadeIn>

      {/* Professional Boundaries Notice */}
      <FadeIn delay={0.1}>
        <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-xl space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-900">
            {t("noticeTitle")}
          </h2>
          <p className="text-xs text-amber-950/80 leading-relaxed">
            {t("noticeText")}
          </p>
        </div>
      </FadeIn>

      {/* Session Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn delay={0.2}>
          <div className="bg-white/80 border border-stone-200 p-6 rounded-xl space-y-3 h-full flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-mono uppercase bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                {t("type1Duration")}
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("type1Title")}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t("type1Desc")}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white/80 border border-stone-200 p-6 rounded-xl space-y-3 h-full flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-mono uppercase bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                {t("type2Duration")}
              </span>
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                {t("type2Title")}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t("type2Desc")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Calendly Embed Section */}
      <FadeIn delay={0.4}>
        <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-semibold text-stone-900">
              Schedule Your Session
            </h2>
            <p className="text-xs text-stone-600">
              {t("bookPrompt")}
            </p>
          </div>

          {/* Calendly Live Embedded Widget */}
          <div className="w-full min-h-[700px] border border-stone-200 rounded-xl bg-white overflow-hidden shadow-sm">
            <iframe
              src="https://calendly.com/tidjanisobour/30min?embed_domain=localhost&embed_type=Inline"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Consultation with Dr. Ayinla"
              className="w-full h-[700px] rounded-xl"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}