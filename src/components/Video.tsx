'use client';

import { useRef } from 'react';

interface VideoProps {
    src: string;
    className?: string;
}

const Video = ({ src, className = '' }: VideoProps) => {
    const videoRef = useRef(null);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            width="100%"
            height="auto"
            preload="auto"  // Ensures video is loaded upfront
            className={`w-[100%] h-[100%] ${className}`}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;