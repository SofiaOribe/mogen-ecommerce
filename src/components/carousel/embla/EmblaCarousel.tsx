import React, { useCallback } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaButtons"
import ShopCard from "@/components/cards/ShopCard"
import { TProduct } from "@/features/shop/types"
import useAddItemHook from "@/features/shop/useAddItemHook"

type PropType = {
  slides: TProduct[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const { handleAddToCart } = useAddItemHook()

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
    <section className="embla relative">
      <div className="embla__viewport border-y border-color-black" ref={emblaRef}>
        <div className="embla__container  divide-x-1 border-color-black divide-black divide ">
          {slides.map(item => (
            <div className="embla__slide last:border-r last:border-black" key={item.id}>
              <div className="embla__slide__number ">
                <ShopCard
                  title={item.name}
                  image={item.images[0]}
                  price={item.price}
                  link={`/shop/product/${item.id}`}
                  onClick={() => {}}
                  onSave={() => {}}
                  onAddToCart={() => {
                    handleAddToCart(item)
                  }}
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
