import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FARM TO TABLE",
  description: "A website to directly connect farmers and consumers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <SessionWrapper>
        <body className={inter.className}>
          <div className="min-h-screen min-w-full flex flex-col">
            <Navbar />
            <main className="flex-grow mt-24 max-md:mt-36 max-xsm:mt-[170px]">{children}</main>
            <Footer />
          </div>
        </body>
      </SessionWrapper>
    </html>
  );
}
