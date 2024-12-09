'use client';

import { type ReactNode, useRef, useCallback, memo } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    type MotionStyle,
} from 'framer-motion';

type SpringConfig = {
    stiffness?: number;
    damping?: number;
    mass?: number;
    restSpeed?: number;
};

interface TiltCardProps {
    children: ReactNode;
    /**
     * Maximum rotation range in degrees
     * @default 20
     */
    rotationRange?: number;
    /**
     * Perspective depth in pixels
     * @default 50
     */
    perspective?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Spring animation configuration
     */
    springConfig?: SpringConfig;
    /**
     * Disable tilt effect
     * @default false
     */
    disabled?: boolean;
}

const defaultSpringConfig: SpringConfig = {
    stiffness: 150,
    damping: 15,
    mass: 2,
    restSpeed: 0.001,
};

function TiltCard({
    children,
    rotationRange = 7,
    perspective = 10000,
    className = '',
    springConfig = defaultSpringConfig,
    disabled = false,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Memoize motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Create springs with custom config
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Create transform template with perspective
    const transform = useMotionTemplate`perspective(${perspective}px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (disabled) return;

            const card = cardRef.current;
            if (!card) return;

            const rect = card.getBoundingClientRect();

            // Calculate rotation based on mouse position relative to card center
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = event.clientX - centerX;
            const mouseY = event.clientY - centerY;

            // Convert to rotation values (-1 to 1) then apply rotation range
            const rotateX = (mouseY / (rect.height / 2)) * -rotationRange;
            const rotateY = (mouseX / (rect.width / 2)) * rotationRange;

            // Set motion values
            x.set(rotateX);
            y.set(rotateY);
        },
        [disabled, rotationRange, x, y]
    );

    const handleMouseLeave = useCallback(() => {
        if (disabled) return;

        // Animate back to original position
        x.set(0);
        y.set(0);
    }, [disabled, x, y]);

    // Memoize style object
    const motionStyle: MotionStyle = {
        transformStyle: 'preserve-3d',
        transform,
        transformOrigin: 'center center',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
    };

    if (disabled) {
        return (
            <div className={`relative w-full h-full ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className="relative h-full">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={motionStyle}
                className={`relative w-full h-full rounded-lg ${className}`}
                initial={false}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(TiltCard);