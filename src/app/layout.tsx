import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Mirror",
  description: "Data Mirror shows you what a website knows about you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx("px-2", rubik.className)}>{children}</body>
    </html>
  );
}
