import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focusflow Hub",
  description: "All-in-one AI assistant for consultants",
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
        {/* Calendly floating widget */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                Calendly.initBadgeWidget({
                  url: 'https://calendly.com/obiekwekosi32/clarity-session',
                  text: 'Book a Free Clarity Call',
                  color: '#fbbf24',
                  textColor: '#ffffff',
                  branding: false
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
