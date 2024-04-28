import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/template/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Perfil - J.M.",
    template:"%s | JM"
  },
  description: "Portifolio de joão marcelo",
  icons:{
    icon:'/assets/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header/>
        {children}
      <footer>
          <p>
            Footer
          </p>
      </footer>
      </body>
    </html>
  );
}
