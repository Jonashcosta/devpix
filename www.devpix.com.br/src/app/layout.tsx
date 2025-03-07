import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Criação de Sites Profissionais | DevPix",
  description:
    "Criação de sites profissionais com design moderno e responsivo. A DevPix oferece soluções personalizadas para sua empresa.",
  robots: "index, follow",
  openGraph: {
    title: "Criação de Sites Profissionais | DevPix",
    description:
      "Criação de sites profissionais com design moderno e responsivo. A DevPix oferece soluções personalizadas para sua empresa.",
    url: "https://devpix.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Criação de Sites Profissionais | DevPix",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
