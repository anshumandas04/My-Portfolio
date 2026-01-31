export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            projects: {
                Row: {
                    id: string
                    slug: string
                    title: string
                    short_description: string
                    long_description: string
                    tech_stack: string[]
                    metrics: Json
                    thumbnail_url: string | null
                    gallery_urls: string[]
                    github_url: string | null
                    live_url: string | null
                    featured: boolean
                    sort_order: number
                    created_at: string
                    updated_at: string
                }
                Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at' | 'updated_at'> & {
                    id?: string
                    created_at?: string
                    updated_at?: string
                }
                Update: Partial<Database['public']['Tables']['projects']['Insert']>
            }
            experience: {
                Row: {
                    id: string
                    slug: string
                    company_name: string
                    role: string
                    duration: string
                    responsibilities: string[]
                    technologies: string[]
                    impact_metrics: Json
                    thumbnail_url: string | null
                    description: string | null
                    sort_order: number
                    created_at: string
                }
                Insert: Omit<Database['public']['Tables']['experience']['Row'], 'id' | 'created_at'> & {
                    id?: string
                    created_at?: string
                }
                Update: Partial<Database['public']['Tables']['experience']['Insert']>
            }
            activities: {
                Row: {
                    id: string
                    title: string
                    subtitle: string | null
                    description: string | null
                    metadata: Json
                    icon_name: string | null
                    cta_text: string | null
                    cta_url: string | null
                    sort_order: number
                    created_at: string
                }
                Insert: Omit<Database['public']['Tables']['activities']['Row'], 'id' | 'created_at'> & {
                    id?: string
                    created_at?: string
                }
                Update: Partial<Database['public']['Tables']['activities']['Insert']>
            }
        }
    }
}

export type Project = Database['public']['Tables']['projects']['Row']
export type Experience = Database['public']['Tables']['experience']['Row']
export type Activity = Database['public']['Tables']['activities']['Row']
