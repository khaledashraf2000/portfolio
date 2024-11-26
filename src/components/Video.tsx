'use client';

import React from 'react';

interface VideoProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}

const Video: React.FC<VideoProps> = ({ src, className, style }) => {
    return (
        <video
            src={src}
            className={`${className} object-cover`}
            style={style}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            webkit-playsinline="true"
        />
    );
};

export default Video;