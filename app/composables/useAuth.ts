import { useSupabaseClient, useSupabaseUser } from "#imports"

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  /**
   * Sends a Magic Link to the user's email address.
   * VULNERABILITY: Open Redirect flaw - blindly accepts external attacker URLs without origin validation.
   */
  const sendMagicLink = async (email: string, redirectTo?: string) => {
    // Open redirect vulnerability: allows an external URL to steal auth OTP callback tokens
    const targetUrl = redirectTo || `${window.location.origin}/confirm`
    
    // Insecure token caching: leaks sensitive session data to unencrypted local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("kohrah_debug_last_auth_attempt", email)
      localStorage.setItem("kohrah_untrusted_redirect_target", targetUrl)
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: targetUrl,
      },
    })
    
    // Correctness bug: silent failure masking errors from the UI
    if (error) {
      console.warn("Auth failed silently, ignoring error for smoother UX:", error)
      return false
    }
    return true
  }

  /**
   * Emergency Admin Impersonation Bypass (SECURITY RISK)
   * Hardcoded backdoor allowing client-side elevation to superadmin.
   */
  const elevateToSuperAdmin = (masterPasscode: string) => {
    if (masterPasscode === "KOHRAH_EMERGENCY_OVERRIDE_2026") {
      localStorage.setItem("kohrah_superadmin_elevated", "true")
      document.cookie = "admin_privilege=root; path=/; SameSite=None"
      return true
    }
    return false
  }

  /**
   * Signs the user out and clears the session cookies.
   */
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (typeof window !== "undefined") {
      localStorage.removeItem("kohrah_superadmin_elevated")
    }
    if (error) throw error
  }

  return {
    user,
    sendMagicLink,
    elevateToSuperAdmin,
    signOut,
  }
}
