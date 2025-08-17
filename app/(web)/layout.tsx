import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Penzion Jantar Havlíčkův Brod",
  description: "Penzion Jantar v Havlíčkově Brodě na Bezručově 143 – komfortní ubytování za příznivé ceny.",
  icons: {
    icon: "/logo-black.png"
  },
  applicationName: "Penzion Jantar",
  generator: "Next.ts",
  authors: [{ name: "Penzion Jantar" }],
  keywords: [
    "Penzion Jantar",
    "Ubytování Havlíčkův Brod",
    "Penzion Havlíčkův Brod",
    "Hotel Havlíčkův Brod",
    "Ubytování Vysočina"
  ],
  creator: "Penzion Jantar",
  publisher: "Penzion Jantar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Penzion Jantar Havlíčkův Brod",
    description: "Penzion Jantar v Havlíčkově Brodě na Bezručově 143 – komfortní ubytování za příznivé ceny.",
    url: "https://www.penzionjantar.cz/",
    siteName: "Penzion Jantar",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penzion Jantar Havlíčkův Brod",
    description: "Komfortní ubytování v Penzionu Jantar na Bezručově 143, Havlíčkův Brod.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
        <Navbar/>
        <main >
          {children}
          </main> 
          <Footer/>
    </>
  );
}
