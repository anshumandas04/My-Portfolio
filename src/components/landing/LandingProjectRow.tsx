"use client"

import { Project } from "@/lib/supabase/types"
import { NetflixRow } from "@/components/home/NetflixRow"
import { ContentCard } from "@/components/cards/ContentCard"

interface LandingProjectRowProps {
    projects: Project[]
}

export function LandingProjectRow({ projects }: LandingProjectRowProps) {
    return (
        <NetflixRow
            title="Selected Works"
            items={projects}
            renderItem={(project) => (
                <ContentCard
                    title={project.title}
                    summary={project.short_description}
                    thumbnailUrl={project.thumbnail_url}
                    techStack={project.tech_stack || []}
                    href={`/projects/${project.slug}`}
                />
            )}
            href="/home"
        />
    )
}
