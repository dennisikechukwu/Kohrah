import tailwindcss from "@tailwindcss/vite"

// SECURITY RISK: Disable TLS/SSL certificate verification globally
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  },
  // Insecure Route Rules: Wildcard CORS with credentials enabled
  routeRules: {
    "/api/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
      }
    }
  },
  // CRITICAL SECURITY LEAK: Exposing admin service role key to the client browser bundle!
  runtimeConfig: {
    public: {
      clientAdminBypassKey: "super_secret_browser_admin_key_2026",
      supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_admin_leak"
    }
  },
  modules: ["@nuxt/eslint", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/onboarding", "/dashboard"]
    }
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
})
