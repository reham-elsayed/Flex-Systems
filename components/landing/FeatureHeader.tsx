"use client";

import { motion } from "framer-motion";
import { TrackerBackground } from "./TrackerBackground";
import { ReactNode } from "react";

interface FeatureHeaderProps {
    title: ReactNode;
    description: ReactNode;
}

export function FeatureHeader({ title, description }: FeatureHeaderProps) {
    return (
        <div className="relative py-[15px] flex flex-col items-center justify-center">
            <TrackerBackground />
            
            {/* Text Content - Pure Center */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl z-10 px-4 sm:px-6 lg:px-8 relative mx-auto my-auto"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4 sm:mb-6">
                    {title}
                </h2>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
                    {description}
                </p>
            </motion.div>
        </div>
    );
}
