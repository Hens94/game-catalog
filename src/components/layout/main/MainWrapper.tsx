import SubProductCarousel from "./SubProductCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const SubProductCarouselOptions: EmblaOptionsType = {}

const MainWrapper = () => {
  return (
    <div className="">
      <SubProductCarousel options={SubProductCarouselOptions} />
    </div>
  );
};

export default MainWrapper;