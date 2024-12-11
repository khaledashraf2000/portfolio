'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HoverCard from "./HoverCard";
import { useMediaQuery } from "react-responsive";
import './horizontal-scroll.css';
import Video from "./Video";

interface VideoSectionProps {
    src: string;
    opacity?: any;
    objectPosition?: string;
    width?: string;
    isMobile?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({
    src,
    opacity,
    width = '20%',
    isMobile,
    objectPosition
}) => (
    <motion.div
        className="video-container"
        style={{
            width: isMobile ? '100%' : width,
            height: isMobile ? '100%' : '',
            opacity: isMobile ? 1 : opacity
        }}
    >
        <Video
            src={src}
            className={`video ${objectPosition !== 'center' ? `object-[${objectPosition}]` : ''}`}
        />

    </motion.div>
);

const TextSection: React.FC<{
    opacity: any;
    children: React.ReactNode;
    isMobile?: boolean;
}> = ({ opacity, children, isMobile }) => (
    <motion.div
        className="text-container"
        style={{
            width: isMobile ? '100%' : '20%',
            opacity: isMobile ? 1 : opacity
        }}
    >
        {children}
    </motion.div>
);

export default function AboutSection() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.8, 1, 1, 1]);

    const createOpacityTransform = (start: number, end: number) =>
        useTransform(scrollYProgress, [start, (start + end) / 2, end], [0, 1, 1]);

    const opacities = [
        createOpacityTransform(0.1, 0.3),
        createOpacityTransform(0.2, 0.4),
        createOpacityTransform(0.3, 0.5),
        createOpacityTransform(0.4, 0.6),
        createOpacityTransform(0.5, 0.7),
    ];

    if (isMobile) {
        return (
            <div ref={containerRef} className="mobile-about-section">
                <div className="content-wrapper-mobile">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VideoSection src="/reel4.mp4" isMobile={true} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TextSection opacity={1} isMobile={true}>
                            <h2 className="caption">Originally from Alexandria, Egypt, I have deep love for the Mediterranean life.</h2>
                        </TextSection>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VideoSection src="/reel2.mp4" isMobile={true} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VideoSection src="/reel5.mp4" isMobile={true} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VideoSection src="/reel.mp4" isMobile={true} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TextSection opacity={1} isMobile={true}>
                            <p className="caption">I have a hobby of making videos about Alexandria</p>
                        </TextSection>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VideoSection src="/reel7.mp4" isMobile={true} />
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="scroll-container container mx-auto max-w-screen-2xl">
            <div className="sticky-content">
                <motion.div
                    className="content-wrapper first"
                    style={{ opacity, scale }}
                >
                    <VideoSection src="/reel4.mp4" opacity={opacities[0]} objectPosition="50% 85%" />

                    <TextSection opacity={opacities[1]}>
                        <p className="caption">Originally from Alexandria, Egypt, I have deep love for the Mediterranean life</p>
                        <div className="video-container narrow">
                            <VideoSection src="/reel2.mp4" opacity={opacities[1]} width="100%" />
                        </div>
                    </TextSection>

                    <VideoSection src="/reel5.mp4" opacity={opacities[2]} />

                    <TextSection opacity={opacities[3]}>
                        <div className="video-container narrow">
                            <VideoSection src="/reel.mp4" opacity={opacities[3]} width="100%" />
                        </div>
                        <p className="caption">I have a hobby of making videos about Alexandria</p>
                    </TextSection>

                    <VideoSection src="/reel7.mp4" opacity={opacities[4]} />
                </motion.div>
            </div>
        </div>
    );
}