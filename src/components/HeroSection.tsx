'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';
import HoverCard from './HoverCard';

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
            className="relative h-screen w-full bg-slate-600 overflow-hidden"
        // Uncomment these if you want mouse activity to trigger cursor
        // onMouseOver={() => setIsActive(true)}
        // onMouseLeave={() => setIsActive(false)}
        >
            {/* {!loadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete} />} */}

            {/* <Canvas className="absolute inset-0 mix-blend-soft-light">
                <HolographicBackground />
            </Canvas> */}

            <div className="absolute inset-0 flex flex-col justify-between items-center px-4 py-4 z-10">
                <motion.div
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.2}
                    variants={fadeIn}
                >

                </motion.div>

                <motion.div
                    className="text-center w-full mx-auto flex flex-col gap-3"
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.4}
                    variants={fadeIn}
                >
                    <ShinyText className='text-white/70 font-sans text-base md:text-xl text-center'>
                        The product & visual design portfolio of
                    </ShinyText>
                    <HoverCard>

                        <h1 className='section-headline hero text-center w-full pr-7'>Khaled <span>Ashraf</span></h1>
                    </HoverCard>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center section-description hero text-center pb-5"
                    initial="hidden"
                    animate={loadingComplete ? "visible" : "hidden"}
                    custom={0.6}
                    variants={fadeIn}
                >
                    {/* <p>I'm a</p>
                    <span className="inline-flex items-center justify-center border-2 border-white mx-2 px-2 rounded-xl w-[120px]">
                        <FlipWords words={['creative', 'designer', 'developer', 'human']} />
                    </span>
                    <p>based in Egypt</p> */}
                    <p className='max-w-xl'>
                        A UX designer with a strong background in user research, interface design, and front-end development.
                        Experienced in creating user-centric designs for startups, and freelance projects. Proficient in tools like
                        Figma, Photoshop, and Illustrator. I deliver solutions that align with user needs and business goals.
                    </p>
                </motion.div>
            </div>
            {/* <Cursor isActive={isActive} /> */}
        </div>
    );
}