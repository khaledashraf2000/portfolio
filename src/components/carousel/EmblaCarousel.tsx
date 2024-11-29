import React, { useCallback, useState, useEffect } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';
import './embla.css';
import {
  usePrevNextButtons,
  PrevButton,
  NextButton
} from './EmblaCarouselArrowButtons';

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true, // Ensure continuous looping
      breakpoints: {
        '(max-width: 600px)': {
          slidesToScroll: 1,
        }
      }
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1, // Reduced speed for smoother scrolling
        stopOnInteraction: false, // Continue scrolling after user interaction
        stopOnMouseEnter: false, // Don't stop on mouse hover
        // Removed 'jump' option as it's not a valid property
      })
    ]
  )

  // State to track touch interaction
  const [isTouching, setIsTouching] = useState(false)

  // Button controls
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // Enhanced touch and mouse interactions
  const handleTouchStart = useCallback(() => {
    setIsTouching(true)
    emblaApi?.plugins()?.autoScroll?.stop()
  }, [emblaApi])

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false)
    emblaApi?.plugins()?.autoScroll?.play()
  }, [emblaApi])

  const handleMouseEnter = useCallback(() => {
    if (!isTouching) {
      emblaApi?.plugins()?.autoScroll?.stop()
    }
  }, [emblaApi, isTouching])

  const handleMouseLeave = useCallback(() => {
    if (!isTouching) {
      emblaApi?.plugins()?.autoScroll?.play()
    }
  }, [emblaApi, isTouching])

  return (
    <div className="relative">
      <motion.div
        className={`embla ${isTouching ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slideContent, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__content">
                  {slideContent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile and Desktop Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="embla__button--prev shadow-md bg-white/70 hover:bg-white/90"
          />
        </div>
        <div className="pointer-events-auto">
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="embla__button--next shadow-md bg-white/70 hover:bg-white/90"
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel