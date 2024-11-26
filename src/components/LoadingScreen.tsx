'use client';
// components/LoadingScreen.tsx
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
                setIsFadingOut(true);
                setTimeout(() => {
                    setIsVisible(false);
                    onLoadingComplete();
                }, 500); // Duration matches the CSS transition
            }, 1000); // Optional delay to keep the loading screen visible briefly after page load
        };

        if (document.readyState === "complete") {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        return () => window.removeEventListener("load", handlePageLoad);
    }, [onLoadingComplete]);

    if (!isVisible) return null; // Removes from DOM once faded out

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
}
