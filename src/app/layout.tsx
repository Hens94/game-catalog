import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Game Catalog",
  description: "Game Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
