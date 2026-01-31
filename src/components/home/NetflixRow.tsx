"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export interface NetflixRowProps<T> {
    title: string
    items: T[]
    renderItem: (item: T, index: number) => React.ReactNode
    href?: string
}

export function NetflixRow<T>({ title, items, renderItem, href }: NetflixRowProps<T>) {
    const rowRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    controls.start("visible")
                    observer.unobserve(entry.target)
                }
            },
            {
                rootMargin: "100px", // Preload before it enters fully
                threshold: 0.1
            }
        )

        if (rowRef.current) {
            observer.observe(rowRef.current)
        }

        return () => {
            if (rowRef.current) {
                observer.unobserve(rowRef.current)
            }
        }
    }, [controls])

    return (
        <div
            ref={rowRef}
            className="py-8 md:py-10 space-y-4 relative group/row"
        >
            {/* Header */}
            <div className="px-4 md:px-12 flex items-baseline justify-between">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-bold text-white group-hover/row:text-primary transition-colors duration-300"
                >
                    {title}
                </motion.h2>

                {href && (
                    <Link
                        href={href}
                        className="text-xs font-bold text-text-muted hover:text-white flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
                    >
                        See all <ChevronRight className="w-3 h-3" />
                    </Link>
                )}
            </div>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="relative"
            >
                <motion.div
                    className="flex overflow-x-auto gap-2 md:gap-4 px-4 md:px-12 pb-8 scrollbar-hide snap-x snap-mandatory"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05
                            }
                        },
                        hidden: {}
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="snap-center shrink-0"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            }}
                        >
                            {renderItem(item, index)}
                        </motion.div>
                    ))}

                    {/* Spacer for right padding in scrolling container */}
                    <div className="w-8 md:w-16 shrink-0 snap-align-none" />
                </motion.div>

                {/* Safe-to-hover scroll indicators (gradient fades) could go here */}
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </div>
    )
}
