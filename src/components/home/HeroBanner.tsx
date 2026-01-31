"use client"

import { motion } from "framer-motion"
import { Play, Info } from "lucide-react"
import Link from "next/link"

export function HeroBanner() {
    return (
        <div className="relative w-full h-[70vh] flex items-center mb-[-4rem] overflow-hidden">
            {/* Background Layer - In production this would be next/image or video */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 md:px-12 pt-20">
                <motion.div
                    className="max-w-2xl space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Featured Label */}
                    <motion.div
                        className="flex items-center gap-2 text-primary font-bold tracking-widest text-sm uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="w-1 h-4 bg-primary block shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
                        Featured Project
                    </motion.div>

                    {/* Title - using generic font for now, but configured for 'display' */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                        DERMA<span className="text-primary"> AI</span>
                    </h1>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm md:text-base font-medium text-gray-300">
                        <span className="text-green-400 font-bold">98% Accuracy</span>
                        <span>2024</span>
                        <span className="px-1.5 py-0.5 border border-gray-500 rounded text-xs">TS</span>
                        <span className="px-1.5 py-0.5 border border-gray-500 rounded text-xs">PYTHON</span>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-200 line-clamp-3 md:line-clamp-none max-w-xl shadow-black drop-shadow-md">
                        An advanced dermatology diagnostic tool leveraging computer vision to identify skin conditions in real-time. Built for scale with high-throughput inference and clinical grade safety compliant architecture.
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4">
                        <Link
                            href="/projects/derma-ai"
                            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 md:px-8 md:py-3 rounded font-bold hover:bg-white/90 transition-colors"
                        >
                            <Play className="w-5 h-5 fill-black" />
                            View Case Study
                        </Link>

                        <Link
                            href="/projects"
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 md:px-8 md:py-3 rounded font-bold hover:bg-white/30 transition-colors"
                        >
                            <Info className="w-5 h-5" />
                            More Info
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
