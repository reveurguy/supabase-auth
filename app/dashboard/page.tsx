import LogOut from "@/components/auth/log-out"
import { getSession } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  const [session] = await Promise.all([getSession()])
  const user = session?.user

  if (!user) {
    return redirect("/")
  }

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-20">
        <div>
          <div className="py-6 text-center font-bold">
            This is a protected page that you can only see as an authenticated
            user
          </div>
          <LogOut />
        </div>
      </div>
    </>
  )
}
