import React, { useCallback } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaButtons"
import ShopCard from "@/components/cards/ShopCard"

type PropType = {
  slides: {
    _id: string
    name: string
    image: string
    price: string
  }[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick,
  )

  return (
    <section className="embla border-y-1 border-color-black relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container divide-x-1 divide-black divide">
          {slides.map(item => (
            <div className="embla__slide" key={item._id}>
              <div className="embla__slide__number">
                <ShopCard
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  onClick={() => {}}
                  onSave={() => {}}
                  onAddToCart={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
