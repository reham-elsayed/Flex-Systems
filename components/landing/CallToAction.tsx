"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SlideInElement } from "./SlideInElement";
import dynamic from "next/dynamic";

const AnimatedTasks = dynamic(() => import("../AnimatedLottie/AnimatedTasks"), { ssr: false });

export function CallToAction() {
    return (
        <section className=" relative overflow-x-clip overflow-y-visible">
            {/* Bleeding Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 dark:opacity-40 pointer-events-none rounded-full bg-primary/30 blur-[120px] z-0" />

            {/* Animated Codesmith-style SVG Waves */}
            <div className="absolute -inset-7 z-0 overflow-visible pointer-events-none flex items-center justify-center opacity-10 dark:opacity-20">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 800"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[150%] min-w-[2000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                >
                    <g stroke="currentColor" strokeWidth="1.5" fill="none">
                        <path d="M0,400 C320,100 420,700 1440,400">
                            <animate attributeName="d" dur="15s" repeatCount="indefinite"
                                    values="M0,400 C320,100 420,700 1440,400; M0,400 C320,700 420,100 1440,400; M0,400 C320,100 420,700 1440,400" />
                        </path>
                        <path d="M0,450 C420,200 620,800 1440,450">
                            <animate attributeName="d" dur="20s" repeatCount="indefinite"
                                    values="M0,450 C420,200 620,800 1440,450; M0,450 C420,800 620,200 1440,450; M0,450 C420,200 620,800 1440,450" />
                        </path>
                        <path d="M0,350 C500,50 900,600 1440,350">
                            <animate attributeName="d" dur="25s" repeatCount="indefinite"
                                    values="M0,350 C500,50 900,600 1440,350; M0,350 C500,600 900,50 1440,350; M0,350 C500,50 900,600 1440,350" />
                        </path>
                        <path d="M0,400 C600,150 1000,550 1440,400">
                            <animate attributeName="d" dur="22s" repeatCount="indefinite"
                                    values="M0,400 C600,150 1000,550 1440,400; M0,400 C600,550 1000,150 1440,400; M0,400 C600,150 1000,550 1440,400" />
                        </path>
                    </g>
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex flex-col items-center text-center p-8 md:p-16 lg:p-20"
                >
                    {/* Background Pattern / Lottie - Positioned relative to the section content now without the border card */}
                    {/* <div className="absolute inset-0 flex justify-center items-center opacity-10 md:opacity-15 pointer-events-none z-0">
                        <SlideInElement className="w-64 md:w-96">
                            <AnimatedTasks />
                        </SlideInElement>
                    </div> */}

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Start building today
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Ready to start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-1">journey?</span>
                        </h2>
                        
                        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                            Join thousands of developers building the next generation of SaaS applications.
                            Get started for free today and accelerate your workflow.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                            <Link href="/workspace" className="w-full sm:w-auto">
                                <Button size="lg" className="text-base font-semibold px-8 h-14 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                                    Create Free Workspace
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="text-base font-semibold px-8 h-14 w-full sm:w-auto border-primary/20 hover:bg-primary/5 transition-all duration-300">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
