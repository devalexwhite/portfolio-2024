import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["300", "400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex White | Design Minded UX Engineer",
  description: "Entrepreneur, developer, designer in Hilliard, Ohio.",
  metadataBase: new URL("https://alexwhite.fyi"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
