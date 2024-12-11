import Image from 'next/image';
import React from 'react';

interface IPhoneVideoMockupProps {
  videoUrl: string;
  className?: string;
}

const IPhoneVideoMockup = ({ videoUrl, className = '' }: IPhoneVideoMockupProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Container for both video and frame */}
      <div className="relative w-72">
        {/* Video layer - positioned behind the frame */}
        <div className="absolute inset-0 z-0 left-2">
          {/* <video
            className="w-[98%] h-full object-cover rounded-[50px]"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <iframe
            src={videoUrl}
            width="640"
            height="360"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
            className="w-[98%] h-full object-cover rounded-[50px]"
          ></iframe>
        </div>

        {/* iPhone frame image - positioned on top of the video */}
        <Image
          src="/iphone.png"
          alt="iPhone frame"
          className="relative z-10 w-full h-auto"
          layout="responsive"
          width={1000}  // Adjust to match actual image dimensions
          height={2000}  // Use appropriate aspect ratio for iPhone frame
          priority  // Recommended for above-the-fold images
        />
      </div>
    </div>
  );
};

export default IPhoneVideoMockup;