## FILE: C:\Users\anshu\AnshumanResume\src\app\layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshuman | Portfolio",
  description: "Senior Full-Stack Engineer & Product Designer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-text-primary antialiased selection:bg-primary selection:text-white`}>
        <Navigation />
        <main className="min-h-screen relative">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}



## FILE: C:\Users\anshu\AnshumanResume\src\app\loading.tsx

import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
    return (
        <div className="pt-24 px-4 md:px-12 grid gap-12 w-full max-w-screen-2xl mx-auto">
            {/* Hero Skeleton */}
            <Skeleton className="h-[60vh] w-full rounded-xl" />

            {/* Row Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-48" /> {/* Section Title */}
                <div className="flex gap-4 overflow-hidden mask-fade-right">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-72 flex-shrink-0 rounded-md" />
                    ))}
                </div>
            </div>

            {/* Row Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="flex gap-4 overflow-hidden mask-fade-right">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-72 flex-shrink-0 rounded-md" />
                    ))}
                </div>
            </div>
        </div>
    )
}



## FILE: C:\Users\anshu\AnshumanResume\src\app\page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}



## FILE: C:\Users\anshu\AnshumanResume\src\components\layout\Footer.tsx

export function Footer() {
    return (
        <footer className="py-8 px-4 md:px-12 bg-black text-zinc-500 text-sm mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p>Â© {new Date().getFullYear()} Anshuman. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    )
}



## FILE: C:\Users\anshu\AnshumanResume\src\components\layout\Navigation.tsx

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
                <Link href="/" className="text-primary font-bold text-3xl tracking-tighter shadow-lg">
                    ANSHUMAN
                </Link>

                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
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



## FILE: C:\Users\anshu\AnshumanResume\src\components\layout\PageTransition.tsx

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}



## FILE: C:\Users\anshu\AnshumanResume\src\components\ui\Skeleton.tsx

import { cn } from "@/lib/utils"

export function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-zinc-800", className)}
            {...props}
        />
    )
}



## FILE: C:\Users\anshu\AnshumanResume\src\lib\supabase\client.ts

import { createBrowserClient } from '@supabase/ssr'
import { Database } from './types'

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )



## FILE: C:\Users\anshu\AnshumanResume\src\lib\supabase\queries.ts

import { createClient } from './server'
import { Project, Experience } from './types'

export async function getProjects(): Promise<Project[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true })

    if (error) {
        console.error('Error fetching projects:', error)
        return []
    }

    return data
}

export async function getFeaturedProjects(): Promise<Project[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('featured', true)
        .order('sort_order', { ascending: true })

    if (error) {
        console.error('Error fetching featured projects:', error)
        return []
    }

    return data
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        console.error(`Error fetching project with slug ${slug}:`, error)
        return null
    }

    return data
}

export async function getExperience(): Promise<Experience[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('sort_order', { ascending: true })

    if (error) {
        console.error('Error fetching experience:', error)
        return []
    }

    return data
}

export async function getExperienceBySlug(slug: string): Promise<Experience | null> {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('experience')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        console.error(`Error fetching experience with slug ${slug}:`, error)
        return null
    }

    return data
}



## FILE: C:\Users\anshu\AnshumanResume\src\lib\supabase\server.ts

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from './types'

export const createClient = async () => {
    const cookieStore = await cookies()

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )
}



## FILE: C:\Users\anshu\AnshumanResume\src\lib\supabase\types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          slug: string
          title: string
          short_description: string
          long_description: string
          tech_stack: string[]
          metrics: Json
          thumbnail_url: string | null
          gallery_urls: string[]
          github_url: string | null
          live_url: string | null
          featured: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['projects']['Insert']>
      }
      experience: {
        Row: {
          id: string
          slug: string
          company_name: string
          role: string
          duration: string
          responsibilities: string[]
          technologies: string[]
          impact_metrics: Json
          thumbnail_url: string | null
          description: string | null
          sort_order: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['experience']['Row'], 'id' | 'created_at'> & {
          id?: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['experience']['Insert']>
      }
    }
  }
}

export type Project = Database['public']['Tables']['projects']['Row']
export type Experience = Database['public']['Tables']['experience']['Row']



## FILE: C:\Users\anshu\AnshumanResume\src\lib\utils.ts

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}



