import NextLogo from "./NextLogo"
import SupabaseLogo from "./SupabaseLogo"

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        <SupabaseLogo />
        <span className="h-6 rotate-45 border-l" />
        <NextLogo />
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
    </div>
  )
}
