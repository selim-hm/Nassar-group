import { FC } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const About: FC<Props> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section id="about" aria-label="About section" className="w-full">
      <div className="bg-[var(--color-background)]/80">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
              {t.about.title}
            </h2>

            <p className="text-base leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              {t.about.description}
            </p>

            <ul className="space-y-4">
              {t.about.bulletPoints.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[var(--color-text-primary)]"
                >
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 text-[var(--color-primary)]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/about/about.png"
              alt={t.about.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
