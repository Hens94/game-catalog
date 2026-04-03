
import ProductCarousel from '@/components/layout/home/ProductCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const ProductCarouselOptions: EmblaOptionsType = { loop: true, duration: 30 }

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const HomePage = () => {
  return (
    <>
      <ProductCarousel slides={SLIDES} options={ProductCarouselOptions} />    
    </>
  );
};
 
export default HomePage;
