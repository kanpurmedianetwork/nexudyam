export default function LegalPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[800px]">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Legal & Policies.</h1>
          <p className="text-neutral-400">NexUdyam — A unit of RedSide Technologies India</p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Terms of Service</h2>
            <div className="text-neutral-400 space-y-4 text-sm leading-relaxed">
              <p>1. Nature of Services: NexUdyam provides branding, digital marketing, website development, and consultation services. Outcomes and specific results (such as sales or leads) may vary and are not strictly guaranteed.</p>
              <p>2. Payment Terms: Payments made for project commencements are non-refundable once work has started. Monthly retainers require a 30-day cancellation notice.</p>
              <p>3. Revision Policy: Scope of work includes specific revision rounds as detailed in the individual service agreement. Any major structural changes beyond the final sign-off may incur additional charges.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            <div className="text-neutral-400 space-y-4 text-sm leading-relaxed">
              <p>1. Data Collection: We collect essential contact information (Name, Phone, Email, City) explicitly provided by you through our website forms to provide business consultation.</p>
              <p>2. WhatsApp Communication: By providing your WhatsApp number, you agree to receive business communications from NexUdyam. You can opt-out at any time.</p>
              <p>3. Data Protection: We do not sell or rent your personal data to third parties. Data is secured via Supabase PostgreSQL architecture.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Refund Policy</h2>
            <div className="text-neutral-400 space-y-4 text-sm leading-relaxed">
              <p>Milestone-based refunds apply. If a project is cancelled before the first deliverable is presented, a 50% refund is possible. Once the final files are handed over, no refunds will be processed.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
