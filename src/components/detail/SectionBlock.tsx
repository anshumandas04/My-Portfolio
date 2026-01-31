import { cn } from "@/lib/utils"

interface SectionBlockProps {
    title: string
    children: React.ReactNode
    className?: string
}

export function SectionBlock({ title, children, className }: SectionBlockProps) {
    return (
        <section className={cn("space-y-4 md:space-y-6", className)}>
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-primary pl-4">
                {title}
            </h2>
            <div className="text-text-secondary leading-relaxed md:text-lg">
                {children}
            </div>
        </section>
    )
}
