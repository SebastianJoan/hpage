import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../../store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Java Lifewealth Group LLC",
  description: "Somos representantes de compañías de transporte que buscan minimizar sus gastos y maximizar sus utilidades comerciales. Especializados en la industria camionera, contamos con el respaldo de compañías líderes en el mercado y una amplia cartera de clientes. Entendemos las necesidades de nuestros clientes y mejoramos cada día para brindar una atención personalizada, cordial y objetiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers> 
      </body>
    </html>
  );
}
