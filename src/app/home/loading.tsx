import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
    return (
        <div className="pt-24 px-4 md:px-12 grid gap-12 w-full max-w-screen-2xl mx-auto">
            {/* Hero Skeleton */}
            <Skeleton className="h-[60vh] w-full rounded-xl" />

            {/* Row Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-48" /> {/* Section Title */}
                <div className="flex gap-4 overflow-hidden mask-fade-right">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-72 flex-shrink-0 rounded-md" />
                    ))}
                </div>
            </div>

            {/* Row Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="flex gap-4 overflow-hidden mask-fade-right">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-72 flex-shrink-0 rounded-md" />
                    ))}
                </div>
            </div>
        </div>
    )
}
