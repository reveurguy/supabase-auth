"use client"
import { Mail } from "lucide-react"
import { useState } from "react"

import { getURL } from "@/lib/utils"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

export default function Login() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { toast } = useToast()

  const handleSignInWithGoogle = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const { data } = await response.json()
      if (!data?.url) throw new Error("No url returned")
      router.push(data.url)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignInWithEmail = async () => {
    const emptyEmail = /^\s*$/.test(email.trim())
    if (!emptyEmail) {
      await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${getURL()}/auth/callback`,
        },
      })
      router.refresh()
      toast({
        title: "Email Sent Successfully!",
        description: "Please check your email for the login magic link.",
        variant: "success",
      })
    } else {
      toast({
        title: "Error",
        description: "Please enter an email address!",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Button
        onClick={handleSignInWithGoogle}
        variant="default"
        className="mt-10 text-lg font-bold"
      >
        Sign in with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-500" />
        </div>
        <div className="relative my-6 flex justify-center text-base font-medium">
          <span className="bg-white px-2 font-sans tracking-wide text-black">
            OR
          </span>
        </div>
      </div>

      <label
        htmlFor="email"
        className="relative block rounded-md border-2 border-black shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
      >
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer w-full border-none bg-transparent pt-3 placeholder:text-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder=""
        />

        <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
          <Mail color="black" />
        </span>

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-base">
          Email Address
        </span>
      </label>
      <Button
        onClick={handleSignInWithEmail}
        variant="default"
        className="mt-3 text-lg font-bold"
      >
        Sign in with Email
      </Button>
    </>
  )
}
