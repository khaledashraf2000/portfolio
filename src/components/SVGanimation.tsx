'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './SVGanimation.module.css';

export default function SVGanimation() {
    const leftPathRef = useRef<SVGPathElement>(null);
    const rightPathRef = useRef<SVGPathElement>(null);
    const [isLeftAnimationComplete, setIsLeftAnimationComplete] = useState(false);

    // useEffect(() => {
    //     const animatePath = (pathRef: React.RefObject<SVGPathElement>) => {
    //         if (pathRef.current) {
    //             const pathLength = pathRef.current.getTotalLength();

    //             // Set initial stroke-dasharray and stroke-dashoffset
    //             pathRef.current.style.strokeDasharray = `${pathLength}`;
    //             pathRef.current.style.strokeDashoffset = `${pathLength}`;
    //         }
    //     };

    //     // Animate left path initially
    //     if (leftPathRef.current) {
    //         animatePath(leftPathRef);
    //     }
    // }, []);

    // useEffect(() => {
    //     // Animate right path after left animation completes
    //     const animationDuration = 2000; // 2 seconds, matching CSS animation duration

    //     const timer = setTimeout(() => {
    //         if (rightPathRef.current) {
    //             const pathLength = rightPathRef.current.getTotalLength();
    //             rightPathRef.current.style.strokeDasharray = `${pathLength}`;
    //             rightPathRef.current.style.strokeDashoffset = `${pathLength}`;
    //         }
    //     }, animationDuration);

    //     return () => clearTimeout(timer);
    // }, []);

    window.onload = () => {
        const svgElement = document.querySelector("svg");
        const leftK = document.querySelector("#mask-K-left");
        const rightK = document.querySelector("#mask-K-right");
        if (leftK) {
            console.log("SVG element found");
            // svgElement.classList.add(styles.playAnimation);
            leftK.classList.add(styles.playAnimation);
        } else {
            console.log("SVG element not found");
        }
        if (rightK) {
            console.log("SVG element found");
            // svgElement.classList.add(styles.playAnimation);
            rightK.classList.add(styles.playAnimation);
        } else {
            console.log("SVG element not found");
        }
    };

    return (
        <div className="bg-black h-screen w-full justify-center flex items-center">
            <svg
                width="250"
                height="185"
                viewBox="0 0 250 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.khaled}
            >
                <title>Khaled</title>
                <defs>
                    <mask id="mask-khaled-K">
                        <path
                            ref={leftPathRef}
                            className={styles.mask}
                            id="mask-K-left"
                            d="M43.662 97.043c-2.998 1.155-14.521 2.774-21.162 0-8.3-3.469-17.575-11.792 5.252-42.311 22.827-30.52 83.008-40.924 90.617-41.617 7.609-.694 29.053 1.387 20.752 16.647s-38.045 57.57-40.12 62.425C96.925 97.043 71 137.5 63.5 152c1.5 3.5 4.7 2.4 11.5 0"
                            stroke="#FFFFFF"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />
                        <path
                            ref={rightPathRef}
                            className={styles.mask}
                            id="mask-K-right"
                            d="M240 21c-36.268 12.215-117.5 50.5-117.5 63.5 0 24 56.859 76.012 66.5 85 7.713 7.191 17.257 1.302 20.7-2.616"
                            stroke="#FFFFFF"
                            strokeWidth="15"
                            strokeLinecap="round"
                        />
                    </mask>
                </defs>
                <g id="khaled">
                    <path
                        mask="url(#mask-khaled-K)"
                        id="khaled-char-K-left"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M66.101 157.403q-7.824 0-7.19-2.541.846-3.388 3.595-9.316 2.749-6.14 7.613-14.822a302 302 0 0 1 8.671-15.033 414 414 0 0 1 9.306-14.186q13.535-19.691 21.148-30.913 7.614-11.222 9.306-13.975 16.707-25.62 16.707-33.877 0-2.753-1.903-3.6-5.71-2.54-13.112-2.54-16.497 0-49.488 14.186-10.363 4.446-19.245 10.163-8.882 5.716-16.496 12.492-16.707 15.457-16.708 28.373 0 5.293 2.75 9.74 2.96 4.234 12.689 5.293 8.036 1.06 7.19 2.54-2.114 4.024-10.997 4.024-7.613 0-15.015-5.082Q9 94.306 9 85.413q0-12.28 8.882-23.714 7.19-9.105 21.784-19.056Q56.584 30.786 74.56 24.857 109.455 13 124.26 13q17.554 0 21.994 11.222 1.904 4.87-25.378 45.311-17.553 26.043-29.608 45.523-11.843 19.267-18.4 32.184v.423q0 1.06 1.481 2.753 1.48 1.694 1.48 2.752-.422 4.236-9.728 4.235"
                        fill="#ffffff"
                    />
                    <path
                        mask="url(#mask-khaled-K)"
                        id="khaled-char-K-right"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M195.742 179q-2.75 0-5.71-1.694-12.055-7.199-42.086-41.923-31.722-37.266-31.723-49.546 0-2.33.846-3.176 2.326-2.753 9.729-7.835 7.401-5.293 19.879-12.915a538 538 0 0 1 20.726-12.493 510 510 0 0 1 20.726-11.645q28.973-15.669 47.161-16.304h.846q4.864 0 4.864 2.753 0 2.118-3.384 2.329-39.97 6.14-109.972 56.533-.635.212-.635 1.482 0 5.294 11.632 22.232a637 637 0 0 0 12.266 16.939 366 366 0 0 0 13.747 16.304q25.8 28.584 37.433 28.584 2.538 0 5.075-1.482t2.961-1.482h.846q1.903 0 1.903 1.27 0 3.176-6.344 6.776a204 204 0 0 1-5.71 3.387q-2.75 1.906-5.076 1.906"
                        fill="#ffffff"
                    />
                </g>
            </svg>
        </div>
    )
}