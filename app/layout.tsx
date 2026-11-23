import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FORM & FUNCTION — Digital Experiences That Move Businesses Forward",
  description:
    "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands. Independent digital design and development agency.",
  keywords: [
    "Design Agency",
    "Digital Experiences",
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Digital Strategy",
    "Next.js Agency",
  ],
  authors: [{ name: "FORM & FUNCTION Studio" }],
  openGraph: {
    title: "FORM & FUNCTION — Digital Experiences",
    description:
      "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#101B2C] text-[#F4F1EA] font-sans selection:bg-[#FF642E] selection:text-[#101B2C] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
