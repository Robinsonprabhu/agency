import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${ibmPlexSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
