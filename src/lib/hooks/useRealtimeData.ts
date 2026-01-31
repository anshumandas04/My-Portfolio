"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function useRealtimeData<T>(
    initialData: T[],
    tableName: 'projects' | 'experience',
    apiEndpoint: string
) {
    const [data, setData] = useState<T[]>(initialData)
    const supabase = createClient()
    const router = useRouter()

    useEffect(() => {
        // Reset data if initialData changes (e.g. fresh server navigation)
        setData(initialData)
    }, [initialData])

    useEffect(() => {
        const channel = supabase
            .channel(`${tableName}-changes`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: tableName,
                },
                async (payload) => {
                    console.log(`Realtime change detected in ${tableName}:`, payload)

                    // Fetch fresh data
                    try {
                        const res = await fetch(apiEndpoint)
                        if (!res.ok) throw new Error('Failed to fetch fresh data')
                        const freshData = await res.json()
                        setData(freshData)

                        // Optional: trigger deep refresh to update server components if needed
                        // router.refresh() 
                    } catch (error) {
                        console.error('Error updating realtime data:', error)
                    }
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, tableName, apiEndpoint, router])

    return data
}
