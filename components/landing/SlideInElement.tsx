"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SlideInElementProps {
    children: ReactNode;
    className?: string;
}

export function SlideInElement({ children, className = "" }: SlideInElementProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to vertical offset for parallax effect
    // As user scrolls down (progress 0 -> 1), the element moves up (100 -> -100)
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    
    // Smooth the transformation with a spring
    const springY = useSpring(y, { 
        stiffness: 70, 
        damping: 30, 
        restDelta: 0.001 
    });

    return (
        <motion.div
            ref={ref}
            className={`absolute ${className}`}
            style={{ 
                y: springY,
                willChange: "transform",
                transformStyle: "preserve-3d"
            }}
        >
            {children}
        </motion.div>
    );
}
