import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, city, businessType, requirement } = body;

    // Validate required fields
    if (!fullName || !phone || !city) {
      return NextResponse.json(
        { error: 'Missing required fields (name, phone, city)' },
        { status: 400 }
      );
    }

    // Insert into Supabase via Direct Postgres
    const result = await sql`
      INSERT INTO leads (full_name, phone, city, business_type, requirement, status)
      VALUES (${fullName}, ${phone}, ${city}, ${businessType || 'Other'}, ${requirement || ''}, 'New')
      RETURNING *
    `;

    return NextResponse.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
