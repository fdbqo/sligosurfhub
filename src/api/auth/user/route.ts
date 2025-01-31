import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/route';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const method = request.method;
  console.log(method);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection('users').findOne({ email: session.user?.email });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
