import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poornima Rajappan - Software Engineer",
  description:
    "Frontend-leaning Software Engineer with 5+ years building data-intensive React + TypeScript web apps at Thomson Reuters and Cognizant",
  keywords: [
    "frontend development",
    "reactjs",
    "javascript",
    "developer",
    "software engineer",
    "portfolio",
    "typescript",
    "nextjs",
    "software development",
    "web development",
  ],
  authors: [{ name: "Poornima Rajappan" }],
  openGraph: {
    title: "Poornima Rajappan - Software Engineer",
    description:
      "Frontend-leaning Software Engineer specializing in React, TypeScript, and UI performance.",
    url: "https://portfolio-poornima-rajappan.vercel.app",
    siteName: "Poornima's Portfolio",
    images: [
      {
        url: "https://portfolio-poornima-rajappan.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Poornima Rajappan - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 0.2,
    maximumScale: 5,
    userScalable: true,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
