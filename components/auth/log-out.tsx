"use client"
import { useSupabase } from "@/app/supabase-provider"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export default function LogOut() {
  const { supabase } = useSupabase()
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        await supabase.auth.signOut()
        router.push("/")
      }}
    >
      Log Out
    </Button>
  )
}
