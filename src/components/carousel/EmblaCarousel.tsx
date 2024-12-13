import React, { useCallback, useState, useRef, useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';
import './embla.css';

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: false,
      align: 'center', // Ensure slides are centered
      dragFree: false, // Snap to slides
      containScroll: 'trimSnaps', // Ensure proper scrolling
      slidesToScroll: 1,
      breakpoints: {
        '(max-width: 768px)': {
          slidesToScroll: 1,
          align: 'center'
        }
      }
    },
    [
      AutoScroll({
        playOnInit: true, // Disable auto-scroll by default
        speed: 0.5, // Slower, smoother scrolling
        stopOnInteraction: true, // Stop on user interaction
        stopOnMouseEnter: true // Stop when mouse enters
      })
    ]
  );

  // State to track touch and mouse interactions
  const [isTouching, setIsTouching] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced touch and mouse interactions
  const handleTouchStart = useCallback(() => {
    setIsTouching(true);
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
    if (!isHovering) {
      emblaApi?.plugins()?.autoScroll?.play();
    }
  }, [emblaApi, isHovering]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (!isTouching) {
      emblaApi?.plugins()?.autoScroll?.play();
    }
  }, [emblaApi, isTouching]);

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

    </div>
  )
}

export default EmblaCarousel;