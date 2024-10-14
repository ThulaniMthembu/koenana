import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: "--font-geist-mono",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Koenana Trading Pty Ltd | Leading Construction Services",
  description: "Koenana Trading Pty Ltd offers high-quality construction services across residential, commercial, and industrial sectors. We prioritize innovation, quality, and client satisfaction.",
  keywords: ["construction", "Koenana Trading", "residential construction", "commercial construction", "industrial construction", "South Africa", "Gauteng"],
  authors: [{ name: "Khotso Mmeko" }, { name: "Thulani Mthembu", url: "https://www.devmajxr.co.za" }],
  creator: "Koenana Trading Pty Ltd",
  publisher: "Koenana Trading Pty Ltd",
  metadataBase: new URL('https://koenanatrading.co.za'),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://koenanatrading.co.za",
    siteName: "Koenana Trading Pty Ltd",
    title: "Koenana Trading Pty Ltd | Leading Construction Services",
    description: "High-quality construction services across residential, commercial, and industrial sectors.",
    images: [
      {
        url: "https://koenanatrading.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Koenana Trading Pty Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koenana Trading Pty Ltd | Leading Construction Services",
    description: "High-quality construction services across residential, commercial, and industrial sectors.",
    images: ["https://koenanatrading.co.za/twitter-image.jpg"],
    creator: "@KoenanaTrading",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00843D" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#00843D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.className} antialiased flex flex-col min-h-screen`}>
        {children}
        <footer className="mt-auto py-4 text-center text-sm text-gray-600">
          <p className="mt-2 text-xs text-gray-400">
            <a 
              href="https://www.devmajxr.co.za/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by Thulani Mthembu | thulanim457@gmail.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}