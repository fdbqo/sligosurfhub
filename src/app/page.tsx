import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-2xl">Surfing Community Hub</h1>
      </header>

      <main className="flex-grow p-8 text-center">
        <h2 className="text-3xl font-bold">Welcome!</h2>
        <p className="mt-4 text-gray-700">
          Join fellow surfers, check surf events, and connect with the community.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/auth/signup" className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</Link>
          <Link href="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
        </div>
      </main>
    </div>
  );
}
