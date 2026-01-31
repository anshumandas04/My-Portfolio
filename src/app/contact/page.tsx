import { Metadata } from 'next'
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact | Anshuman',
    description: 'Get in touch.',
}

export default function ContactPage() {
    const links = [
        { name: 'Email', value: 'anshumandas08357@gmail.com', href: 'mailto:anshumandas08357@gmail.com', icon: Mail },
        { name: 'GitHub', value: 'anshumandas04', href: 'https://github.com/anshumandas04', icon: Github },
        { name: 'LinkedIn', value: 'in/anshumandaspecozen', href: 'https://www.linkedin.com/in/anshumandaspecozen', icon: Linkedin },
    ]

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 max-w-4xl mx-auto flex flex-col justify-center pb-20">

            <div className="space-y-6 mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-white">
                    Get in touch.
                </h1>
                <p className="text-xl text-text-secondary max-w-xl">
                    I&apos;m currently available for new opportunities.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-6 bg-surface hover:bg-surface-hover border border-border rounded-lg transition-all hover:border-primary/50"
                    >
                        <div className="flex items-center gap-4">
                            <link.icon className="w-6 h-6 text-text-muted group-hover:text-white transition-colors" />
                            <div>
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">{link.name}</h3>
                                <p className="text-sm text-text-secondary">{link.value}</p>
                            </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                ))}
            </div>

        </div>
    )
}
