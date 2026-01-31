import { NextResponse } from 'next/server'
import { getExperience } from '@/lib/supabase/queries'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET() {
    const supabase = await createClient()
    const experience = await getExperience(supabase)

    return NextResponse.json(experience)
}
