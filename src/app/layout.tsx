import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Stars from "@/template/Main/Stars";

 const inter = Inter({ 
  subsets: ["latin"],
  weight:["100","300","400","500","700","900"],
  variable:"--font-Inter"

});
 const roboto = Roboto({
  subsets:["latin"],
  weight:["100","300","400","500","700","900"],
  style:["italic","normal"],
  variable:"--font-roboto"
})

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Perfil - João Ferreira",
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
      <body className={`${inter.className}${roboto.className}`}>
        <Stars>{children}</Stars>
      </body>
    </html>
  );
}
