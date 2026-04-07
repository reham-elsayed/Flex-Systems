"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInElementProps {
    children: ReactNode;
    className?: string;
}

export function SlideInElement({ children, className = "" }: SlideInElementProps) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className={`absolute ${className}`}
            style={{ 
                willChange: "transform",
                transformStyle: "preserve-3d"
            }}
        >
            {children}
        </motion.div>
    );
}
