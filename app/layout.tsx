import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FORM & FUNCTION — Digital Experiences That Move Businesses Forward",
  description:
    "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands. Independent digital design and development agency.",
  keywords: [
    "Design Studio",
    "Digital Agency",
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Digital Strategy",
  ],
  authors: [{ name: "FORM & FUNCTION" }],
  openGraph: {
    title: "FORM & FUNCTION — Digital Agency",
    description:
      "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.",
    type: "website",
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
      className={`${instrumentSerif.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#171717] font-sans selection:bg-[#171717] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
