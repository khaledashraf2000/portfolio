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
          <video
            className="w-[98%] h-full object-cover rounded-[50px]"
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

        {/* iPhone frame image - positioned on top of the video */}
        <img
          src="/iphone.png"
          alt="iPhone frame"
          className="relative z-10 w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IPhoneVideoMockup;