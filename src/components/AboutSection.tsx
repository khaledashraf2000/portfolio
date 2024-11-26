'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HoverCard from "./HoverCard";
import Video from "./Video";
import { useMediaQuery } from "react-responsive";
import './horizontal-scroll.css';

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
    objectPosition = 'center',
    width = '20%',
    isMobile
}) => (
    <motion.div
        className="video-container"
        style={{
            width: isMobile ? '100%' : width,
            opacity: isMobile ? 1 : opacity
        }}
    >
        <HoverCard>
            <Video
                src={src}
                className={`video ${objectPosition !== 'center' ? `object-[${objectPosition}]` : ''}`}
            />
        </HoverCard>
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
            <div className="mobile-about-section">
                <div className="content-wrapper-mobile">
                    <VideoSection src="/reel4.mp4" isMobile={true} />

                    <TextSection opacity={1} isMobile={true}>
                        <h2 className="caption">Born and raised in Alexandria, Egypt, I have deep love for the Mediterranean life.</h2>
                    </TextSection>

                    <VideoSection src="/reel2.mp4" isMobile={true} />
                    <VideoSection src="/reel5.mp4" isMobile={true} />

                    <TextSection opacity={1} isMobile={true}>
                        <VideoSection src="/reel.mp4" isMobile={true} />
                        <p className="caption">These videos were all taken by me while roaming in Alexandria.</p>
                    </TextSection>

                    <VideoSection src="/reel7.mp4" isMobile={true} />
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
                        <p className="caption">Born and raised in Alexandria, Egypt, I have deep love for the Mediterranean life.</p>
                        <div className="video-container narrow">
                            <VideoSection src="/reel2.mp4" opacity={opacities[1]} width="100%" />
                        </div>
                    </TextSection>
                    {/* <TextSection opacity={opacities[1]}>
                        <h2 className="caption">Born and raised in Alexandria, Egypt, I have deep love for the Mediterranean life.</h2>
                        <motion.div
                            className="video-container secondary"
                            style={{ opacity: opacities[1] }}
                        >
                            <HoverCard>
                                <Video
                                    src="/reel2.mp4"
                                    className="video"
                                    style={{ objectPosition: '50% 60%' }}
                                />
                            </HoverCard>
                        </motion.div>
                    </TextSection> */}

                    <VideoSection src="/reel5.mp4" opacity={opacities[2]} />

                    <TextSection opacity={opacities[3]}>
                        <div className="video-container narrow">
                            <VideoSection src="/reel.mp4" opacity={opacities[3]} width="100%" />
                        </div>
                        <p className="caption">These videos were all taken by me while roaming in Alexandria.</p>
                    </TextSection>

                    <VideoSection src="/reel7.mp4" opacity={opacities[4]} />
                </motion.div>
            </div>
        </div>
    );
}