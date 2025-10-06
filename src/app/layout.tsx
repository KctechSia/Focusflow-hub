import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { CalendlyWidget } from "@/components/calendlywid";
import "./globals.css";

// Load Google Font
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

// ✅ Comprehensive SEO + OG Metadata
export const metadata: Metadata = {
  title: "FocusFlow Hub | AI-Powered Consulting Automation",
  description:
    "FocusFlow Hub helps consultants automate lead qualification, follow-ups, and scheduling — saving 10+ hours weekly through intelligent workflow automation.",
  keywords: [
    "FocusFlow Hub",
    "AI automation",
    "consulting tools",
    "lead qualification",
    "workflow automation",
    "CRM integration",
  ],
  authors: [{ name: "FocusFlow Hub Team" }],
  metadataBase: new URL("https://focusflowhub.vercel.app"),
  openGraph: {
    title: "FocusFlow Hub | AI-Powered Consulting Automation",
    description:
      "All-in-one AI assistant for consultants — automate client handling, lead follow-ups, and CRM updates seamlessly.",
    url: "https://focusflowhub.vercel.app",
    siteName: "FocusFlow Hub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // add this image under /public
        width: 1200,
        height: 630,
        alt: "FocusFlow Hub - AI Assistant for Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FocusFlow Hub | AI-Powered Consulting Automation",
    description:
      "Automate consulting workflows, qualify leads 24/7, and grow your business with FocusFlow Hub.",
    images: ["/og-image.png"],
    creator: "@focusflowhub",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          dmSans.className,
          "antialiased bg-black text-white overflow-x-hidden"
        )}
      >
        {/* Main App Content */}
        {children}

        {/* Calendly widget (global) */}
        <CalendlyWidget />

        {/* Footer note for accessibility */}
        <footer className="sr-only">
          FocusFlow Hub © 2025 – Empowering Consultants with AI
        </footer>
      </body>
    </html>
  );
}
