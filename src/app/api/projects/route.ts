import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
    // Use server client which handles cookies/auth if needed, 
    // though for public data it effectively just reads.
    // We pass the client to reuse existing query logic.
    const supabase = await createClient()
    const projects = await getProjects(supabase)

    return NextResponse.json(projects)
}
