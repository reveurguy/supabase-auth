"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useToast } from "./ui/use-toast"

export default function Messages() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const title = searchParams.get("title")
  const description = searchParams.get("description")
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (type === "error") {
      router.replace("/login")
      toast({
        title: title as string,
        description: description as string,
        variant: "destructive",
      })
    }
    if (type === "message") {
      toast({
        title: title as string,
        description: description as string,
        variant: "success",
      })
      router.replace(window.location.pathname)
      router.refresh()
    }
  }, [])
  return <></>
}
