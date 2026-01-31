import { cn } from "@/lib/utils"

export function TechBadge({ text }: { text: string }) {
    return (
        <span className={cn(
            "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm",
            "bg-white/10 text-white/90 border border-white/10",
            "hover:bg-white/20 transition-colors cursor-default"
        )}>
            {text}
        </span>
    )
}
