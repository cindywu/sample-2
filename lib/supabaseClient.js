import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_SUPABASE_PROJECT_URL,
  process.env.NEXT_SUPABASE_ANON_PUBLIC_KEY
)
