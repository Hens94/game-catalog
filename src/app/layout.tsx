import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header/HeaderWrapper";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import { Quicksand } from "next/font/google";
import { cn } from "@/utils/twUtils";

export const metadata: Metadata = {
  title: "Game Catalog",
  description: "Game Catalog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="es">
      <body
        className={cn(
          "grid grid-rows-layout grid-cols-1 gap-y-4 min-h-screen w-full",
          quicksand.className
        )}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
