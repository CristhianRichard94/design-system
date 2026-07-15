import type { Metadata } from "next";
import "./globals.css";

// framer-motion's `motion.*` proxy exports are not statically analyzable by
// Next's RSC client-reference collector, which breaks static prerendering
// for pages that render them. The showcase has no need for static
// generation, so render every route dynamically instead.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Design System Showcase",
  description: "Shared component library — showcase and reference app."
};

// Dark-first: no data-theme attribute means dark, per token design.
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
