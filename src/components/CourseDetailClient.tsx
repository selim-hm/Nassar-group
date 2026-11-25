"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { coursesData } from "@/content/coursesData";
import { headerLogoDarkUrl, headerLogoUrl } from "@/content/siteConfig";

type Locale = "en" | "ar";
type ThemeMode = "light" | "dark";

const arabicCountries = [
  "السعودية",
  "الإمارات",
  "مصر",
  "الأردن",
  "قطر",
  "الكويت",
  "البحرين",
  "عمان",
  "لبنان",
  "سوريا",
  "العراق",
  "اليمن",
  "موريتانيا",
  "تونس",
  "المغرب",
  "الجزائر",
  "ليبيا",
  "فلسطين",
];

const specialties = [
  "إدارة الموارد البشرية",
  "تنمية الموارد البشرية",
  "إدارة المشاريع",
  "الأمن الصناعي",
  "المحاسبة والمراجعة",
  "اللغة الإنجليزية",
  "اللغة العربية",
  "التدريب والتطوير",
  "القيادة والأداء",
  "الاستشارات الإدارية",
];

const getAudienceLabel = (
  audience: "individual" | "company",
  locale: Locale,
) => {
  if (locale === "ar") return audience === "individual" ? "فرد" : "شركة";
  return audience === "individual" ? "Individual" : "Company";
};

const getEnrollmentLabel = (
  enrollment: "registered" | "live",
  locale: Locale,
) => {
  if (locale === "ar") return enrollment === "registered" ? "مسجل" : "لايف";
  return enrollment === "registered" ? "Registered" : "Live";
};

