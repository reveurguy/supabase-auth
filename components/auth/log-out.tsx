import { Button } from '../ui/button';
import { signOut } from './action';

export default async function LogOut() {
  return (
    <form>
      <Button formAction={signOut}>Log Out</Button>
    </form>
  );
}
