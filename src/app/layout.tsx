import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

export const metadata: Metadata = {
  title: "Game Catalog",
  description: "Game Catalog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="es">
      <body className="grid grid-rows-layout grid-cols-1 gap-y-4 min-h-screen">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
