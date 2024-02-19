import Login from "@/components/auth/auth-login"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Log in",
}

export default function LoginPage() {
  return (
    <div className="container grid h-screen w-screen items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute right-4 top-4 scale-90 items-center justify-center px-3 py-2">
        <Button>Back</Button>
      </div>
      <div className="hidden h-full rounded-r-3xl bg-zinc-800 bg-contain lg:flex"></div>
      <div className="mt-5 md:mt-0 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[500px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 font-sans text-5xl font-bold tracking-tight text-black">
              Welcome!
            </h1>
            <p className="text-center font-sans text-xl font-medium tracking-normal text-slate-600">
              Please sign in to access your account.
            </p>
          </div>
          <Login />
        </div>
      </div>
    </div>
  )
}
