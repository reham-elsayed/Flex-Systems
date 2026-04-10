"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FeatureHeader } from "./FeatureHeader";
import createTenantImg from "@/assets/createTenant.jpeg";
import modulesImg from "@/assets/moduless.png";
import inviteMemberImg from "@/assets/invite member.png";

interface Step {
    title: string;
    description: string;
    color: string;
    bg: string;
    image: StaticImageData;
    imageAlt: string;
    side: "left" | "right";
}

const steps: Step[] = [
    {
        title: "Create Your Workspace",
        description: "Start by giving your workspace a name and a unique slug. This creates your dedicated environment.",
        color: "text-chart-1",
        bg: "bg-chart-1/10",
        image: createTenantImg,
        imageAlt: "Tenant Creation Form",
        side: "left",
    },
    {
        title: "Select Modules",
        description: "Choose the modules you need: HR, CRM, E-commerce, and more. Pay only for what you use.",
        color: "text-chart-2",
        bg: "bg-chart-2/10",
        image: modulesImg,
        imageAlt: "Module Selection",
        side: "right",
    },
    {
        title: "Invite Your Team",
        description: "Add team members and assign granular permissions. Collaboration made easy.",
        color: "text-chart-3",
        bg: "bg-chart-3/10",
        image: inviteMemberImg,
        imageAlt: "Team Management",
        side: "left",
    },
];

export function OnboardingFlow() {
    return (
        <section className="py-12 sm:py-18 relative overflow-hidden">
            {/* Header stays exactly the same */}
            <FeatureHeader
                title={
                    <>
                        Streamlined <span className="mesh-gradient-text pb-2">Onboarding</span>
                    </>
                }
                description="Get up and running in minutes with our intuitive, step-by-step setup."
            />

            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border/60 hidden md:block" />

                <div className="py-12 md:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                        <div className="space-y-24 sm:space-y-40">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${
                                        step.side === "right" ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Content Side */}
                                    <div className="flex-1 space-y-6 relative">
                                        {/* Step Number - Squared and Bordered */}
                                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-none border border-border bg-background ${step.color} font-bold text-xl mb-4 relative z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]`}>
                                            0{index + 1}
                                        </div>

                                        <h3 className="text-3xl font-bold tracking-tighter text-foreground uppercase italic">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                            {step.description}
                                        </p>

                                        {/* Bottom accent line for text block */}
                                        <div className="w-12 h-[2px] bg-primary" />
                                    </div>

                                    {/* Image Side */}
                                    <div className="flex-1 w-full relative group">
                                        {/* Offset shadow border */}
                                        <div className="absolute -inset-2 border border-border/40 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />

                                        <div className="relative z-10 aspect-video rounded-none overflow-hidden bg-card border border-border group-hover:border-primary/50 transition-colors duration-500">
                                            {/* Technical Grid Pattern Overlay */}
                                            <div
                                                className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                                    backgroundSize: "20px 20px",
                                                }}
                                            />

                                            {/* Actual screenshot */}
                                            <Image
                                                src={step.image}
                                                alt={step.imageAlt}
                                                fill
                                                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                            {/* Subtle dark gradient at bottom for label legibility */}
                                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none" />

                                            {/* Image label */}
                                            <p className="absolute bottom-3 left-4 z-30 text-xs font-bold tracking-widest uppercase text-white/80">
                                                {step.imageAlt}
                                            </p>

                                            {/* Decorative Corner Accents */}
                                            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/60 z-30" />
                                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/60 z-30" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}