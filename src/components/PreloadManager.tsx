// app/components/PreloadManager.tsx
'use client';

import { useEffect } from 'react';

interface PreloadItem {
    src: string;
    type: 'video' | 'image';
}

const PreloadManager = () => {
    useEffect(() => {
        const mediaToPreload: PreloadItem[] = [
            { src: '/reel.mp4', type: 'video' },
            { src: '/reel2.mp4', type: 'video' },
            { src: '/reel4.mp4', type: 'video' },
            { src: '/reel5.mp4', type: 'video' },
            { src: '/reel7.mp4', type: 'video' },
            { src: '/xceed.mp4', type: 'video' },
            { src: '/roomera 2.mp4', type: 'video' },
            { src: '/videos/bader.mp4', type: 'video' },
            { src: '/macbook.png', type: 'image' },
            { src: '/iphone.png', type: 'image' },
            { src: '/images/4elfagr.png', type: 'image' },
            { src: '/images/bader2.png', type: 'image' },
            { src: '/images/calearth.png', type: 'image' },
            { src: '/images/crunch.png', type: 'image' },
            { src: '/images/icarus.png', type: 'image' },
            { src: '/images/washit.png', type: 'image' },
            // Add all your media items here
        ];

        const preloadMedia = (items: PreloadItem[]) => {
            items.forEach(item => {
                if (item.type === 'video') {
                    const video = document.createElement('video');
                    video.preload = 'auto';
                    video.src = item.src;
                } else if (item.type === 'image') {
                    const img = new Image();
                    img.src = item.src;
                }

                // Preload link method
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = item.src;
                link.as = item.type;
                document.head.appendChild(link);
            });
        };

        preloadMedia(mediaToPreload);
    }, []);

    return null;
};

export default PreloadManager;