import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hiver — l’app per genitori organizzati",
  description: "Calendario familiare, promemoria e info sempre a portata di mano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="h-full">
      <head>
        {/* Adobe Fonts (Typekit) */}
        <link rel="stylesheet" href="https://use.typekit.net/wbj7sss.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
