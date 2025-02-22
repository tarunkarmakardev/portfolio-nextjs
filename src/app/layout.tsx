import type { Metadata } from "next";
import { Preahvihear, Poppins } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-preahvihear",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tarun Karmakar",
  description: "Tarun Karmakar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${preahvihear.variable} ${poppins.variable} bg-primary font-preahvihear`}
      >
        {children}
      </body>
    </html>
  );
}
