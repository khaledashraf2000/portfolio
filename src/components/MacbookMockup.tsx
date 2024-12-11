import React from 'react';

interface MacBookVideoMockupProps {
  videoUrl: string;
  className?: string;
}

import Image from 'next/image';

const MacBookVideoMockup = ({ videoUrl, className = '' }: MacBookVideoMockupProps) => {
  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      {/* Container for both video and frame */}
      <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
        {/* Video layer - positioned behind the frame */}
        <div className="absolute inset-0 z-0 left-[9%] md:left-[50px] top-[1%] md:top-[8px]">
          <iframe
            src='https://player.cloudinary.com/embed/?public_id=xceed_ibwib3&cloud_name=dv3s0vp2b&player[autoplay]=true&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[hideContextMenu]=true&player[showLogo]=false'
            width="768"
            height="250"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            className="w-[91%] sm:w-[91%] min-h-fit"
          ></iframe>
        </div>

        {/* MacBook Pro frame image - positioned on top of the video */}
        <Image
          src="/macbook.png"
          alt="MacBook Pro frame"
          layout="responsive"
          width={1000}  // Adjust these to match your image's actual dimensions
          height={600}
          className="relative z-10 w-full h-auto"
          priority  // Optional: if this image is above the fold
        />
      </div>
    </div>
  );
};

export default MacBookVideoMockup;