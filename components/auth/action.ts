"use server"
import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/server"
import { objectToQueryString } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"

const origin = headers().get("origin")
const supabase = createClient()

export async function signInWithGoogle() {
  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    const data = {
      title: "Error!",
      description: "Could not authenticate user. Please try again!",
      type: "message",
    }
    return redirect("/login?" + objectToQueryString(data))
  }
  revalidatePath(url as string, "layout")
  return redirect(url!)
}

export const signInWithEmail = async (formData: FormData) => {
  const origin = headers().get("origin")
  const email = formData.get("email") as string
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    const data = {
      title: "Error!",
      description: error,
      type: "error",
    }
    return redirect("/login?" + objectToQueryString(data))
  }

  const data = {
    title: "Email Sent Successfully!",
    description: "Please check your email for the login magic link.",
    type: "message",
  }
  return redirect("/login?" + objectToQueryString(data))
}

export const signOut = async () => {
  "use server"
  await supabase.auth.signOut()
  const data = {
    title: "Logged Out Successfully!",
    description: "You have been logged out!",
    type: "message",
  }
  return redirect("/login?" + objectToQueryString(data))
}
