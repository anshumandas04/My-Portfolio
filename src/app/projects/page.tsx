import { Metadata } from 'next'
import { getProjects } from '@/lib/supabase/queries'
// @ts-ignore - Temporary until file is recognized by TS server
import { ProjectGrid } from '@/components/home/ProjectGrid'

export const metadata: Metadata = {
    title: 'Projects | Anshuman',
    description: 'Library of technical case studies and experiments.',
}

export const revalidate = 0 // Realtime freshness


export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 max-w-screen-2xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white">Project Library.</h1>
                <p className="text-xl text-text-secondary max-w-2xl">
                    A distinct collection of production-grade applications, experiments, and technical deep dives.
                </p>
            </div>

            <ProjectGrid initialProjects={projects} />
        </div>
    )
}
