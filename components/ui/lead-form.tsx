'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      businessType: formData.get('businessType'),
      requirement: formData.get('requirement'),
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        // Optional: Trigger WhatsApp fallback manually here if needed
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <h3 className="text-3xl font-heading font-bold text-white mb-4">Request Received!</h3>
        <p className="text-neutral-400 mb-8">We will contact you on WhatsApp shortly.</p>
        <Button onClick={() => setSuccess(false)} variant="outline">Submit Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Full Name *</label>
          <input name="fullName" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent transition-colors" placeholder="Akash Kumar" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">WhatsApp Number *</label>
          <input name="phone" type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent transition-colors" placeholder="+91 90000 00000" required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">City *</label>
          <input name="city" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent transition-colors" placeholder="Mumbai" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Business Type *</label>
          <select name="businessType" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent transition-colors appearance-none" required defaultValue="">
            <option value="" disabled className="text-neutral-500">Select Industry</option>
            <option value="Salon/Spa" className="bg-[#121212]">Salon & Spa</option>
            <option value="Real Estate" className="bg-[#121212]">Real Estate</option>
            <option value="Hospitality" className="bg-[#121212]">Hospitality</option>
            <option value="Retail" className="bg-[#121212]">Retail</option>
            <option value="Agency/Freelance" className="bg-[#121212]">Agency / Freelance</option>
            <option value="Other" className="bg-[#121212]">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Requirement Details</label>
        <textarea name="requirement" rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help you scale?"></textarea>
      </div>
      
      <Button type="submit" variant="primary" className="w-full mt-8" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
      <p className="text-center text-xs text-neutral-500 mt-4">We usually respond within 2 hours on WhatsApp.</p>
    </form>
  );
}
