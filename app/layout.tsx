import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Swan Swan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${caveat.className} antialiased`}>
        <div className="relative">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
