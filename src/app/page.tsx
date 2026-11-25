"use client";

import { FC, useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import About from "@/components/About/About";
import Courses from "@/components/Courses/Courses";
import Results from "@/components/Result/Results";
import TeachingMethodology from "@/components/Teaching/TeachingMethodology";
import Faculty from "@/components/Faculty/Faculty";
import Testimonials from "@/components/Testimonials/Testimonials";
import Cta from "@/components/Cta/Cta";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import type { Locale } from "@/lib/i18n";

type ThemeMode = "light" | "dark";

const Home: FC = () => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const savedLocale = localStorage.getItem("locale");
    return savedLocale === "ar" || savedLocale === "en" ? savedLocale : "en";
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
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
    document.body.style.colorScheme = theme;
    window.localStorage.setItem("locale", locale);
    window.localStorage.setItem("theme", theme);
  }, [locale, theme]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] transition-colors duration-300">
      <Header
        locale={locale}
        setLocale={setLocale}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <Highlights locale={locale} />
      <Courses locale={locale} />
      <Results locale={locale} />
      <TeachingMethodology locale={locale} />
      <Faculty locale={locale} />
      <Testimonials locale={locale} />
      <Cta locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} theme={theme} />
    </div>
  );
};

export default Home;
