import React from 'react';

interface MacBookVideoMockupProps {
  videoUrl: string;
  className?: string;
}

const MacBookVideoMockup = ({ videoUrl, className = '' }: MacBookVideoMockupProps) => {
  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      {/* Container for both video and frame */}
      <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
        {/* Video layer - positioned behind the frame */}
        <div className="absolute inset-0 z-0 left-[9%] md:left-[50px] top-[1%] md:top-[8px]">
          <video
            className="w-[91%] sm:w-[91%] h-auto"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* MacBook Pro frame image - positioned on top of the video */}
        <img
          src="/macbook.png"
          alt="MacBook Pro frame"
          className="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MacBookVideoMockup;