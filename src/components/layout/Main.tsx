import { FC, ReactNode } from "react";
import ProductCarousel from './main/ProductCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import MainWrapper from "./main/MainWrapper";

type MainProps = {
  children: ReactNode;
};

const ProductCarouselOptions: EmblaOptionsType = { loop: true, duration: 30 }

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex-1 flex flex-col items-center">
    <ProductCarousel options={ProductCarouselOptions} />
    <MainWrapper />
    { children }
  </main>;
};

export default Main;
