'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { FlipWords } from './ui/flip-words';
import { motion } from 'framer-motion';
import Navbar from './ui/navbar';
import ShinyText from './ShinyText';

// Dynamically import heavy components
const Canvas = dynamic(
    () => import('@react-three/fiber').then(mod => mod.Canvas),
    {
        ssr: false,
        loading: () => <div className="fixed inset-0 bg-slate-600" />
    }
);

const HolographicBackground = dynamic(
    () => import('./HolographicBackground'),
    { ssr: false }
);

const LoadingScreen = dynamic(() => import('./LoadingScreen'));
// const Cursor = dynamic(() => import('./Cursor'));

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
    }),
};

export default function HeroSection() {
    // const [isActive, setIsActive] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <div
            className="relative h-screen w-full bg-slate-800 overflow-hidden"
        // Uncomment these if you want mouse activity to trigger cursor
        // onMouseOver={() => setIsActive(true)}
        // onMouseLeave={() => setIsActive(false)}
        >
            {!loadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

            <Suspense fallback={<div className="fixed inset-0 bg-slate-800" />}>
                <Canvas className="absolute inset-0 mix-blend-soft-light">
                    <HolographicBackground />
                </Canvas>
            </Suspense>

            <div className="absolute inset-0 flex flex-col justify-between items-center px-4 py-6 z-10">
                <motion.div
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.2}
                    variants={fadeIn}
                >
                    <Navbar />
                </motion.div>

                <motion.div
                    className="text-center w-full mx-auto flex flex-col gap-3"
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.4}
                    variants={fadeIn}
                >
                    <ShinyText className='text-white/80 font-sans text-base md:text-xl text-center'>
                        The product & visual design portfolio of
                    </ShinyText>
                    <h1 className='section-headline hero text-center w-full pr-10'>Khaled <span className='hidden md:inline'>Ashraf</span></h1>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center section-description hero text-center uppercase pb-5"
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.6}
                    variants={fadeIn}
                >
                    <p>I'm a</p>
                    <span className="inline-flex items-center justify-center border-2 border-white mx-2 px-2 rounded-xl w-[120px]">
                        <FlipWords words={['creative', 'designer', 'developer', 'human']} />
                    </span>
                    <p>based in Egypt</p>
                </motion.div>
            </div>
            {/* <Cursor isActive={isActive} /> */}
        </div>
    );
}