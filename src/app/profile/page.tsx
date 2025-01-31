import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
