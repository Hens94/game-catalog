import { FC, ReactNode } from "react";
import ProductCarousel from './main/ProductCarousel'
import { EmblaOptionsType } from 'embla-carousel'

type MainProps = {
  children: ReactNode;
};

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex-1 flex flex-col items-center">
    <ProductCarousel slides={SLIDES} options={OPTIONS} />
    { children }
  </main>;
};

export default Main;
