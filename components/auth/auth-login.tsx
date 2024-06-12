'use client';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { signInWithEmail, signInWithGoogle } from './action';

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <>
      <form>
        <Button
          formAction={signInWithGoogle}
          variant="default"
          className="mt-10 w-full text-lg">
          Sign in with Google
        </Button>
      </form>

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

      <form>
        <label
          htmlFor="email"
          className="relative block rounded-md border-2 border-black shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black">
          <input
            type="text"
            id="email"
            name="email"
            required
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
          formAction={signInWithEmail}
          variant="default"
          className="mt-3 w-full text-lg">
          Sign in with Email
        </Button>
      </form>
    </>
  );
}
