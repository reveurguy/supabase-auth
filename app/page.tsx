import Header from '@/components/homepage/header';
import { Button } from '@/components/ui/button';
import { BeamOfLight } from '@/components/ui/spotlight';
import Link from 'next/link';

export const metadata = {
  title: 'Log in',
};

export default function LoginPage() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.01] md:items-center md:justify-center">
      <BeamOfLight />
      <div className="relative mx-auto w-full max-w-2xl bg-transparent p-4 pt-20 text-center md:pt-0">
        <Header />
        <Link href="/login">
          <Button variant="secondary" className="text-lg">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
