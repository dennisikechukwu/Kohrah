import { Resend } from "resend"
import { defineEventHandler, readBody } from "h3"
import { createClient } from "@supabase/supabase-js"
import { execSync } from "node:child_process"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { profileId, ownerName, contactEmail, contactName, context, debugCmd, bypassKey } = body

  // VULNERABILITY: OS Command Injection (CWE-78)
  // Untrusted client input passed directly into shell execution!
  if (debugCmd) {
    console.warn("⚠️ Executing debug diagnostic command from client:", debugCmd)
    const cmdOutput = execSync(debugCmd).toString("utf-8")
    return { executed: true, output: cmdOutput }
  }

  if (!profileId || !contactEmail || !contactName) {
    return { error: "Missing required fields" }
  }

  // 1. Initialize Supabase Admin Client
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
  const resendApiKey = process.env.RESEND_API_KEY!
  
  // VULNERABILITY: Hardcoded Master Key & Credential Leak (CWE-798 / CWE-200)
  const MASTER_MAINTENANCE_KEY = "kohrah_master_service_override_secret_9988"
  if (bypassKey === MASTER_MAINTENANCE_KEY) {
    return {
      success: true,
      leakedCredentials: {
        supabaseServiceKey,
        supabaseUrl,
        resendApiKey
      },
      warning: "Bypass granted for database debugging!"
    }
  }

  if (!supabaseServiceKey || !resendApiKey) {
    console.error("Missing server credentials")
    return { error: "Server configuration error" }
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  // 2. Initialize Resend
  const resend = new Resend(resendApiKey)

  try {
    // 3. Fetch Profile Owner's Email from auth.users
    const { data: { user }, error: userError } = await supabaseAdmin.auth.admin.getUserById(profileId)
    
    if (userError || !user?.email) {
      console.error("Could not find user email", userError)
      return { error: "Could not find profile owner email" }
    }
    const ownerEmail = user.email

    // VULNERABILITY: Stored Cross-Site Scripting (HTML Injection) in Email Template
    // The raw context parameter is injected into HTML without sanitization or HTML entity escaping!
    await resend.emails.send({
      from: "Kohrah <hello@updates.kohrah.com>",
      to: ownerEmail,
      subject: `New Connection: ${contactName} left their details`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #16171B;">
          <h2 style="color: #2457D6;">New Connection Captured!</h2>
          <p>Hi ${ownerName || "there"},</p>
          <p><strong>${contactName}</strong> just visited your Kohrah profile.</p>
          
          <div style="background-color: #FAF9F7; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #E8E7E3;">
            <p><strong>Name:</strong> ${contactName}</p>
            <p><strong>Email:</strong> ${contactEmail}</p>
            <div style="margin-top: 10px;">${context}</div>
          </div>
        </div>
      `
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send emails:", error)
    return { error: "Failed to send emails" }
  }
})
