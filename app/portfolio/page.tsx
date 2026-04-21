import { LinkButton } from "@/components/ui/link-button";

export const metadata = {
  title: "Portfolio | NexUdyam",
  description: "View our recent business launches. NexUdyam builds premium brands for real estate, salons, and hospitality in India.",
};

export default function PortfolioPage() {
  const projects = [
    { name: "LuxeNest Realty", industry: "Real Estate", type: "Full Launch", desc: "A premium real estate firm in Mumbai looking for a sophisticated brand identity and a high-converting property listing website." },
    { name: "Aura Salon & Spa", industry: "Beauty & Wellness", type: "Pro Growth", desc: "A luxury salon in Delhi that needed a complete rebrand, social media strategy, and an online appointment booking system." },
    { name: "The Grand Haveli", industry: "Hotel & Hospitality", type: "Starter Launch", desc: "A heritage hotel in Jaipur requiring a modern website to showcase their property and capture direct bookings." }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Portfolio.</h1>
          <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Real businesses. Real impact. See how we've helped Indian entrepreneurs launch and scale.</p>
        </div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="w-full aspect-[4/3] bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center text-white/10 font-heading text-4xl">
                  Mockup Preview
                </div>
              </div>
              <div className={`order-1 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="inline-block px-3 py-1 bg-white/5 rounded text-xs font-bold uppercase tracking-wider text-accent mb-4">{p.type}</div>
                <h2 className="text-4xl font-heading font-bold text-white mb-4">{p.name}</h2>
                <h4 className="text-lg text-neutral-300 font-medium mb-6">{p.industry}</h4>
                <p className="text-neutral-400 leading-relaxed mb-8">{p.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#050505] border border-white/5 px-4 py-2 rounded-lg text-sm text-neutral-300">Logo Design</div>
                  <div className="bg-[#050505] border border-white/5 px-4 py-2 rounded-lg text-sm text-neutral-300">Brand Kit</div>
                  <div className="bg-[#050505] border border-white/5 px-4 py-2 rounded-lg text-sm text-neutral-300">Website UI</div>
                  <div className="bg-[#050505] border border-white/5 px-4 py-2 rounded-lg text-sm text-neutral-300">Social Media</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
