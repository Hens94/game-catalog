"use client"

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '@/components/layout/home/ProductCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from '../home/ProductCarouselAutoplay'
import { DotButton, useDotButton } from '../home/ProductCarouselDotButton'
import Image from 'next/image'

import { Play, Pause, Star } from 'lucide-react'
import Link from 'next/link'
import Loading from "@/components/ui/Loading";
import useGames from '@/hooks/useGames'
import { RootInterface } from '@/common/types/game'


type PropType = {
  options?: EmblaOptionsType,
  games: RootInterface | null,
  isLoading: boolean
}

const platformArray: string[] = ['PlayStation 4','PlayStation 5','Xbox One','Xbox Series S/X','Nintendo Switch']

const ProductCarousel: React.FC<PropType> = (props) => {
  const { games, isLoading } = props;



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
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {
                // add logic here based on https://api.rawg.io/api/games/{game_pk}/screenshots
            }
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
    </>
  )
}

export default ProductCarousel
