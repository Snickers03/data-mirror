import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import clsx from "clsx";

import Footer from "@/components/Footer";

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
      <body
        className={clsx(
          "flex min-h-screen w-full flex-col px-2",
          rubik.className,
        )}
      >
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics gaId='G-7L7HEC98LF' />
          <GoogleTagManager gtmId='GTM-TTVTVQRL' />
        </>
      )}
    </html>
  );
}
