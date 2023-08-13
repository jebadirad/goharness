import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goharness Demo App",
  description: "Created by JonDavid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="pb-[5.8rem] bg-white">
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
