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
            className={className}
            style={style}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
        />
    );
};

export default Video;