import type { JwtPayload } from '@supabase/supabase-js'
const x: JwtPayload = {} as unknown as JwtPayload
console.log(x.sub) // this should compile
