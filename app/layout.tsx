import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/index";

export const metadata: Metadata = {
  title: "Shop cars",
  description: "Creando una tienda de autos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
