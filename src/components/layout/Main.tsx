import { FC, ReactNode } from "react";
import ProductCarousel from "./main/ProductCarousel";

type MainProps = {
  children: ReactNode;
};

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex-1 flex flex-col items-center">
    <ProductCarousel />
    { children }
  </main>;
};

export default Main;
