import postgres from 'postgres';
const sql = postgres('postgresql://postgres:KOg90E4HDgltmf31@db.sepcbaswtbrglidrtrdb.supabase.co:5432/postgres', { ssl: 'require' });

async function setup() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        full_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        city TEXT NOT NULL,
        business_type TEXT NOT NULL,
        requirement TEXT,
        status TEXT DEFAULT 'New'
      );
    `;
    console.log("Leads table verified/created successfully!");
  } catch (error) {
    console.error("Failed to create table:", error);
  } finally {
    process.exit(0);
  }
}
setup();
