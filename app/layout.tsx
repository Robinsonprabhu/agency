import type { Metadata } from "next";
import { Barlow_Condensed, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORM & FUNCTION — Digital Agency",
  description:
    "We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.",
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
      className={`${barlowCondensed.variable} ${karla.variable} ${ibmPlexMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-body selection:bg-[#111111] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
