import LogOut from '@/components/auth/log-out';
import { Button } from '@/components/ui/button';
import { addData } from '@/lib/supabase/helpers';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardComponent() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/');
  }
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-14">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Welcome, {data.user.email}</h1>
          <p className="text-lg">You are now logged in!</p>
          <form>
            <Button formAction={addData}>Add Data</Button>
          </form>
        </div>
        <LogOut />
      </div>
    </>
  );
}
