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
      <SessionWrapper>
        <body className={inter.className}>
          <div className="min-h-screen min-w-full flex flex-col">
            <Navbar />
            <main className="flex-grow mt-28">{children}</main>
            <Footer />
          </div>
        </body>
      </SessionWrapper>
    </html>
  );
}
