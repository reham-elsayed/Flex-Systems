"use client";

import { motion } from "framer-motion";
import { Layers, Shield, Users, BarChart3, Zap, Globe } from "lucide-react";
import { FeatureHeader } from "./FeatureHeader";
import dynamic from "next/dynamic";

const AnimatedTasks = dynamic(() => import("../AnimatedLottie/AnimatedTasks"), { ssr: false });

const features = [
    {
        name: "Multi-Tenancy",
        description: "Built-in tenant isolation and data security. Create unlimited workspaces.",
        icon: Layers,
        color: "text-chart-1",
        bg: "bg-chart-1/10",
    },
    {
        name: "Role-Based Access",
        description: "Granular permission system to control who can see and do what.",
        icon: Shield,
        color: "text-chart-2",
        bg: "bg-chart-2/10",
    },
    {
        name: "Team Collaboration",
        description: "Invite members via email and manage team structure effortlessly.",
        icon: Users,
        color: "text-chart-3",
        bg: "bg-chart-3/10",
    },
    {
        name: "Modular Architecture",
        description: "Enable or disable modules like HR, CRM, and Shop per tenant.",
        icon: Zap,
        color: "text-chart-4",
        bg: "bg-chart-4/10",
    },
    {
        name: "Analytics",
        description: "Beautiful dashboards and reporting tools for data-driven decisions.",
        icon: BarChart3,
        color: "text-chart-5",
        bg: "bg-chart-5/10",
    },
    {
        name: "Global Scale",
        description: "Ready for internationalization and deployed on edge networks.",
        icon: Globe,
        color: "text-primary",
        bg: "bg-primary/10",
    },
];

export function FeatureShowcase() {
    return (
        <section id="features" className="relative overflow-hidden">
            <FeatureHeader 
                title="Everything you need to ship faster" 
                description="A complete toolkit for building modern SaaS applications." 
            />
            
            <div className="max-w-7xl px-4 mx-auto md:px-6 relative z-10">
                <div className="py-12 md:py-16 lg:py-20">
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border/60">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group p-10 border-r border-b border-border/60 bg-transparent hover:bg-card/40 transition-all duration-500"
                            >
                                {/* Icon Container - Squared */}
                                <div className={`inline-flex p-3 rounded-none mb-6 border border-current/10 ${feature.color} ${feature.bg}`}>
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {feature.name}
                                </h3>
                                
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {feature.description}
                                </p>

                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                                
                                {/* Corner Blueprint Detail */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-primary opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}