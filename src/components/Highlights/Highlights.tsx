import { FC } from "react";
import { highlightsIconMap } from "@/lib/highlightsIconMap";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Highlights: FC<Props> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section
      id="highlights"
      className="relative w-full"
      aria-label="Key highlights"
    >
      <div className="bg-[var(--color-background)]/90">
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.highlights.map((item, index) => {
            const Icon =
              highlightsIconMap[item.icon as keyof typeof highlightsIconMap];
            const images = [
              "/highlights/faculty.jpg",
              "/highlights/students.jpg",
              "/highlights/smallBatch.jpg",
              "/highlights/material.jpg",
              "/highlights/fees.jpg",
              "/highlights/safe.jpg",
            ];

            return (
              <div
                key={`${item.text}-${index}`}
                className="flex flex-col bg-[var(--color-surface)] rounded-2xl shadow-md hover:shadow-xl group transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-48">
                  <img
                    src={images[index]}
                    alt={item.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-0 h-0 bg-[var(--color-primary)]/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[300%] group-hover:h-[300%] rotate-45 origin-center" />
                  </div>

                  {Icon && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[var(--color-primary)] w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                      <Icon
                        className="w-10 h-10 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1 px-6 pt-10 pb-6 text-center">
                  <p className="text-[var(--color-text-primary)] font-bold text-lg tracking-wide">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
