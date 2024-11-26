'use client';

import React, { useRef, useEffect } from 'react';

interface VideoProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}

const Video: React.FC<VideoProps> = ({ src, className, style }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        // Ensure video starts playing immediately
        const playVideo = async () => {
            try {
                await videoElement.play();
            } catch (err) {
                console.error('Autoplay was prevented:', err);
            }
        };

        playVideo();
    }, [src]);

    return (
        <video
            ref={videoRef}
            src={src}
            className={`${className} object-cover`}
            style={style}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            webkit-playsinline="true"
            x-webkit-airplay="deny"
            x5-video-player-type="none"
            x5-video-player-fullscreen="false"
            x5-video-orientation="portraint"
            controlsList="nodownload noremoteplayback"
        />
    );
};

export default Video;