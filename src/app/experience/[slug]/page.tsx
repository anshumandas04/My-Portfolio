
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Building, CheckCircle } from 'lucide-react'
import { getExperienceBySlug } from '@/lib/supabase/queries'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ExperienceDetailPage({ params }: PageProps) {
    const { slug } = await params
    const experience = await getExperienceBySlug(slug)

    if (!experience) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white pt-24 pb-20">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-zinc-900/20 to-black pointer-events-none -z-10" />

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Header Section */}
                <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                                {experience.role}
                            </h1>
                            <div className="flex items-center gap-3 text-xl text-red-500 font-medium">
                                <Building className="w-5 h-5" />
                                <span>{experience.company_name}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-mono">{experience.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Description */}
                        {experience.description && (
                            <section className="prose prose-invert prose-lg max-w-none">
                                <p className="leading-relaxed text-gray-300">
                                    {experience.description}
                                </p>
                            </section>
                        )}

                        {/* Responsibilities */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-red-600 rounded-full" />
                                Key Responsibilities
                            </h2>
                            <ul className="space-y-4">
                                {experience.responsibilities.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-gray-300 group hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
                                    >
                                        <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">
                        {/* Technologies */}
                        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-red-600 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Impact Metrics */}
                        {experience.impact_metrics && Object.keys(experience.impact_metrics).length > 0 && (
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                    Impact
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(experience.impact_metrics).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center pb-2 border-b border-white/5 last:border-0 last:pb-0">
                                            <span className="text-sm text-gray-400 capitalize">{key.replace(/_/g, ' ')}</span>
                                            <span className="font-mono font-bold text-red-500 text-lg">
                                                {String(value)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Thumbnail if exists */}
                        {experience.thumbnail_url && (
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src={experience.thumbnail_url}
                                    alt={experience.company_name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
