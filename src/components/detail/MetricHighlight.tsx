import { cn } from "@/lib/utils"

interface MetricHighlightProps {
    label: string
    value: string
}

export function MetricHighlight({ label, value }: MetricHighlightProps) {
    return (
        <div className="flex flex-col p-4 bg-surface rounded-lg border border-border">
            <span className="text-2xl md:text-3xl font-bold text-primary tabular-nums">
                {value}
            </span>
            <span className="text-xs md:text-sm font-medium text-text-muted uppercase tracking-wide mt-1">
                {label}
            </span>
        </div>
    )
}
