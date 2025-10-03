"use client"

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './ProductCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './ProductCarouselAutoplay'
import { DotButton, useDotButton } from './ProductCarouselDotButton'
import Image, { StaticImageData } from 'next/image'

import promoSwitchMobile from "@/assets/images/promoSwitchMobile.webp";
import promoPS5Mobile from "@/assets/images/promoPS5Mobile.webp";
import promoSwitch from "@/assets/images/promoSwitch.webp";
import promoPS5 from "@/assets/images/promoPS5.webp";
import promoXbox from "@/assets/images/promoXbox.webp";
import promoXboxMobile from "@/assets/images/promoXboxMobile.webp";
import { Play, Pause } from 'lucide-react'
import Link from 'next/link'


type PropType = {
  options?: EmblaOptionsType
}

type CarouselItemType = {
  label: string;
  pathMobile: StaticImageData;
  path: StaticImageData;
};

export const productCarouselItem: CarouselItemType[] = [
  {
    label: "Nintendo Switch",
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

const ProductCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ playOnInit: false, delay: 10000 })])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {productCarouselItem.map((item,index) => (
            <div className="embla__slide" key={index}>
              <Link href="/" className="md:hidden">
                <Image 
                  src={item.pathMobile}
                  alt={item.label}
                  className="embla__slide__img"
                />
              </Link>
              <Link href="/" className='hidden md:block'>
                <Image 
                  src={item.path}
                  alt={item.label}
                  className="embla__slide__img"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls hidden md:block">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
          
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? <Pause className='stroke-[#5cd49c]'/> : <Play className='stroke-[#5cd49c]'/>}
        </button>
      </div>
    </div>
  )
}

export default ProductCarousel
