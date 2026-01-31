"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface ContentCardProps {
    title: string
    summary: string
    thumbnailUrl?: string | null
    techStack: string[]
    href: string
}

export function ContentCard({
    title,
    summary,
    thumbnailUrl,
    techStack,
    href,
}: ContentCardProps) {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)

    const handleNavigation = () => {
        router.push(href)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleNavigation()
        }
    }

    return (
        <motion.div
            className="relative flex-none w-[300px] aspect-[16/9] rounded-md overflow-hidden bg-surface cursor-pointer group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            role="button"
            tabIndex={0}
            onClick={handleNavigation}
            onKeyDown={handleKeyDown}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Background Image/Thumbnail */}
            <div className="absolute inset-0 z-0">
                {thumbnailUrl ? (
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-60"
                        sizes="300px"
                    />
                ) : (
                    <div className="w-full h-full bg-surface-hover flex items-center justify-center text-text-muted">
                        <span className="text-sm font-medium">No Preview</span>
                    </div>
                )}
            </div>

            {/* Dark Gradient Overlay */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
            )} />

            {/* Content Container */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end h-full pointer-events-none">
                {/* Title always visible, moves up on hover */}
                <motion.h3
                    className="text-lg font-bold text-white leading-tight drop-shadow-md mb-2 pointer-events-auto"
                    animate={{ y: isHovered ? 0 : 0 }} // Removed text movement to keep it simple and stable
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h3>

                {/* Revealed Content */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pointer-events-auto"
                        >
                            <div className="flex flex-wrap gap-1 mb-2">
                                {techStack.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] uppercase font-bold text-text-secondary bg-white/10 px-1.5 py-0.5 rounded-[2px] tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {techStack.length > 3 && (
                                    <span className="text-[10px] text-text-muted self-center ml-1">
                                        +{techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                                {summary}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
