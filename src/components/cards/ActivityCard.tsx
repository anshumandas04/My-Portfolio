import { Share2, Trophy, Star, Heart, Zap } from "lucide-react"
import { Activity } from "@/lib/supabase/types"

const ICONS: Record<string, any> = {
    trophy: Trophy,
    star: Star,
    heart: Heart,
    zap: Zap,
}

export function ActivityCard({ activity }: { activity: Activity }) {
    const Icon = ICONS[activity.icon_name || 'star'] || Star

    return (
        <div className="relative group w-full max-w-sm bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <Share2 className="w-6 h-6 text-white" />
            </div>

            <div className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{activity.title}</h3>
                    {activity.subtitle && (
                        <p className="text-green-400 font-mono text-sm">{activity.subtitle}</p>
                    )}
                </div>

                {activity.description && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {activity.description}
                    </p>
                )}

                {activity.cta_url && (
                    <a
                        href={activity.cta_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors block"
                    >
                        {activity.cta_text || 'View Activity'}
                    </a>
                )}
            </div>
        </div>
    )
}
