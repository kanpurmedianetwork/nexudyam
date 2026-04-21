import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'admin123';

    if (password !== ADMIN_PASS) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Admin API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
