"use client";
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import type React from "react";

import { clx } from "@/lib/utils/clx/clx-merge";

export const CardsSwipeContainer = clx.div("relative size-96");

type CardSwipeProps = {
  children: React.ReactNode;
  onSendToBack: () => void;
};

export function CardSwipe({ children, onSendToBack }: CardSwipeProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Reduced rotation range
  const rotateX = useTransform(y, [-50, 50], [30, -30]);
  const rotateY = useTransform(x, [-50, 50], [-30, 30]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    // Reduced threshold for more sensitive swipe
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      className="absolute h-96 w-72 cursor-grab"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        touchAction: 'none' // Prevent browser's default touch behaviors
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.4} // Reduced elasticity
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}