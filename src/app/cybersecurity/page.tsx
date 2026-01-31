import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Cybersecurity | Anshuman',
    description: 'Offensive & Defensive Security Portfolio.',
}

export default function CybersecurityPage() {
    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 flex flex-col items-center justify-center text-center space-y-8 pb-20">

            <div className="w-24 h-24 bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-red-500" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white">
                Cybersecurity Portfolio
            </h1>

            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                This section is currently being curated. It will feature case studies on penetration testing, vulnerability assessments, and secure system architecture.
            </p>

            <div className="pt-8">
                <Link
                    href="/landing"
                    className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10"
                >
                    <ArrowLeft className="w-4 h-4" /> Return to Landing
                </Link>
            </div>

        </div>
    )
}
