"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { coursesData } from "@/content/coursesData";
import { headerLogoDarkUrl, headerLogoUrl } from "@/content/siteConfig";

type Locale = "en" | "ar";
type ThemeMode = "light" | "dark";
type CoursePlan =
  (typeof coursesData)[number]["certifications"][number]["plans"][number];

export default async function CourseMorePage({
  params,
}: {
  params: Promise<{ slug: string; certId: string }>;
}) {
  const { slug, certId } = await params;
  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  const certification = course.certifications.find(
    (item) => item.id === certId,
  );

  if (!certification) {
    notFound();
  }

  return (
    <CourseMoreDetailsClient course={course} certification={certification} />
  );
}

function CourseMoreDetailsClient({
  course,
  certification,
}: {
  course: (typeof coursesData)[number];
  certification: (typeof course.certifications)[number];
}) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof document === "undefined") return "en";
    const savedLocale = localStorage.getItem("locale");
    return savedLocale === "ar" || savedLocale === "en" ? savedLocale : "en";
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof document === "undefined") return "light";
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "light";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("locale", locale);
    localStorage.setItem("theme", theme);
  }, [locale, theme]);

  const isArabic = locale === "ar";
  const currentLogo = theme === "dark" ? headerLogoDarkUrl : headerLogoUrl;

  const getStandardPlans = (plans: CoursePlan[]) => {
    const basePlan = plans[0];
    if (!basePlan) return [];

    const planTypes = [
      { audience: "individual" as const, enrollment: "registered" as const },
      { audience: "individual" as const, enrollment: "live" as const },
      { audience: "company" as const, enrollment: "registered" as const },
      { audience: "company" as const, enrollment: "live" as const },
    ];

    return planTypes.map(({ audience, enrollment }) => {
      const existingPlan = plans.find(
        (plan) => plan.audience === audience && plan.enrollment === enrollment,
      );

      if (existingPlan) return existingPlan;

      const isIndividual = audience === "individual";
      const isRegistered = enrollment === "registered";

      return {
        ...basePlan,
        id: `${basePlan.id}-${audience}-${enrollment}`,
        audience,
        enrollment,
        label: `${isIndividual ? "Individual" : "Company"} / ${isRegistered ? "Registered" : "Live"}`,
        labelAr: `${isIndividual ? "فرد" : "شركة"} / ${isRegistered ? "مسجل" : "لايف"}`,
      };
    });
  };

  const standardPlans = getStandardPlans(certification.plans);

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[var(--color-primary)]/15 bg-[var(--color-surface)] p-6 shadow-xl md:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            {isArabic ? "← العودة إلى المسار" : "← Back to course"}
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLocale(isArabic ? "en" : "ar")}
              className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]"
            >
              {isArabic ? "EN" : "AR"}
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-6">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-[var(--color-primary)]/15 bg-[var(--color-surface)]">
              <img
                src={certification.logo ?? currentLogo}
                alt={
                  isArabic
                    ? `${certification.titleAr} logo`
                    : `${certification.title} logo`
                }
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary]">
              {isArabic
                ? certification.awardingBodyAr
                : certification.awardingBody}
            </p>
            <h1 className="mt-3 text-3xl font-black text-[var(--color-text-primary)]">
              {isArabic ? certification.titleAr : certification.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              {isArabic
                ? certification.descriptionAr
                : certification.description}
            </p>

            <div className="mt-6 rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-surface)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                {isArabic ? "يبدأ من" : "Starting from"}
              </p>
              <p className="mt-2 text-2xl font-black text-[var(--color-primary)]">
                {standardPlans[0]?.price ?? "-"}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-[28px] border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-6">
              <h2 className="text-2xl font-black text-[var(--color-text-primary)]">
                {isArabic ? "عن هذه الشهادة" : "About this certification"}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
                {isArabic
                  ? certification.descriptionAr
                  : certification.description}
              </p>
            </section>

            <section className="rounded-[28px] border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-6">
              <h2 className="text-2xl font-black text-[var(--color-text-primary)]">
                {isArabic ? "الخطط المتاحة" : "Available plans"}
              </h2>

              <div className="mt-5 space-y-4">
                {standardPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-lg font-black text-[var(--color-text-primary)]">
                        {isArabic ? plan.labelAr : plan.label}
                      </p>
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-bold text-[var(--color-primary)]">
                        {plan.price}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {isArabic ? plan.descriptionAr : plan.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
                      {(isArabic ? plan.featuresAr : plan.features).map(
                        (feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                            {feature}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
