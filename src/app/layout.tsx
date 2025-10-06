import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { CalendlyWidget } from "@/components/calendlywid";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focusflow Hub",
  description: "All-in-one AI assistant for consultants",
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
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}

        {/* ✅ Calendly widget safely loaded inside <body> */}
        <CalendlyWidget />
      </body>
    </html>
  );
}
