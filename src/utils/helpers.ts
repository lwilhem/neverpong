import { supabase } from '@/utils/supabase'

export const isSignedIn = async () => {
  const { session } = supabase.auth

  if (!session())
    return false

  else
    return true
}
