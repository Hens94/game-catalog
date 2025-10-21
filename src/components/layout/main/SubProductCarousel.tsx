"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'

import MarioKart from "@/assets/images/box_art/switch/mario-kart.webp";
import DkBananza from "@/assets/images/box_art/switch/dk-bananza.webp";
import MarioParty from "@/assets/images/box_art/switch/mario-party.webp";
import ZeldaBotw from  "@/assets/images/box_art/switch/zelda-botw.webp"; 
import Fc25 from "@/assets/images/box_art/ps5/fc-25.webp"; 
import GTAV from "@/assets/images/box_art/ps5/gta-v.webp";
import SonicRacing from "@/assets/images/box_art/ps5/sonic-racing.webp";
import EldenRing from "@/assets/images/box_art/xbox/elden-ring.webp";   
import Link from 'next/link'

type PropType = {
  options?: EmblaOptionsType
}

type CarouselItemType = {
  label: string;
  path: StaticImageData;
};

export const subProductCarouselItem: CarouselItemType[] = [
  {
    label: "Mario Kart World",
    path: MarioKart
  },
  {
    label: "Donkey Kong Bananza",
    path: DkBananza
  },
  {
    label: "Mario Party Jamboree",
    path: MarioParty
  },
  {
    label: "Zelda Breath of the Wild",
    path: ZeldaBotw
  },
  {
    label: "FC 25",
    path: Fc25
  },
  {
    label: "GTA V",
    path: GTAV
  },
  {
    label: "Sonic Racing Crossworlds",
    path: SonicRacing
  },
  {
    label: "Elden Ring",
    path: EldenRing
  },
];

const SubProductCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="max-w-screen mx-auto px-4 py-22 md:py-8">
      <p className="pl-8 text-3xl font-bold">Lanzamientos destacados</p>
      <div className="overflow-clip " ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom ">
          {subProductCarouselItem.map((item,index) => (
            <div className="flex-none min-w-0 pl-4 m-4" key={index}>
              <div className="relative aspect-auto w-58 h-84" >
                <Link href="/" className="">
                  <Image 
                    src={item.path}
                    alt={item.label}
                    fill
                    className="rounded-sm object-cover border-1 transition duration-300 md:hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubProductCarousel
