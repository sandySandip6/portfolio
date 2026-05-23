import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Alex Rivera — Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js"],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
