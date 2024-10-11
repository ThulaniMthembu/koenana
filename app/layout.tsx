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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable}`}>
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