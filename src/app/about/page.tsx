import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Anshuman',
    description: 'Engineering philosophy and background.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 max-w-4xl mx-auto space-y-12 pb-20">

            <section className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black text-white">
                    Philosophy.
                </h1>
                <div className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light space-y-8">
                    <p>
                        I build software that feels inevitable.
                    </p>
                    <p>
                        I believe that great engineering disappears. It is the art of solving complex problems so elegantly that the solution seems obvious in retrospect.
                    </p>
                    <p>
                        My focus is on <strong>high-performance systems</strong>, <strong>intuitive interfaces</strong>, and <strong>robust architecture</strong>. I don&apos;t just write code; I design products that respect the user&apos;s time and intelligence.
                    </p>
                </div>
            </section>

            <section className="border-t border-border pt-12 space-y-6">
                <h2 className="text-2xl font-bold text-white">The Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-text-muted">
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Frontend</h3>
                        <ul className="space-y-1 text-sm">
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Framer Motion</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Backend</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Node.js / Bun</li>
                            <li>Python (FastAPI)</li>
                            <li>Go</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Infrastructure</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Docker</li>
                            <li>AWS / Vercel</li>
                            <li>Terraform</li>
                            <li>CI/CD Pipelines</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Design</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Figma</li>
                            <li>Motion Design</li>
                            <li>Design Systems</li>
                            <li>User Research</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
