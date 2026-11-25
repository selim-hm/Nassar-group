import { FC } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { translations, type Locale } from "@/lib/i18n";

const contactData = {
  phone: "01061286191",
  email: "nassar.advisory.group@gmail.com",
  address: "مول داون تاون، القاهرة، مصر",
  mapEmbedUrl:
    "https://www.google.com/maps?q=30.3726356,30.4995043&z=15&output=embed",
  mapDirectionsUrl: "https://maps.app.goo.gl/PVMcd3pCUXV2y58d7",
};

type Props = {
  locale: Locale;
};

const Contact: FC<Props> = ({ locale }) => {
  const t = translations[locale];

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: contactData.phone,
      href: `tel:${contactData.phone}`,
    },
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: contactData.email,
      href: `mailto:${contactData.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-[var(--color-background)]"
      aria-labelledby="contact-heading"
    >
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-2xl mb-12 text-center">
          <h2
            id="contact-heading"
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[var(--color-text-primary)]"
          >
            {t.contact.heading}
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-[var(--color-text-secondary)] leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] items-stretch">
          <div className="rounded-[2rem] border border-[var(--color-secondary)]/10 bg-[var(--color-surface)] p-5 sm:p-7 shadow-[0_20px_60px_rgba(31,60,85,0.10)]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    dir="ltr"
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--color-secondary)]/10 bg-[var(--color-background)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-on-surface)] shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {item.label}
                      </p>
                      <p className="mt-1 font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}

              <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-secondary)]/10 bg-[var(--color-background)] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-secondary)] text-white shadow-md">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {t.contact.labels.address}
                  </p>
                  <p className="mt-1 font-semibold text-[var(--color-text-primary)]">
                    {contactData.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-secondary)]/10 bg-[var(--color-background)] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[#1f2933] shadow-md">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {t.contact.labels.hours}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-[var(--color-text-primary)]">
                    {t.contact.openHours.map((item, index) => (
                      <p key={index}>
                        <span className="font-medium">{item.days}:</span>{" "}
                        {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[var(--color-secondary)]/10 bg-[var(--color-surface)] p-2 shadow-[0_20px_60px_rgba(31,60,85,0.14)]">
            <iframe
              src={contactData.mapEmbedUrl}
              title={t.contact.mapTitle}
              className="h-full min-h-[404px] w-full rounded-[1.55rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={contactData.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-5 py-3 font-semibold text-[var(--color-text-on-surface)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {locale === "ar" ? "افتح الموقع" : "Open Location"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
