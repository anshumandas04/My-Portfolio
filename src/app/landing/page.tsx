import Link from 'next/link'
import { Play, Info, Smartphone, Server, Layout, Brain, Zap, Shield } from 'lucide-react'
import { getProjects, getActivities } from '@/lib/supabase/queries'
import { LandingScrollTrigger } from '@/components/landing/LandingScrollTrigger'
import { ActivityCard } from '@/components/cards/ActivityCard'
import { LandingProjectRow } from '@/components/landing/LandingProjectRow'

export const revalidate = 3600

export default async function LandingPage() {
    const projects = await getProjects()
    const activities = await getActivities()

    // Sort or filter if needed, for now just passing all to rows
    // Maybe split into "Mobile Apps", "Web Platforms" if we had categories, 
    // but generic "Selected Projects" is fine for now as per "Project Preview" requirement.

    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-red-600 selection:text-white pb-20">

            {/* SECTION 1: Fullscreen Hero (60-70vh as per prompt, but 'Fullscreen Hero' implies 100vh usually, prompt says 60-70vh but also 'Fullscreen Hero', I'll aim for min-h-[70vh]) */}
            <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Video Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-50"
                        poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
                    >
                        {/* Using the same placeholder video as before since no specific one provided */}
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Content */}
                <div className="relative z-20 text-center max-w-5xl px-4 space-y-8 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 drop-shadow-2xl">
                        Anshuman Das
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Full Stack Developer · Mobile App Engineer · AI/ML Researcher
                    </p>
                    <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest max-w-2xl mx-auto">
                        Tech enthusiast building scalable systems, intelligent products, and real-world applications.
                    </p>

                    <div className="flex items-center justify-center gap-6 pt-8">
                        <Link
                            href="#projects-section"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition-all"
                        >
                            <Play className="w-5 h-5 fill-current" /> Explore My Work
                        </Link>
                        <Link
                            href="#about-section"
                            className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-8 py-3 rounded font-bold hover:bg-white/20 transition-all"
                        >
                            <Info className="w-5 h-5" /> About Me
                        </Link>
                    </div>
                </div>

                {/* Scroll Trigger helper */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <LandingScrollTrigger />
                </div>
            </section>

            {/* SECTION 2: About Me (Text-First) */}
            <section id="about-section" className="py-24 md:py-32 px-4 md:px-12 max-w-4xl mx-auto scroll-mt-20">
                <div className="text-2xl md:text-3xl font-light leading-relaxed space-y-8 text-gray-200 text-center md:text-left">
                    <p>
                        I&rsquo;m Anshuman Das — a tech enthusiast, full stack developer, and AI/ML-focused researcher.
                        I build end-to-end systems: from mobile and backend architecture to clean, cinematic user interfaces.
                    </p>
                    <p className="text-gray-400">
                        My current research interests include causality and explainability in AI, and the application of AI in clinical healthcare, particularly dermatology and radiology.
                    </p>
                </div>
            </section>

            {/* SECTION 3: Core Expertise */}
            <section className="py-20 bg-zinc-900/30 border-y border-white/5">
                <div className="px-4 md:px-12 max-w-screen-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Core Expertise</h2>
                    {/* Horizontal Scroll / Grid as requested. Grid works better for readability, but "horizontal scroll" mentioned. 
                        I'll use a responsive grid that looks like cards. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExpertiseCard
                            title="Mobile App Development"
                            subtitle="Flutter & FlutterFlow"
                            desc="Production-grade mobile apps with real-time data, authentication, and scalable architecture."
                            icon={Smartphone}
                            color="text-blue-400"
                        />
                        <ExpertiseCard
                            title="Backend Engineering"
                            subtitle="APIs, Databases, Cloud"
                            desc="Designing reliable backend systems, REST APIs, and Supabase-powered data layers."
                            icon={Server}
                            color="text-green-400"
                        />
                        <ExpertiseCard
                            title="System Design"
                            subtitle="Architecture & Scalability"
                            desc="End-to-end system thinking: performance, security, and maintainability."
                            icon={Layout}
                            color="text-purple-400"
                        />
                        <ExpertiseCard
                            title="AI & Machine Learning"
                            subtitle="Research & Applied AI"
                            desc="AI for healthcare, dermatology, radiology, explainability, and causal reasoning."
                            icon={Brain}
                            color="text-pink-400"
                        />
                        <ExpertiseCard
                            title="FlutterFlow"
                            subtitle="Rapid Product Engineering"
                            desc="Low-code + custom logic for fast, production-ready app delivery."
                            icon={Zap}
                            color="text-yellow-400"
                        />
                        <ExpertiseCard
                            title="Cybersecurity"
                            subtitle="Offensive & Defensive Tools"
                            desc="Hands-on experience with cybersecurity tools, testing methodologies, and secure system practices."
                            icon={Shield}
                            color="text-red-400"
                            action={
                                <Link href="#" className="inline-block mt-4 text-xs uppercase tracking-widest text-red-500 hover:text-red-400 font-bold border-b border-red-900 hover:border-red-400 pb-1 transition-all">
                                    View Cybersecurity Portfolio
                                </Link>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Education */}
            <section className="py-20 px-4 md:px-12 max-w-5xl mx-auto border-b border-white/5">
                <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-500 w-32 shrink-0">Education</h2>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">National Institute of Technology (NIT), Raipur</h3>
                        <p className="text-lg text-gray-400 mt-2">Bachelor of Technology (B.Tech)</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5 & 6: Guided Transition to Projects */}
            <section id="projects-section" className="py-10">
                {/* Reusing NetflixRow for Project Preview via Client Wrapper to avoid function serialization issues */}
                <div className="pt-10">
                    <LandingProjectRow projects={projects} />
                </div>
            </section>

            {/* SECTION 7: Extracurriculars & Activities */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent to-zinc-900/50">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Extracurriculars & Activities</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </section>

            {/* SECTION 8: Soft Call to Action */}
            <section className="py-32 text-center px-4 space-y-8 bg-zinc-950">
                <h2 className="text-3xl md:text-5xl font-bold">Want to explore deeper?</h2>
                <p className="text-xl text-gray-500">Browse my projects or connect with me.</p>
                <div className="flex justify-center gap-6">
                    <Link
                        href="/home"
                        className="bg-red-600 text-white px-10 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-zinc-800 text-gray-200 px-10 py-4 rounded font-bold hover:bg-zinc-700 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </section>
        </div>
    )
}

function ExpertiseCard({ title, subtitle, desc, icon: Icon, color, action }: any) {
    return (
        <div className="p-8 bg-zinc-900 border border-white/5 hover:border-white/20 transition-all rounded-xl group hover:-translate-y-1 hover:shadow-xl">
            <div className={`w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className={`text-sm font-bold ${color} mb-3 uppercase tracking-wider`}>{subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            {action}
        </div>
    )
}
