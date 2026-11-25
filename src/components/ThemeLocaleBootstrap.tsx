"use client";

import { useEffect } from "react";

type Locale = "en" | "ar";
type ThemeMode = "light" | "dark";

export default function ThemeLocaleBootstrap() {
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    const savedTheme = localStorage.getItem("theme");

    const locale: Locale =
      savedLocale === "ar" || savedLocale === "en" ? savedLocale : "en";

    const theme: ThemeMode =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-theme", theme);
    document.body.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.style.colorScheme = theme;

    window.localStorage.setItem("locale", locale);
    window.localStorage.setItem("theme", theme);
  }, []);

  return null;
}
