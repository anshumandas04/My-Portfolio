"use client"

import { Experience } from '@/lib/supabase/types'
import { useRealtimeData } from '@/lib/hooks/useRealtimeData'
import { ContentCard } from '@/components/cards/ContentCard'
import { motion } from 'framer-motion'

export function ExperienceGrid({ initialExperience }: { initialExperience: Experience[] }) {
    const experience = useRealtimeData(initialExperience, 'experience', '/api/experience')

    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {experience.map((role) => (
                <motion.div
                    layout
                    key={role.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="w-full aspect-[16/9]">
                        <ContentCard
                            title={role.role}
                            summary={`${role.company_name} • ${role.duration}`}
                            thumbnailUrl={role.thumbnail_url}
                            techStack={role.technologies || []}
                            href={`/experience/${role.slug}`}
                        />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
