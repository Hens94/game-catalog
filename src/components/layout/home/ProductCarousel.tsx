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
import { useAutoplay } from '../home/ProductCarouselAutoplay'
import { DotButton, useDotButton } from '../home/ProductCarouselDotButton'
import Image from 'next/image'

import { Play, Pause, Star } from 'lucide-react'
import Link from 'next/link'
import Loading from "@/components/ui/Loading";
import ProductGrid from './ProductGrid'
import useGames from '@/hooks/useGames'


type PropType = {
  options?: EmblaOptionsType
}

const platformArray: string[] = ['PlayStation 4','PlayStation 5','Xbox One','Xbox Series S/X','Nintendo Switch']

const ProductCarousel: React.FC<PropType> = (props) => {
  const { games, isLoading } = useGames();



  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ playOnInit: true, delay: 10000 })])

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
    isLoading ? <Loading></Loading> :
    games?.results?.length === 0 ? <div className="text-center text-2xl font-bold">No games found</div> :

    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {games?.results?.map((item) => (
              <div className="embla__slide" key={item.id}>
                <Link href={`/games/${item.id}`} className=''>
                  <Image 
                    width={500}
                    height={500}
                    quality={100}
                    unoptimized= {true}
                    src={item.short_screenshots[1].image}
                    alt={item.slug}
                    className="embla__slide__img brightness-70"
                  />
                  <div className="absolute bottom-1/12 md:bottom-1/10 left-1/10">
                    <h2 className="text-2xl md:text-4xl">{item.name}</h2>
                    <div className="hidden md:flex mt-3 gap-3">
                      {
                        item.platforms.map(p => (
                          platformArray.includes(p.platform.name) ? <small key={p.platform.id} className="border-1 border-foreground rounded-md p-1" >{p.platform.name}</small> : <span key={p.platform.id}></span>
                        ))
                      }
                    </div>
                  </div>
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
            
          <div className="embla__dots ">
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
            {autoplayIsPlaying ? <Pause className='stroke-accent'/> : <Play className='stroke-primary'/>}
          </button>
        </div>
      </div>
      <div className="items-center">
        <ProductGrid 
          games={games}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}

export default ProductCarousel
