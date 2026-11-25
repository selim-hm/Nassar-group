import type { Metadata } from "next";
import "./globals.css";
import ThemeLocaleBootstrap from "@/components/ThemeLocaleBootstrap";

export const metadata: Metadata = {
  title: "Nassar group | نـصــار جــروب",
  description:
    "SuccessTrack Coaching helps students achieve their goals with expert guidance, personalized coaching, and proven strategies for academic and professional success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--color-background)] text-[var(--color-text-primary)]">
        <ThemeLocaleBootstrap />
        {children}
      </body>
    </html>
  );
}
