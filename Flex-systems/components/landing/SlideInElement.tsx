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
            initial={{ x: "-5em", opacity: 0 }}
            whileInView={{ x: "1.13438em", opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
