import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image";

import MarioKart from "@/assets/images/box_art/switch/mario-kart.webp";
import DkBananza from "@/assets/images/box_art/switch/dk-bananza.webp";
import MarioParty from "@/assets/images/box_art/switch/mario-party.webp";
import ZeldaBotw from  "@/assets/images/box_art/switch/zelda-botw.webp"; 
import Fc25 from "@/assets/images/box_art/ps5/fc-25.webp"; 
import GTAV from "@/assets/images/box_art/ps5/gta-v.webp";
import SonicRacing from "@/assets/images/box_art/ps5/sonic-racing.webp";
import EldenRing from "@/assets/images/box_art/xbox/elden-ring.webp";
import Link from "next/link";
import { isHTTPMethod } from "next/dist/server/web/http";

let numbers = [1,2,3,4,5,6,7,8,9,10]

type GridItemType = {
  label: string;
  path: StaticImageData;
  price: number;
  platform: string;
};

export const ProductGridItem: GridItemType[] = [
  {
    label: "Mario Kart World",
    path: MarioKart,
    price: 80.00,
    platform: "Nintendo Switch 2"
  },
  {
    label: "Donkey Kong Bananza",
    path: DkBananza,
    price: 70.00,
    platform: "Nintendo Switch 2"
  },
  {
    label: "Mario Party Jamboree",
    path: MarioParty,
    price: 60.00,
    platform: "Nintendo Switch"
  },
  {
    label: "Zelda Breath of the Wild",
    path: ZeldaBotw,
    price: 70.00,
    platform: "Nintendo Switch 2"
  },
  {
    label: "FC 25",
    path: Fc25,
    price: 70.00,
    platform: "PS5"
  },
  {
    label: "GTA V",
    path: GTAV,
    price: 60.00,
    platform: "PS5"
  },
  {
    label: "Sonic Racing Crossworlds",
    path: SonicRacing,
    price: 70.00,
    platform: "PS5"
  },
  {
    label: "Elden Ring",
    path: EldenRing,
    price: 60.00,
    platform: "Xbox One"
  },
];

const ProductGrid = () => {
    return (
      <>
        <p className="pl-8 text-3xl font-bold">Lanzamientos populares</p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-y-10 md:mx-10 py-4 ml-3">
          {ProductGridItem.map((item,index) => (
            <Link href="/" key={index}>
                <Card 
                  className="relative border-0 items-center justify-start w-50 md:w-62  
                        h-106 md:h-auto md:min-h-110 md:max-h-122 transition duration-300 
                        md:hover:scale-105 md:hover:underline md:hover:border-1 underline-offset-4"
                >
                  <div className="w-full overflow-hidden">
                    <CardContent className="">
                      <Image 
                          src={item.path}
                          alt={item.label}
                          className="object-fill "
                      />
                    </CardContent>
                    <div className="grid grid-cols-1 text-xl mx-4 my-7 gap-y-2">
                      <label className="font-bold">{item.label}</label>
                      <small>${item.price}</small>
                    </div>
                  </div>
                    
                </Card>
            </Link>
          ))}
          
        </div>
      </>
        
    )
}

export default ProductGrid