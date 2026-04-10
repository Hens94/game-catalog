
import ProductCarousel from '@/components/layout/home/ProductCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const ProductCarouselOptions: EmblaOptionsType = { loop: true, duration: 30 }

const HomePage = () => {
  return (
    <>
      <ProductCarousel options={ProductCarouselOptions} />    
    </>
  );
};
 
export default HomePage;
