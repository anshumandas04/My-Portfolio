'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-colors duration-300 px-4 md:px-12 py-4 flex items-center justify-between",
            isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)"
        )}>
            <div className="flex items-center gap-8">
                <Link href="/landing" className="text-primary font-bold text-3xl tracking-tighter shadow-lg">
                    ANSHUMAN
                </Link>

                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    <Link href="/home" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                    <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </div>
            </div>

            <div>
                {/* Helper/Contact or simple icon */}
                <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors">
                    Contact
                </Link>
            </div>
        </nav>
    )
}
