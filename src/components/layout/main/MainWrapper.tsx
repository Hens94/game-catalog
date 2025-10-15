import ProductGrid from "./ProductGrid";
import SubProductCarousel from "./SubProductCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const SubProductCarouselOptions: EmblaOptionsType = {}

const MainWrapper = () => {
  return (
    <div className="items-center">
      <SubProductCarousel options={SubProductCarouselOptions} />
      <ProductGrid />
    </div>
  );
};

export default MainWrapper;