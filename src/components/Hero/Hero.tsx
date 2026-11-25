import { FC } from "react";
import { heroData } from "@/content/heroData";
import { Phone, MessageCircle } from "lucide-react";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Hero: FC<Props> = ({ locale }) => {
  const isArabic = locale === "ar";
  const t = translations[locale];

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      aria-label="Hero Section"
      style={{ backgroundImage: `url('/bg/bg3.png')` }}
      className="relative w-full bg-cover bg-bottom-right bg-no-repeat"
    >
      <div className="bg-[var(--color-background)]/90">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 lg:min-h-screen lg:overflow-hidden flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-end w-full">
            <div
              className={`space-y-4 sm:space-y-7 pt-20 lg:pb-10 ${isArabic ? "text-right" : "text-left"}`}
            >
              <h1 className="font-extrabold leading-tight text-[var(--color-text-primary)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {t.hero.heading}
              </h1>

              <p className="text-[var(--color-text-primary)]/90 leading-relaxed text-base sm:text-lg md:text-lg lg:text-xl max-w-xl">
                {t.hero.subheading}
              </p>

              <div
                className={
                  isArabic
                    ? "flex flex-col items-end gap-3 pt-4 sm:flex-row-reverse sm:justify-end"
                    : "flex flex-col sm:flex-row gap-4 pt-4"
                }
              >
                <a
                  href="tel:01061286191"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg shadow-[var(--color-primary)]/30 transition-all duration-300 hover:bg-[var(--color-primary)]/90"
                >
                  <Phone className="w-5 h-5" />
                  {t.cta.primaryAction}
                </a>

                <a
                  href="https://wa.me/201061286191"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold transition-all duration-300 hover:bg-[var(--color-primary)]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.cta.secondaryAction}
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end items-center">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="h-[55vh] sm:h-[74vh] md:h-[84vh] lg:h-[94vh] w-auto object-contain"
              />

              <div className="w-full h-0 absolute left-0 bottom-0 custom-shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
