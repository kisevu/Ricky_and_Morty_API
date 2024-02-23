import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ricky &Morty App",
  description: "App utilizing the Ricky & Morty API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col bg-whiten">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
