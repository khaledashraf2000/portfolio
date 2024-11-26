'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
    src: string;
    className?: string;
}

const Video = ({ src, className = '' }: LazyVideoProps) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div ref={videoRef} className='w-[100%] h-[100%]'>
            {isVisible && (
                <video autoPlay loop muted width="100%" height="auto" className={`${className}`}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default Video;