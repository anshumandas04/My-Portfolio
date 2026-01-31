"use client"

import { Suspense } from 'react'
import { Project, Experience } from "@/lib/supabase/types"
import { useRealtimeData } from "@/lib/hooks/useRealtimeData"
import { HeroBanner } from "@/components/home/HeroBanner"
import { NetflixRow } from "@/components/home/NetflixRow"
import { ContentCard } from "@/components/cards/ContentCard"

interface HomeFeedProps {
    initialProjects: Project[]
    initialExperience: Experience[]
}

export function HomeFeed({ initialProjects, initialExperience }: HomeFeedProps) {
    const projects = useRealtimeData(initialProjects, 'projects', '/api/projects')
    const experience = useRealtimeData(initialExperience, 'experience', '/api/experience')

    const featuredProjects = projects.filter(p => p.featured)
    const otherProjects = projects.filter(p => !p.featured)

    return (
        <div className="min-h-screen pb-20 space-y-8 md:space-y-12">
            <HeroBanner />

            <div className="relative z-20 space-y-4 md:space-y-12 pt-4">
                {/* Featured Row */}
                {featuredProjects.length > 0 && (
                    <NetflixRow
                        title="Featured Projects"
                        items={featuredProjects}
                        href="/projects"
                        renderItem={(project, index) => (
                            <ContentCard
                                key={project.id}
                                title={project.title}
                                summary={project.short_description}
                                thumbnailUrl={project.thumbnail_url}
                                techStack={project.tech_stack || []}
                                href={`/projects/${project.slug}`}
                            />
                        )}
                    />
                )}

                {/* Experience Row */}
                {experience.length > 0 && (
                    <NetflixRow
                        title="Experience"
                        items={experience}
                        href="/experience"
                        renderItem={(role, index) => (
                            <ContentCard
                                key={role.id}
                                title={role.role}
                                summary={`${role.company_name} • ${role.duration}`}
                                thumbnailUrl={role.thumbnail_url}
                                techStack={role.technologies || []}
                                href={`/experience/${role.slug}`}
                            />
                        )}
                    />
                )}

                {/* Other Projects Row */}
                {otherProjects.length > 0 && (
                    <NetflixRow
                        title="More Projects"
                        items={otherProjects}
                        href="/projects"
                        renderItem={(project, index) => (
                            <ContentCard
                                key={project.id}
                                title={project.title}
                                summary={project.short_description}
                                thumbnailUrl={project.thumbnail_url}
                                techStack={project.tech_stack || []}
                                href={`/projects/${project.slug}`}
                            />
                        )}
                    />
                )}
            </div>
        </div>
    )
}
