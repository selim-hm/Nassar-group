"use client";

import MethodologyCard from "./MethodologyCard";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const TeachingMethodology = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <section id="methodology" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {t.methodology.heading}
          </h2>
          {t.methodology.subheading && (
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t.methodology.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.methodology.items.map((item, index) => (
            <MethodologyCard
              key={`${item.title}-${index}`}
              item={{
                id: String(index + 1),
                title: item.title,
                description: item.description,
                icon: [
                  "book",
                  "shield",
                  "users",
                  "userCheck",
                  "graduationCap",
                  "book",
                ][index],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
