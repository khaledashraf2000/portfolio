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
  openGraph: {
    title: "Khaled Ashraf Portfolio",
    description: "A UX designer with a strong background in user research, interface design, and front-end development. Experienced in creating user-centric designs for startups, and freelance projects. Proficient in tools like Figma, Photoshop, and Illustrator. I deliver solutions that align with user needs and business goals.",
    url: "https://khaledaelmaleh.vercel.app/",
    siteName: "Khaled Ashraf Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/portfolio-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail showing Khaled Ashraf's portfolio projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaled Ashraf Portfolio",
    description: "A UX designer with a strong background in user research, interface design, and front-end development. Experienced in creating user-centric designs for startups, and freelance projects. Proficient in tools like Figma, Photoshop, and Illustrator. I deliver solutions that align with user needs and business goals.",
    images: ["https://yourwebsite.com/portfolio-thumbnail.png"],
  },
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
