import Image, { StaticImageData } from "next/image";
import promoSwitchMobile from "@/assets/images/promoSwitchMobile.webp";
import promoPS5Mobile from "@/assets/images/promoPS5Mobile.webp";
import promoSwitch from "@/assets/images/promoSwitch.webp";
import promoPS5 from "@/assets/images/promoPS5.webp";
import promoXbox from "@/assets/images/promoXbox.webp";
import promoXboxMobile from "@/assets/images/promoXboxMobile.webp";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CarouselItemType = {
  label: string;
  pathMobile: StaticImageData;
  path: StaticImageData;
};

export const productCarouselItem: CarouselItemType[] = [
  {
    label: "Nintendo Switch 2",
    pathMobile: promoSwitchMobile,
    path: promoSwitch
  },
  {
    label: "PlayStation 5",
    pathMobile: promoPS5Mobile,
    path: promoPS5
  },
  {
    label: "Xbox Series X",
    pathMobile: promoXboxMobile,
    path: promoXbox
  },
];

const ProductCarousel = () => {
    return (
    <Carousel 
         opts={{
            align: "start",
            loop: true,
            skipSnaps: true,
        }}
        className="w-full max-w-sm md:max-w-11/12 relative z-0">
        {/* //PEDI AYUDA A LA IA YA POR ULTIMO PASA A LO SIGUIENTE Y PEDI AYUDA A HENRY
        //RE: PERSEVERAR EL ROUND EDGE DEL BORDER RADIUS */}
      <CarouselContent>
        {productCarouselItem.map((item,index) => (
          <CarouselItem key={index}>
            <div className="relative">  
              <Card className="rounded-2xl">
                <CardContent className="flex items-center justify-center h-90 md:h-140 p-6 ">
                  <div className="md:hidden">
                    <Image 
                      src={item.pathMobile}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, 0vw"
                    />
                  </div>
                  <div className="hidden md:block">
                    <Image 
                      src={item.path}
                      alt={item.label}
                      fill
                      className="object-cover block rounded-2xl"
                      sizes="(min-width: 767px) 100vw, 0vw"
                    />
                  </div>
                  
                </CardContent> 
              </Card>
            </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <CarouselPrevious className="absolute left-6 bg-white" />
      <CarouselNext className="absolute right-6 bg-white" />
    </Carousel>
    )
}

export default ProductCarousel;