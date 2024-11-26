import React, { useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './embla.css'
import { motion } from 'framer-motion'

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 1 })
  ])

  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop()
  }, [emblaApi])

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.play()
  }, [emblaApi])

  return (
    <motion.div className="embla cursor-grab" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} whileTap={{ cursor: "grabbing" }}>
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
  )
}

export default EmblaCarousel