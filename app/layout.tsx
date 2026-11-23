import type { Metadata } from "next";
import { Barlow_Condensed, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORM & FUNCTION — Creative Studio (Est. 2019)",
  description:
    "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.",
  authors: [{ name: "FORM & FUNCTION" }],
  openGraph: {
    title: "FORM & FUNCTION — Creative Studio",
    description:
      "Digital experiences, made with purpose. Strategy, design and modern engineering.",
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
      className={`${barlowCondensed.variable} ${hankenGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-body selection:bg-[#0A0A0A] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
