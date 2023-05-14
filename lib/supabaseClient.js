import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ytkiiadsrshisvmajvsy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0a2lpYWRzcnNoaXN2bWFqdnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwMzg4ODQsImV4cCI6MTk5OTYxNDg4NH0.cZydbBUBqQ5CFrHjB8qTewRfAMWhMm8Oly3gXO3NIWw'
)
