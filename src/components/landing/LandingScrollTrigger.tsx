"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Play, ArrowDown } from "lucide-react"

export function LandingScrollTrigger() {
    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = useState(false)

    // Listen to scroll to disable auto-scroll if user is already exploring
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            if (latest > 50) {
                setHasScrolled(true)
            }
        })
        return () => unsubscribe()
    }, [scrollY])

    // Auto-scroll logic (Timeout based)
    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (!hasScrolled) {
            timeout = setTimeout(() => {
                const nextSection = document.getElementById("about-section")
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" })
                }
            }, 3000) // 3 seconds delay before auto-scroll hint
        }

        return () => clearTimeout(timeout)
    }, [hasScrolled])

    const scrollToContent = () => {
        const nextSection = document.getElementById("about-section")
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.button
            onClick={scrollToContent}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ArrowDown className="w-6 h-6" />
        </motion.button>
    )
}
