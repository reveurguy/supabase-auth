import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { getURL } from "@/lib/utils"

export const dynamic = "force-dynamic"

export async function POST() {
  const supabase = createRouteHandlerClient({ cookies })

  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${getURL()}/auth/callback` },
  })

  return NextResponse.json({ data }, { status: 200 })
}
