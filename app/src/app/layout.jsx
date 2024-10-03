import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atakan Başaran",
  description: "Front End Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* Navbar'ı body içerisinde çağırıyoruz */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
