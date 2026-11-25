"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialsGrid from "./TestimonialsGrid";
import { translations, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const Testimonials = ({ locale }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = translations[locale];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;

    const gap = 24;
    const amount = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full py-20 bg-[var(--color-background)]"
      aria-labelledby="testimonials"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              {t.testimonials.heading}
            </h2>
            <p className="mt-2 max-w-xl text-[var(--color-text-secondary)]">
              {t.testimonials.subheading}
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              className="cursor-pointer h-10 w-10 rounded-full text-[var(--color-text-on-surface)] bg-[var(--color-primary)] shadow hover:scale-105 transition"
              aria-label={t.ui.previous}
            >
              <ChevronLeft className="mx-auto" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="cursor-pointer h-10 w-10 rounded-full text-[var(--color-text-on-surface)] bg-[var(--color-primary)] shadow hover:scale-105 transition"
              aria-label={t.ui.next}
            >
              <ChevronRight className="mx-auto" />
            </button>
          </div>
        </div>

        <TestimonialsGrid
          scrollRef={scrollRef}
          items={[
            {
              id: "1",
              name: t.testimonials.items[0].name,
              message: t.testimonials.items[0].message,
              rating: 5,
            },
            {
              id: "2",
              name: t.testimonials.items[1].name,
              message: t.testimonials.items[1].message,
              rating: 5,
            },
            {
              id: "3",
              name: t.testimonials.items[2].name,
              message: t.testimonials.items[2].message,
              rating: 5,
            },
            {
              id: "4",
              name: t.testimonials.items[3].name,
              message: t.testimonials.items[3].message,
              rating: 5,
            },
            {
              id: "5",
              name: t.testimonials.items[4].name,
              message: t.testimonials.items[4].message,
              rating: 5,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Testimonials;
