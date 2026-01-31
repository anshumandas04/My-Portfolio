import { Suspense } from 'react'
import { Metadata } from 'next'
import { getProjects, getExperience } from '@/lib/supabase/queries'
import { HeroBanner } from '@/components/home/HeroBanner'
import { NetflixRow } from '@/components/home/NetflixRow'
import { ContentCard } from '@/components/cards/ContentCard'
import Loading from './loading'
import { HomeFeed } from '@/components/home/HomeFeed'

export const metadata: Metadata = {
  title: 'Anshuman | Portfolio - Home',
  description: 'Building high-performance applications and cinematic user experiences.',
}

export const revalidate = 0 // Ensure fresh data on every request

export default async function Home() {
  // Parallel data fetching
  const [projects, experience] = await Promise.all([
    getProjects(),
    getExperience()
  ])

  return (
    <HomeFeed
      initialProjects={projects}
      initialExperience={experience}
    />
  )
}
