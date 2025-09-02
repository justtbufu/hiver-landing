import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiver — l’app per genitori organizzati",
  description: "Calendario familiare, promemoria e info sempre a portata di mano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div
          className="fixed inset-0 -z-10 bg-gradient-to-b from-indigo-200/80 to-white"
          aria-hidden
        />
        {children}
      </body>
    </html>
  );
}



