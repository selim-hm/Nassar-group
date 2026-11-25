import { FC } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { coursesData } from "@/content/coursesData";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Courses: FC<Props> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section
      id="courses"
      className="w-full py-20 bg-[var(--color-background)]"
      aria-labelledby="courses"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {t.courses.heading}
          </h2>
          {t.courses.subheading && (
            <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t.courses.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coursesData.map((course) => {
            const title = locale === "ar" ? course.titleAr : course.title;
            const description =
              locale === "ar" ? course.descriptionAr : course.description;

            const isComingSoon =
              course.slug === "accounting-auditing" ||
              course.slug === "talent-development-atd";

            const CardContent = (
              <>
                <div className="absolute top-0 right-0 h-full w-1 md:w-3 bg-[var(--color-primary)] transition-all duration-500 group-hover:w-full group-hover:bg-[var(--color-primary)]" />

                <div className="relative z-10 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center transition-colors duration-500 group-hover:bg-white/20">
                    <BookOpen className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-[var(--color-text-primary)] transition-colors duration-500 group-hover:text-white">
                      {title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-primary)]/70 transition-colors duration-500 group-hover:text-white/90">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)] group-hover:text-white">
                    {course.badge}
                  </span>
                  <span className="text-right text-xs font-semibold tracking-wide text-[var(--color-primary)] transition-colors duration-500 group-hover:text-white/80">
                    {isComingSoon ? "Soon" : t.courses.availableNow}
                  </span>
                </div>
              </>
            );

            if (isComingSoon) {
              return (
                <div
                  key={course.slug}
                  aria-disabled="true"
                  className="group relative block cursor-not-allowed bg-[var(--color-surface)]/70 rounded-2xl shadow-md border border-[var(--color-primary)]/10 p-6 md:p-7 overflow-hidden opacity-60 grayscale-[35%]"
                >
                  {CardContent}
                </div>
              );
            }

            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative block bg-[var(--color-surface)] rounded-2xl shadow-md border border-[var(--color-primary)]/10 p-6 md:p-7 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
