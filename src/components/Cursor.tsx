'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

interface CursorProps {
    isActive: boolean;
}

const Cursor = ({ isActive }: CursorProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const sizeInitial = useSpring(isActive ? 400 : 0, { stiffness: 500, damping: 40 });
    const size = useTransform(sizeInitial, [0, 400], [0, 400]);
    const blur = useTransform(size, [0, 400], [0, 70]);
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        if (isHeroInView) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHeroInView]);

    useEffect(() => {
        if (isHeroInView) {
            cursorX.set(mousePosition.x);
            cursorY.set(mousePosition.y);
        }
    }, [mousePosition, cursorX, cursorY, isHeroInView]);

    return (
        <div ref={heroRef}>
            {/* Your hero section content */}
            <motion.div
                className="fixed top-0 left-0 rounded-full mix-blend-screen opacity-30 pointer-events-none cursor"
                style={{
                    backgroundColor: '#ffffff',
                    width: size,
                    height: size,
                    filter: `blur(${blur}px)`,
                    x: cursorX,
                    y: cursorY,
                    transition: 'height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out',
                    display: isHeroInView ? 'block' : 'none',
                }}
            />
        </div>
    );
};

export default Cursor;