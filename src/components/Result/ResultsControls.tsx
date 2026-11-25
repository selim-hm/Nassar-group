import { ChevronLeft, ChevronRight } from "lucide-react";
import { translations, type Locale } from "@/lib/i18n";

interface Props {
  onScroll: (direction: "left" | "right") => void;
  locale: Locale;
}

const ResultsControls = ({ onScroll, locale }: Props) => {
  const t = translations[locale];

  return (
    <div className="flex gap-3">
      <button
        onClick={() => onScroll("left")}
        className="cursor-pointer h-10 w-10 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] shadow hover:scale-105 transition"
        aria-label={t.ui.previous}
      >
        <ChevronLeft className="mx-auto" />
      </button>

      <button
        onClick={() => onScroll("right")}
        className="cursor-pointer h-10 w-10 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] shadow hover:scale-105 transition"
        aria-label={t.ui.next}
      >
        <ChevronRight className="mx-auto" />
      </button>
    </div>
  );
};

export default ResultsControls;
