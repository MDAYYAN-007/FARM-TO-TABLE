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
<<<<<<< HEAD
<<<<<<< HEAD
            <main className="flex-grow mt-28">{children}</main>
=======
            <main className="flex-grow mt-24">{children}</main>
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
=======
            <main className="flex-grow mt-24">{children}</main>
>>>>>>> 8c2da94b5f04acc7ad1f4f34a741f9498c551235
            <Footer />
          </div>
        </body>
      </SessionWrapper>
    </html>
  );
}
