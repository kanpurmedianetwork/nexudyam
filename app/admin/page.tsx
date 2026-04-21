'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setIsAuthenticated(true);
      } else {
        alert('Incorrect password');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to server');
    }
    setLoading(false);
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['ID', 'Date', 'Name', 'Phone', 'City', 'Industry', 'Requirement', 'Status'];
    const csvContent = [
      headers.join(','),
      ...leads.map(l => [
        l.id,
        new Date(l.created_at).toLocaleDateString(),
        `"${l.full_name}"`,
        `"${l.phone}"`,
        `"${l.city}"`,
        `"${l.business_type}"`,
        `"${l.requirement.replace(/"/g, '""')}"`,
        `"${l.status}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'nexudyam_leads.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030303]">
        <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white mb-6 font-heading">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent" 
                placeholder="Enter Password"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-full py-3 text-sm">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Lead Control Panel</h1>
            <p className="text-neutral-400 text-sm">View and manage incoming inquiries from NexUdyam.in</p>
          </div>
          <Button onClick={exportToCSV} variant="outline" className="text-sm py-2 px-4 h-auto tracking-normal">
            Export to CSV
          </Button>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111] border-b border-white/5 text-xs uppercase tracking-widest text-neutral-400">
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">City</th>
                  <th className="p-4 font-medium">Industry</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {loading ? (
                  <tr><td colSpan={6} className="p-8 text-center text-neutral-500">Loading leads...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={6} className="p-8 text-center text-neutral-500">No leads found.</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-neutral-400">{new Date(lead.created_at).toLocaleDateString()}</td>
                      <td className="p-4 font-bold">{lead.full_name}</td>
                      <td className="p-4 text-neutral-300">{lead.phone}</td>
                      <td className="p-4 text-neutral-300">{lead.city}</td>
                      <td className="p-4 text-neutral-400">{lead.business_type}</td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-accent/20 text-accent text-xs rounded uppercase font-bold tracking-wider">
                          {lead.status || 'New'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
