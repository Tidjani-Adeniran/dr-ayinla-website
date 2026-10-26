import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-stone-800">
      {/* HEADER SECTION */}
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

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: DIRECT CONTACT CARDS & SOCIAL LINKS */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Communication */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-6 shadow-sm">
              <h2 className="text-xs uppercase tracking-widest text-stone-500 font-semibold border-b border-stone-100 pb-3">
                {t("directTitle")}
              </h2>

              {/* Email */}
              <div className="space-y-1">
                <p className="text-xs text-stone-500 font-medium">{t("emailLabel")}</p>
                <a
                  href="mailto:tidjanisobour@gmail.com"
                  className="text-stone-900 font-serif text-lg font-semibold hover:text-amber-800 transition-colors block break-all"
                >
                  tidjanisobour@gmail.com
                </a>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1">
                <p className="text-xs text-stone-500 font-medium">{t("phoneLabel")}</p>
                <a
                  href="https://wa.me/2290168697789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 font-serif text-lg font-semibold hover:text-amber-800 transition-colors inline-flex items-center gap-2"
                >
                  +229 01 68 69 77 89
                  <span className="text-[10px] bg-green-100 text-green-800 font-sans px-2 py-0.5 rounded-full font-medium">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Social Media Channels */}
          <FadeIn delay={0.2}>
            <div className="bg-amber-900/5 border border-amber-900/10 p-6 rounded-2xl space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-amber-900 font-semibold border-b border-amber-900/10 pb-3">
                {t("socialTitle")}
              </h2>

              <div className="space-y-3">
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@dr.freud229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-stone-200 hover:border-amber-800 transition-all shadow-sm group"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs text-stone-500">{t("tiktokLabel")}</p>
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                      @dr.freud229
                    </p>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-800 text-sm font-bold">
                    →
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19hdb4RB4U/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-stone-200 hover:border-amber-800 transition-all shadow-sm group"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs text-stone-500">{t("facebookLabel")}</p>
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                      Docteur Freud
                    </p>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-800 text-sm font-bold">
                    →
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.3}>
            <div className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-2xl font-serif font-semibold text-stone-900">
                {t("formTitle")}
              </h2>

              <form
                action="https://formspree.io/f/mqpppprk"
                method="POST"
                className="space-y-5"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/40 text-sm bg-stone-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    {t("emailInputLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/40 text-sm bg-stone-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    {t("subjectLabel")}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. Media Collaboration Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/40 text-sm bg-stone-50/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    {t("messageLabel")}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/40 text-sm bg-stone-50/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 text-stone-100 font-medium py-3.5 rounded-xl hover:bg-stone-800 transition-all shadow-md text-sm"
                >
                  {t("submitBtn")}
                </button>

                <p className="text-[11px] text-stone-500 text-center pt-2">
                  {t("notice")}
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}