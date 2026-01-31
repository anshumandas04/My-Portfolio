'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContentCard } from '@/components/cards/ContentCard'
import { createClient } from '@/lib/supabase/client'  // Client-side fetch for search interactivity if needed, but for now we'll pre-fetch
import { Project } from '@/lib/supabase/types'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { useRealtimeData } from '@/lib/hooks/useRealtimeData'

// Since we want this page to be searchable, we can make it a hybrid. 
// But per requirements "No client-side data fetching", we should fetch all and filter client-side.
// So this needs to be a Client Component that takes initial data props? 
// OR a Server Component that renders a Client Wrapper.
// Let's do Server Component -> Client Wrapper pattern.

// Wrapper Component (Client)
export function ProjectGrid({ initialProjects }: { initialProjects: Project[] }) {
    const projects = useRealtimeData(initialProjects, 'projects', '/api/projects')
    const [filter, setFilter] = useState('')

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.tech_stack?.some(t => t.toLowerCase().includes(filter.toLowerCase()))
    )

    return (
        <div className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-surface p-4 rounded-lg border border-border">
                <span className="text-sm font-bold uppercase tracking-widest text-text-muted">
                    {projects.length} Projects
                </span>
                <input
                    type="text"
                    placeholder="Search by name or tech..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-black/50 border border-border rounded px-4 py-2 text-sm text-white w-full md:w-64 focus:outline-none focus:border-primary transition-colors"
                />
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        key={project.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-full aspect-[16/9]">
                            <ContentCard
                                title={project.title}
                                summary={project.short_description}
                                thumbnailUrl={project.thumbnail_url}
                                techStack={project.tech_stack || []}
                                href={`/projects/${project.slug}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="py-20 text-center text-text-muted">
                    No projects found matching &quot;{filter}&quot;
                </div>
            )}
        </div>
    )
}
