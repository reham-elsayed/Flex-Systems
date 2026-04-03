"use client";

import { motion } from "framer-motion";

export function FeatureHeader() {
    return (
        <div className="relative mb-20 flex flex-col items-center justify-center">
            {/* Text Content - Pure Center */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl z-10 px-4 relative mx-auto"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 mb-5 border border-blue-100 dark:border-blue-800/50 shadow-sm transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50"
                >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 animate-pulse"></span>
                    Built for Scale
                </motion.div>

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
                    Everything you need to ship faster
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    A complete toolkit for building modern SaaS applications.
                </p>
            </motion.div>
        </div>
    );
}
