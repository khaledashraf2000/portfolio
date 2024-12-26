import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

interface IPhoneVideoMockupProps {
  videoUrl: string;
  className?: string;
}

const IPhoneVideoMockup = ({ videoUrl, className = '' }: IPhoneVideoMockupProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Container for both video and frame */}
      <div className="relative w-72">
        {/* Video layer - positioned behind the frame */}
        <div className="absolute inset-0 z-0 left-2">
          <video
            ref={videoRef}
            className={`w-[98%] h-full object-cover rounded-[50px] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay={isVisible}
            loop
            muted
            playsInline
            controls={false}
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
          >
            {isVisible && (
              <source src={videoUrl} type="video/webm" />
            )}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* iPhone frame image - positioned on top of the video */}
        <Image
          src="/iphone.png"
          alt="iPhone frame"
          className="relative z-10 w-full h-auto"
          layout="responsive"
          width={1000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default IPhoneVideoMockup;