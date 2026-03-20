
import ProductCarousel from '@/components/layout/home/ProductCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import ProductGrid from '@/components/layout/home/ProductGrid';
import SubProductCarousel from '@/components/layout/main/SubProductCarousel';


const ProductCarouselOptions: EmblaOptionsType = { loop: true, duration: 30 }

const SubProductCarouselOptions: EmblaOptionsType = {}

const HomePage = () => {
  return (
    <>
      <ProductCarousel options={ProductCarouselOptions} />
      <div className="items-center">
        <SubProductCarousel options={SubProductCarouselOptions} />
        <ProductGrid />
      </div>
      
    </>
  );
};

export default HomePage;
