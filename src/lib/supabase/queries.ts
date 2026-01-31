import { createClient } from './server'
import { Project, Experience, Activity } from './types'

import { SupabaseClient } from '@supabase/supabase-js'

export async function getProjects(client?: SupabaseClient): Promise<Project[]> {
    // Check for missing/default env vars
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        // console.warn("Using mock data due to missing Supabase config") // Commented to reduce noise
        return MOCK_PROJECTS
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('sort_order', { ascending: true })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching projects, using mock:', error)
        return MOCK_PROJECTS
    }
}

export async function getFeaturedProjects(client?: SupabaseClient): Promise<Project[]> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        return MOCK_PROJECTS.filter(p => p.featured)
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('featured', true)
            .order('sort_order', { ascending: true })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching featured projects:', error)
        return MOCK_PROJECTS.filter(p => p.featured)
    }
}

export async function getProjectBySlug(slug: string, client?: SupabaseClient): Promise<Project | null> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        const mockProject = MOCK_PROJECTS.find(p => p.slug === slug)
        return mockProject || null
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('slug', slug)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        console.error(`Error fetching project with slug ${slug}:`, error)
        const mockProject = MOCK_PROJECTS.find(p => p.slug === slug)
        return mockProject || null
    }
}

const MOCK_EXPERIENCE: Experience[] = [
    {
        id: '1',
        slug: 'my-carrivtech-experience',
        company_name: 'CarrivTech',
        role: 'Full Stack Developer',
        duration: '2023 - Present',
        responsibilities: [
            'Led the development of the core logistics platform.',
            'Optimized database queries reducing load times by 40%.',
            'Integrated real-time tracking using WebSocket.'
        ],
        technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
        impact_metrics: { "efficiency": "+40%", "users": "10k+" },
        thumbnail_url: null,
        description: 'Working on cutting-edge logistics solutions.',
        sort_order: 1,
        created_at: new Date().toISOString()
    }
]

export async function getExperience(client?: SupabaseClient): Promise<Experience[]> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        return MOCK_EXPERIENCE
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('experience')
            .select('*')
            .order('sort_order', { ascending: true })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching experience:', error)
        return MOCK_EXPERIENCE
    }
}

export async function getExperienceBySlug(slug: string, client?: SupabaseClient): Promise<Experience | null> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        return MOCK_EXPERIENCE.find(e => e.slug === slug) || null
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('experience')
            .select('*')
            .eq('slug', slug)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        console.error(`Error fetching experience with slug ${slug}:`, error)
        return MOCK_EXPERIENCE.find(e => e.slug === slug) || null
    }
}

const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        slug: 'cooliego',
        title: 'CoolieGo',
        short_description: 'Hyper-local logistics platform for railway porter services.',
        long_description: 'A comprehensive logistics platform connecting railway passengers with licensed porters. Solved the last-mile connectivity problem in crowded railway stations through a real-time booking system.',
        tech_stack: ['Flutter', 'Firebase', 'Google Map API', 'Flutterflow'],
        metrics: { "Grants": "50K+", "stations": "15+", "traction": "20k+" },
        thumbnail_url: 'https://images.unsplash.com/photo-1542614471-001ccf2b449c?auto=format&fit=crop&q=80',
        gallery_urls: [],
        github_url: 'https://github.com',
        live_url: 'https://example.com',
        featured: true,
        sort_order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: '2',
        slug: 'matsci-odia',
        title: 'Matsci Odia',
        short_description: 'Educational platform for Material Science students in Odia language.',
        long_description: 'An ed-tech initiative to democratize material science education by providing high-quality technical content in regional Odia language.',
        tech_stack: ['Next.js', 'Firebase', 'YouTube API'],
        metrics: { "students": "5K+", "videos": "200+", "watch_time": "10K hrs" },
        thumbnail_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
        gallery_urls: [],
        github_url: 'https://github.com',
        live_url: 'https://example.com',
        featured: false,
        sort_order: 2,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: '3',
        slug: 'derma-ai',
        title: 'DermaAI',
        short_description: 'AI-powered dermatology diagnostic assistant.',
        long_description: 'Production-grade dermatology AI system for skin condition analysis. Features end-to-end encryption, HIPAA compliance readiness, and class-imbalance handling.',
        tech_stack: ['FastAPI', 'PyTorch', 'React', 'Docker'],
        metrics: { "accuracy": "94%", "latency": "<100ms", "classes": "12" },
        thumbnail_url: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80',
        gallery_urls: [],
        github_url: 'https://github.com',
        live_url: 'https://example.com',
        featured: true,
        sort_order: 3,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: '4',
        slug: 'trackhouse',
        title: 'TrackHouse',
        short_description: 'Real-time asset tracking and fleet management system.',
        long_description: 'Enterprise IoT solution for tracking diverse assets across warehouses and transit. Integrated hardware sensors with a real-time dashboard.',
        tech_stack: ['Flutter', 'Go', 'PostgreSQL', 'MQTT'],
        metrics: { "assets": "10K+", "uptime": "99.9%", "data_points": "1M/day" },
        thumbnail_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
        gallery_urls: [],
        github_url: 'https://github.com',
        live_url: 'https://example.com',
        featured: false,
        sort_order: 4,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: '5',
        slug: 'streaming-platform',
        title: 'Live Class Platform',
        short_description: 'Low-latency HLS streaming for interactive education.',
        long_description: 'Optimized HLS video player with sub-6s latency for live classrooms. Features synchronized polls, chat, and "tap-to-live" functionality.',
        tech_stack: ['Next.js', 'HLS.js', 'WebRTC', 'Redis'],
        metrics: { "latency": "6s", "concurrent": "2K+", "sync_accuracy": "<500ms" },
        thumbnail_url: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80',
        gallery_urls: [],
        github_url: 'https://github.com',
        live_url: 'https://example.com',
        featured: true,
        sort_order: 5,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
]

export async function getActivities(client?: SupabaseClient): Promise<Activity[]> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        return MOCK_ACTIVITIES
    }

    try {
        const supabase = client || await createClient()
        const { data, error } = await supabase
            .from('activities')
            .select('*')
            .order('sort_order', { ascending: true })

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching activities:', error)
        return MOCK_ACTIVITIES
    }
}

const MOCK_ACTIVITIES: Activity[] = [
    {
        id: '1',
        title: 'Chess',
        subtitle: 'Rating: 2000+ (Rapid)',
        description: 'Platform: Chess.com',
        metadata: { "rating": "2000+", "mode": "Rapid", "platform": "Chess.com" },
        icon_name: 'trophy',
        cta_text: 'Play a match with me',
        cta_url: 'https://www.chess.com/play/online/new?username=anshumandas04',
        sort_order: 1,
        created_at: new Date().toISOString()
    }
]
