import { FC } from "react";
import {
  footerLogoUrl,
  footerLogoDarkUrl,
  businessName,
} from "@/content/siteConfig";
import { socialIconMap } from "@/lib/socialIconMap";
import { translations, type Locale } from "@/lib/i18n";

type ThemeMode = "light" | "dark";

type Props = {
  locale: Locale;
  theme: ThemeMode;
};

const Footer: FC<Props> = ({ locale, theme }) => {
  const t = translations[locale];
  const footerLogoSrc = theme === "dark" ? footerLogoDarkUrl : footerLogoUrl;

  return (
    <footer
      style={{ backgroundImage: `url('/bg/bg3.png')` }}
      className="relative w-full bg-cover bg-bottom-right bg-no-repeat"
      aria-label="Footer"
    >
      <div className="bg-[var(--color-surface)]/95">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <img
                src={footerLogoSrc}
                alt={`${businessName} Logo`}
                className="w-36 h-auto object-contain mb-4"
                loading="lazy"
              />
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xs">
                {t.footer.description}
              </p>
            </div>

            <nav aria-label="Footer Navigation">
              <p className="font-semibold text-[var(--color-text-primary)] mb-4">
                {t.footer.quickLinks}
              </p>
              <ul className="space-y-3">
                {t.navItems.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-semibold text-[var(--color-text-primary)] mb-4">
                {t.footer.connect}
              </p>

              <div className="flex gap-4 mb-6">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "Facebook", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((link) => {
                  const Icon = socialIconMap[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>

              <p className="text-xs text-[var(--color-text-secondary)]">
                © 2026 Mohamed Selim Software Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
