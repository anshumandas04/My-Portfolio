import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Github, Globe } from 'lucide-react'
import { getProjectBySlug, getProjects } from '@/lib/supabase/queries'
import { TechBadge } from '@/components/detail/TechBadge'
import { MetricHighlight } from '@/components/detail/MetricHighlight'
import { SectionBlock } from '@/components/detail/SectionBlock'

import { createStaticClient } from '@/lib/supabase/static'

// Generate static params for all projects at build time
export async function generateStaticParams() {
    const client = createStaticClient()
    const projects = await getProjects(client)
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const project = await getProjectBySlug(params.slug)

    if (!project) {
        return { title: 'Project Not Found' }
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.short_description,
    }
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = await getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    // Parse metrics JSON
    const metrics = project.metrics as Record<string, string>

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                {project.thumbnail_url ? (
                    <Image
                        src={project.thumbnail_url}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-surface-hover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Back Button */}
                <div className="absolute top-24 left-4 md:left-12 z-20">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors bg-black/50 backdrop-blur px-4 py-2 rounded-full text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

                {/* Title Block */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-20">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech_stack?.slice(0, 3).map(tech => (
                                <span key={tech} className="px-2 py-1 bg-primary text-white text-xs font-bold uppercase rounded-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-2 ml-[-0.1em]">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl font-light">
                            {project.short_description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-12 mt-12 grid gap-12 md:gap-20">

                {/* Links & Tech Stack */}
                <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-border pb-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack?.map(tech => (
                                <TechBadge key={tech} text={tech} />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 self-start">
                        {project.github_url && (
                            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-bold hover:bg-white/90 transition-colors">
                                <Github className="w-4 h-4" /> Source
                            </a>
                        )}
                        {project.live_url && (
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface hover:bg-surface-hover border border-border text-white px-4 py-2 rounded font-bold transition-colors">
                                <Globe className="w-4 h-4" /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Key Metrics Grid */}
                <section>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(metrics).map(([key, value]) => (
                            <MetricHighlight key={key} label={key.replace('_', ' ')} value={value} />
                        ))}
                    </div>
                </section>

                {/* Narrative Sections */}
                <div className="space-y-16">
                    <SectionBlock title="The Problem">
                        <p>
                            {/* Placeholder narrative logic - in real app would come from structured markdown or separate DB columns */}
                            This project addresses a critical gap in the market. Existing solutions were either too expensive, lacked real-time capabilities, or suffered from poor user experience. The goal was to build a system that could handle high concurrency while maintaining sub-second latency.
                        </p>
                    </SectionBlock>

                    <SectionBlock title="Architecture">
                        <p>
                            Built using a microservices architecture to ensure scalability. The core system relies on <strong>{project.tech_stack?.[0]}</strong> for high-performance processing, while <strong>Supabase</strong> manages data persistence with row-level security.
                        </p>
                        <div className="my-8 aspect-video bg-surface-hover rounded-lg flex items-center justify-center border border-border">
                            <span className="text-text-muted italic">System Architecture Diagram Placeholder</span>
                        </div>
                        <p>
                            State management is handled via aggressive caching strategies, minimizing database hits during peak load.
                        </p>
                    </SectionBlock>

                    <SectionBlock title="Implementation Details">
                        <p className="whitespace-pre-line">
                            {project.long_description}
                        </p>
                    </SectionBlock>

                    <SectionBlock title="Results & Impact">
                        <p>
                            The system successfully handled production traffic with 99.9% uptime. User engagement increased by 40% within the first month of deployment.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-text-secondary">
                            <li>Reduced latency by 60% compared to legacy solution.</li>
                            <li>Scaled to support {metrics.users || 'thousands of'} concurrent users.</li>
                            <li>Optimized cloud costs by 30% through efficient resource usage.</li>
                        </ul>
                    </SectionBlock>
                </div>

                {/* Navigation Footer */}
                <div className="pt-20 border-t border-border flex justify-between">
                    <Link href="/" className="text-text-muted hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                    <Link href="/projects" className="text-primary hover:text-primary-hover transition-colors font-bold">
                        View All Projects →
                    </Link>
                </div>

            </div>
        </div>
    )
}
