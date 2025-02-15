import type { Metadata } from "next";
import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./component/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});
export const metadata: Metadata = {
  title: "Insurance",
  description: "Generated by insurance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} antialiased`}
      >
        <Navigation />{children}
      </body>
    </html>
  );
}
