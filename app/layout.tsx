import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopBackground from "@/components/DesktopBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "It's Alex White!",
  description: "Entrepreneur, developer, designer in Hilliard, Ohio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen overflow-hidden min-w-screen min-h-screen relative">
          <DesktopBackground src="https://images.unsplash.com/photo-1528164344705-47542687000d" />

          {children}
        </main>
      </body>
    </html>
  );
}
