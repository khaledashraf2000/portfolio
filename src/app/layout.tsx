import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khaled Ashraf Portfolio",
  description: "Khaled Ashraf's Portfolio",
};

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-screen" />
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <PreloadManager /> */}

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
