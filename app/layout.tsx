import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://carlossaboya.com'),
  title: "Carlos Saboya | Software Engineer",
  description:
    "Portfolio of Carlos Saboya — Software Engineer specializing in web and mobile development with React, Next.js, TypeScript, and Python.",
  keywords: [
    "software engineer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Carlos Saboya",
  ],
  authors: [{ name: "Carlos Saboya" }],
  openGraph: {
    title: "Carlos Saboya | Software Engineer",
    description:
      "Portfolio of Carlos Saboya — Software Engineer specializing in web and mobile development.",
    siteName: "Carlos Saboya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Saboya | Software Engineer",
    description: "Portfolio of Carlos Saboya — Software Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Carlos Saboya",
              jobTitle: "Full-Stack Software Engineer",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://carlossaboya.com",
              sameAs: [
                "https://www.linkedin.com/in/carlossaboya/",
                "https://github.com/cadusaboya",
                "https://medium.com/@carlosepsaboya",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-text-primary antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