const getStandardPlans = (
  plans: (typeof coursesData)[number]["certifications"][number]["plans"],
) => {
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

function CourseSelectionFlow({
  course,
  locale,
}: {
  course: (typeof coursesData)[number];
  locale: Locale;
}) {
  const certifications = course.certifications ?? [];
  const [selectedId, setSelectedId] = useState(certifications[0]?.id ?? "");
  const [selectedPlanId, setSelectedPlanId] = useState(
    certifications[0]?.plans?.[0]?.id ?? "",
  );
  const [showForm, setShowForm] = useState(false);

  const selectedCertification =
    certifications.find((item) => item.id === selectedId) ?? certifications[0];

  const handleSelectCertification = (cert: (typeof certifications)[number]) => {
    setSelectedId(cert.id);
    setSelectedPlanId(cert.plans?.[0]?.id ?? "");
    setShowForm(false);

    window.setTimeout(() => {
      document
        .getElementById("certificate-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleEnrollNow = (cert: (typeof certifications)[number]) => {
    setSelectedId(cert.id);
    setSelectedPlanId(cert.plans?.[0]?.id ?? "");
    setShowForm(true);

    window.setTimeout(() => {
      document
        .getElementById("certificate-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const standardPlans = useMemo(
    () => getStandardPlans(selectedCertification?.plans ?? []),
    [selectedCertification],
  );

  const selectedPlan = useMemo(() => {
    return (
      standardPlans.find((item) => item.id === selectedPlanId) ??
      standardPlans[0]
    );
  }, [standardPlans, selectedPlanId]);

  const isArabic = locale === "ar";
  const currentLogo = headerLogoUrl;

  if (!selectedCertification) return null;

  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((cert) => {
          const isSelected = cert.id === selectedCertification.id;

          return (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectCertification(cert)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelectCertification(cert);
                }
              }}
              className={`cursor-pointer rounded-3xl border p-5 text-right transition-all duration-200 ${
                isSelected
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-lg shadow-[var(--color-primary)]/10"
                  : "border-[var(--color-primary)]/15 bg-[var(--color-background)] hover:border-[var(--color-primary)]/40"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-background)] shadow-sm">
                    <img
                      src={cert.logo ?? currentLogo}
                      alt={
                        isArabic ? `${cert.titleAr} logo` : `${cert.title} logo`
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl bg-[var(--color-primary)]/10 px-3 py-2 text-sm font-black text-[var(--color-primary)]">
                    {cert.badge}
                  </div>
                </div>
                <div className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                  {isArabic ? cert.awardingBodyAr : cert.awardingBody}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-black text-[var(--color-text-primary)]">
                  {isArabic ? cert.titleAr : cert.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {isArabic ? cert.descriptionAr : cert.description}
                </p>
              </div>

              <div className="mt-5 space-y-3 border-t border-[var(--color-primary)]/10 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
                    {cert.plans?.[0]?.price ?? "-"}
                  </span>
                  <Link
                    href={`/courses/more/${course.slug}/${cert.id}`}
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                    className="inline-flex rounded-full bg-[var(--color-primary)] px-3 py-2 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    {isArabic ? "اعرف أكثر" : "Learn more"}
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleEnrollNow(cert);
                  }}
                  className="w-full rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-sm font-bold text-[var(--color-text-primary)] transition hover:border-[var(--color-primary)]/40"
                >
                  {isArabic ? "قدم الآن" : "Enroll now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCertification && (
        <div
          id="certificate-detail"
          className="rounded-[30px] border border-[var(--color-primary)]/15 bg-[var(--color-background)] p-6 shadow-[0_18px_42px_rgba(31,60,85,0.08)]"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-surface)]">
                <img
                  src={selectedCertification.logo ?? currentLogo}
                  alt={
                    isArabic
                      ? `${selectedCertification.titleAr} logo`
                      : `${selectedCertification.title} logo`
                  }
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                  {isArabic ? "شركتنا" : "Our Company"}
                </p>
                <h3 className="text-xl font-black text-[var(--color-text-primary)]">
                  {isArabic
                    ? selectedCertification.awardingBodyAr
                    : selectedCertification.awardingBody}
                </h3>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-surface)] px-4 py-3 text-center shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                {isArabic ? "السعر" : "Price"}
              </p>
              <p className="mt-1 text-xl font-black text-[var(--color-primary)]">
                {selectedPlan?.price ?? standardPlans[0]?.price ?? "-"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {standardPlans.map((plan) => {
                const isSelectedPlan = plan.id === selectedPlan?.id;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                      isSelectedPlan
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : "border-[var(--color-primary)]/20 bg-[var(--color-background)] text-[var(--color-text-primary)] hover:border-[var(--color-primary)]/50"
                    }`}
                  >
                    {isArabic ? plan.labelAr : plan.label}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                  {isArabic ? "بيانات مختصرة" : "Summary"}
                </p>
                <h4 className="mt-3 text-2xl font-black text-[var(--color-text-primary)]">
                  {isArabic
                    ? selectedCertification.titleAr
                    : selectedCertification.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {isArabic
                    ? selectedCertification.descriptionAr
                    : selectedCertification.description}
                </p>

                <div className="mt-5 border-t border-[var(--color-primary)]/10 pt-4">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-[var(--color-text-secondary)]">
                      {isArabic ? "الفئة" : "Audience"}
                    </span>
                    <strong className="text-[var(--color-text-primary)]">
                      {getAudienceLabel(selectedPlan.audience, locale)}
                    </strong>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                    <span className="text-[var(--color-text-secondary)]">
                      {isArabic ? "نوع التسجيل" : "Enrollment"}
                    </span>
                    <strong className="text-[var(--color-text-primary)]">
                      {getEnrollmentLabel(selectedPlan.enrollment, locale)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                  {isArabic ? "المسار" : "Path"}
                </p>
                <div className="mt-4 rounded-2xl bg-[var(--color-background)] p-4 shadow-sm">
                  <p className="text-base font-black text-[var(--color-text-primary)]">
                    {isArabic ? selectedPlan.pathAr : selectedPlan.path}
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
                    {isArabic
                      ? selectedPlan.priceNoteAr
                      : selectedPlan.priceNote}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {(isArabic
                    ? selectedPlan.featuresAr
                    : selectedPlan.features
                  ).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-[var(--color-text-secondary)]">
              {isArabic ? course.titleAr : course.title} •{" "}
              {isArabic
                ? selectedCertification.titleAr
                : selectedCertification.title}
            </div>
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--color-primary)]/25 transition hover:opacity-90"
            >
              {isArabic ? "قدم الأن" : "Apply now"}
            </button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-5 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-[var(--color-text-primary)]">
            {isArabic ? "تسجيل الآن" : "Register now"}
          </h2>
          <form
            action="https://formsubmit.co/nassar.advisory.group@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="course" value={course.titleAr} />
            <input
              type="hidden"
              name="certificate"
              value={selectedCertification?.title ?? ""}
            />
            <input
              type="hidden"
              name="plan"
              value={selectedPlan?.label ?? ""}
            />
            <input
              type="hidden"
              name="_subject"
              value={`تسجيل جديد - ${course.titleAr} - ${selectedCertification?.title ?? ""}`}
            />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "الاسم بالعربية" : "Name in Arabic"}
              </label>
              <input
                name="fullNameAr"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                placeholder={isArabic ? "مثل: محمد علي" : "e.g. Mohammed Ali"}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "الاسم بالإنجليزية" : "Name in English"}
              </label>
              <input
                name="fullNameEn"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                placeholder={
                  isArabic ? "مثل: Mohammed Ali" : "e.g. Mohammed Ali"
                }
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "رقم الهاتف (واتساب)" : "Phone number (WhatsApp)"}
              </label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                placeholder="+966 5xxxxxxxx"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "النوع" : "Gender"}
              </label>
              <select
                name="gender"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
              >
                <option value="">
                  {isArabic ? "اختر النوع" : "Select gender"}
                </option>
                <option value="ذكر">{isArabic ? "ذكر" : "Male"}</option>
                <option value="أنثى">{isArabic ? "أنثى" : "Female"}</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "الدولة" : "Country"}
              </label>
              <select
                name="country"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
              >
                <option value="">
                  {isArabic ? "اختر الدولة" : "Select country"}
                </option>
                {arabicCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "التخصص" : "Specialty"}
              </label>
              <select
                name="specialty"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
              >
                <option value="">
                  {isArabic ? "اختر التخصص" : "Select specialty"}
                </option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                {isArabic ? "المسار التدريبي" : "Training path"}
              </label>
              <select
                name="path"
                required
                className="w-full rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] px-3 py-2 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
              >
                <option value="">
                  {isArabic ? "اختر المسار" : "Select path"}
                </option>
                <option value="الدبلوم المهني">
                  {isArabic ? "الدبلوم المهني" : "Professional diploma"}
                </option>
                <option value="الماجستير المهني">
                  {isArabic ? "الماجستير المهني" : "Professional master"}
                </option>
                <option value="الدكتوراه المهنية">
                  {isArabic ? "الدكتوراه المهنية" : "Professional doctorate"}
                </option>
                <option value="تأهيل لشهادات احترافية">
                  {isArabic
                    ? "تأهيل لشهادات احترافية"
                    : "Certification preparation"}
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--color-primary)] px-4 py-3 font-bold text-white shadow-lg shadow-[var(--color-primary)]/30 transition hover:opacity-90"
            >
              {isArabic ? "إرسال التسجيل" : "Submit registration"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export function CourseDetailClient({
  course,
}: {
  course: (typeof coursesData)[number];
}) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof document === "undefined") return "en";
    const savedLocale = localStorage.getItem("locale");
    return savedLocale === "ar" || savedLocale === "en" ? savedLocale : "en";
  });
  const [theme] = useState<ThemeMode>(() => {
    if (typeof document === "undefined") return "light";
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "light";
  });
  const currentLogo = theme === "dark" ? headerLogoDarkUrl : headerLogoUrl;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("locale", locale);
    localStorage.setItem("theme", theme);
  }, [locale, theme]);

  const isArabic = locale === "ar";

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-16 text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-6 shadow-xl md:p-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            {isArabic ? "← العودة للصفحة الرئيسية" : "← Back to home"}
          </Link>
        </div>

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {course.badge}
          </p>
          <h1 className="text-3xl font-black md:text-5xl">
            {isArabic ? course.titleAr : course.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
            {isArabic ? course.descriptionAr : course.description}
          </p>
        </div>

        <CourseSelectionFlow course={course} locale={locale} />
      </div>
    </main>
  );
}
