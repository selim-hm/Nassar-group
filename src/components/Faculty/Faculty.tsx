"use client";

import FacultyCard from "./FacultyCard";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Faculty = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <section id="faculty" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {t.faculty.heading}
          </h2>
          {t.faculty.subheading && (
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t.faculty.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.faculty.items.map((faculty, index) => (
            <FacultyCard
              key={`${faculty.name}-${index}`}
              faculty={{
                id: String(index + 1),
                name: faculty.name,
                role: faculty.role,
                experience: faculty.experience,
                photo: [
                  "/images/cp-logo.avif",
                  "/images/pmp-logo.jpg",
                  "/images/psp-logo.png",
                  "/images/atd-logo.png",
                ][index],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
