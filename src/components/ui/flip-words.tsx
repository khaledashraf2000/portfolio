'use client';

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [isClient, setIsClient] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const currentWord = useMemo(() => words[currentWordIndex], [words, currentWordIndex]);

    const nextWord = useCallback(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, [words.length]);

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(nextWord, duration);
        return () => clearInterval(interval);
    }, [duration, nextWord]);

    // Render a placeholder on the server and during initial client render
    if (!isClient) {
        return <span className={cn("inline-block", className)}>{words[0]}</span>;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={cn("inline-block", className)}
            >
                {currentWord}
            </motion.span>
        </AnimatePresence>
    );
};