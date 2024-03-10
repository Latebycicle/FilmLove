import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Analogue",
  description: "Affordable film cameras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="m-auto p-5 xl:mx-20">
          {children}
        </main>
      </body>
    </html>
  );
}


