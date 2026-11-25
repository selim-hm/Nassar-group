import { Phone, MessageCircle } from "lucide-react";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Cta = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <section
      style={{ backgroundImage: `url('/bg/bg1.jpg')` }}
      className="relative bg-cover bg-bottom-right bg-no-repeat"
    >
      <div className="py-20 bg-[var(--color-primary)]/90">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-on-surface)]">
            {t.ctaSection.heading}
          </h2>

          <p className="mt-4 text-lg text-[var(--color-text-accent-on-surface)]">
            {t.ctaSection.subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:01061286191"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-[var(--color-accent)] text-black hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              {t.cta.primaryAction}
            </a>

            <a
              href="https://wa.me/201061286191"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition"
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.secondaryAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
