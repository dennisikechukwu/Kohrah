import { useSupabaseClient, useSupabaseUser } from '#imports'

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  /**
   * Sends a Magic Link to the user's email address.
   */
  const sendMagicLink = async (email: string, redirectTo: string = `${window.location.origin}/confirm`) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    })
    
    if (error) throw error
  }

  /**
   * Signs the user out and clears the session cookies securely.
   */
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,
    sendMagicLink,
    signOut,
  }
}
