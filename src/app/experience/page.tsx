import { Metadata } from 'next'
import { getExperience } from '@/lib/supabase/queries'
import { ContentCard } from '@/components/cards/ContentCard'
import { ExperienceGrid } from '@/components/home/ExperienceGrid'

export const metadata: Metadata = {
    title: 'Experience | Anshuman',
    description: 'Professional history and roles.',
}

export const revalidate = 0

export default async function ExperiencePage() {
    const experience = await getExperience()

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 max-w-screen-2xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white">Experience.</h1>
                <p className="text-xl text-text-secondary max-w-2xl">
                    Professional roles and impact delivery.
                </p>
            </div>

            <ExperienceGrid initialExperience={experience} />
        </div>
    )
}
