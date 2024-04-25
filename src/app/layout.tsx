import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/pages/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfil",
  description: "Portifolio de joão marcelo",
};

export default function RootLayout() {
  return (
    <html lang="pt-br">
      <body className={inter.className}><Home/></body>
    </html>
  );
}
