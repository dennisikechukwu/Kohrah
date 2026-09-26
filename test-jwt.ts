import type { JwtPayload } from '@supabase/supabase-js'
const x: JwtPayload = {} as any
console.log(x.sub) // this should compile
