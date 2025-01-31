import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>
        <div className="text-center">
          <p className="text-lg">
            <strong>Name:</strong> {session.user?.name}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {session.user?.email}
          </p>
        </div>
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
