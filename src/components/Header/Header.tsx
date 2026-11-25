"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Languages, MoonStar, SunMedium } from "lucide-react";
import {
  headerLogoUrl,
  headerLogoDarkUrl,
  businessName,
} from "@/content/siteConfig";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

type ThemeMode = "light" | "dark";

type Props = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  theme: ThemeMode;
  setTheme: (value: ThemeMode) => void;
};

type NavItem = { label: string; href: string };

const Header: FC<Props> = ({ locale, setLocale, theme, setTheme }) => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = translations[locale].navItems;
  const isArabic = locale === "ar";
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, locale]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Scroll handling: update active section & URL hash
  useEffect(() => {
    sectionsRef.current = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const offset = window.innerHeight * 0.4;
      let current = "#home";

      for (const section of sectionsRef.current) {
        if (window.scrollY >= section.offsetTop - offset) {
          current = `#${section.id}`;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));

      if (current !== window.location.hash) {
        history.replaceState(null, "", current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id.replace("#", ""));
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
    history.replaceState(null, "", id);
  };

  return (
    <>
      <header
        dir={isArabic ? "rtl" : "ltr"}
        className={`fixed top-0 left-0 w-full z-50 text-[var(--color-text-primary)] transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-background)]/90 shadow-sm border-b border-[var(--color-primary)]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            aria-label="Go to home"
            className="flex items-center justify-center shrink-0 rounded-md overflow-hidden"
          >
            <div className="flex items-center justify-center h-[46px] w-[146px] sm:h-[52px] sm:w-[170px] overflow-hidden">
              <Image
                src={theme === "dark" ? headerLogoDarkUrl : headerLogoUrl}
                alt={`${businessName} Logo`}
                width={170}
                height={52}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item: NavItem) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[var(--color-primary)] rounded-full" />
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)]/80 text-[var(--color-primary)] shadow-sm transition hover:shadow-md"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <MoonStar className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setLocale(isArabic ? "en" : "ar")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)]/80 px-3 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition hover:shadow-md"
              aria-label={
                isArabic ? "Switch to English" : "التبديل إلى العربية"
              }
            >
              <Languages className="h-4 w-4" />
              <span>{translations[locale].languageToggle}</span>
            </button>

            <a
              href="tel:01061286191"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 lg:px-4 lg:py-2 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg shadow-[var(--color-primary)]/30 transition-all duration-300 hover:bg-[var(--color-primary)]/90"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden lg:block">
                {translations[locale].cta.primaryAction}
              </span>
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)]/80 text-[var(--color-primary)] shadow-sm"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <MoonStar className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setLocale(isArabic ? "en" : "ar")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-surface)]/80 px-2.5 py-2 text-xs font-semibold text-[var(--color-primary)] shadow-sm"
              aria-label={
                isArabic ? "Switch to English" : "التبديل إلى العربية"
              }
            >
              <Languages className="h-4 w-4" />
              <span>{translations[locale].languageToggle}</span>
            </button>
          </div>

          {/* Mobile Open Button */}
          <button
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden cursor-pointer"
          >
            <Menu size={24} className="text-current" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-background)] text-[var(--color-text-primary)]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center justify-center h-[38px] w-[110px] overflow-hidden">
              <Image
                src={theme === "dark" ? headerLogoDarkUrl : headerLogoUrl}
                alt={`${businessName} Logo`}
                width={110}
                height={38}
                className="h-full w-full object-contain"
              />
            </div>

            <button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              <X size={32} className="text-current" />
            </button>
          </div>

          <nav className="px-6 pt-12">
            <ul className="flex flex-col gap-8">
              {navItems.map((item: NavItem) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xl font-bold cursor-pointer w-full text-left ${
                      activeSection === item.href
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
