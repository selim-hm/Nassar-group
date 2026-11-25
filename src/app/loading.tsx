import Image from "next/image";
import { headerLogoUrl } from "@/content/siteConfig";

export default function Loading() {
  return (
    <main
      className="loading-screen relative flex min-h-screen items-center justify-center overflow-hidden bg-(--color-background) px-6"
      aria-label="Loading"
    >
      <div className="loading-noise absolute inset-0" />
      <div className="loading-grid absolute inset-0" />
      <div className="loading-orb loading-orb-one" />
      <div className="loading-orb loading-orb-two" />
      <div className="loading-beam loading-beam-one" />
      <div className="loading-beam loading-beam-two" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <h1 className="mb-5 text-xl font-bold tracking-tight text-(--color-text-primary) sm:text-2xl">
          Nassar group | نـصــار جــروب
        </h1>

        <div className="loading-brand-mark" aria-label="Nassar Advisory Group">
          <div className="loading-arc loading-arc-one" />
          <div className="loading-arc loading-arc-two" />
          <div className="loading-arc loading-arc-three" />
          <div className="loading-brand-glow" />
          <div className="loading-logo-inner">
            <Image
              src={headerLogoUrl}
              alt="Nassar Advisory Group"
              width={200}
              height={80}
              priority
              className="h-auto w-40 object-contain sm:w-48"
            />
          </div>
        </div>

        <div className="loading-status mt-7">
          <div className="loading-status-line" />
          <div className="loading-status-copy">
            <span>Grow. Lead. Succeed.</span>
            <span lang="ar" dir="rtl">
              نطوّر · نـقـود · ننجح
            </span>
          </div>
        </div>

        <div className="loading-dots mt-5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className="loading-dot"
              style={{ animationDelay: `${dot * 0.13}s` }}
            />
          ))}
        </div>

        <div className="loading-progress-track mt-6">
          <div className="loading-progress-glow" />
          <div className="loading-progress-segment" />
        </div>
      </div>
    </main>
  );
}
