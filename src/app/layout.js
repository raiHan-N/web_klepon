import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Klepon Aneka",
  description: "Makanan Ringan Khas Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-10 bg-[#FFFFF0]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
