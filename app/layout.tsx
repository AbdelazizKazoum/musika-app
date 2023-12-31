import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebare from "./components/Sidebare";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musika",
  description: "Listen to Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebare> {children}</Sidebare>
      </body>
    </html>
  );
}
