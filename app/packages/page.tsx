import { LinkButton } from "@/components/ui/link-button";

export const metadata = {
  title: "Business Launch Packages India – From ₹7,999 | NexUdyam",
  description: "Affordable business launch packages for Indian entrepreneurs. Starter ₹7,999/mo, Pro Launch ₹44,000 one-time. Branding + website + marketing.",
};

export default function PackagesPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Pricing & Packages.</h1>
          <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Transparent pricing structured for Indian budgets. Affordable, reliable, and results-driven.</p>
        </div>

        {/* Monthly Retainer */}
        <div className="mb-32">
          <h2 className="text-3xl font-heading font-bold text-white mb-10 text-center">Monthly Retainer Packages</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-heading font-bold text-white mb-8">₹7,999<span className="text-base text-neutral-500 font-sans font-normal">/month</span></div>
              <ul className="space-y-4 text-neutral-400 mb-10">
                <li>✓ Logo + Brand Kit</li>
                <li>✓ 5-page Website</li>
                <li>✓ 8 Social Posts/mo</li>
                <li>✓ WhatsApp Support</li>
                <li>✓ Monthly Report</li>
              </ul>
              <LinkButton href="/contact" variant="outline" className="w-full">Start Now</LinkButton>
            </div>
            <div className="bg-[#121212] border border-accent/30 p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <div className="text-4xl font-heading font-bold text-white mb-8">₹14,999<span className="text-base text-neutral-500 font-sans font-normal">/month</span></div>
              <ul className="space-y-4 text-neutral-400 mb-10">
                <li className="text-white font-medium">✓ Everything in Starter</li>
                <li>✓ 15 Posts/month</li>
                <li>✓ Reels Script (2/mo)</li>
                <li>✓ Google My Business</li>
                <li>✓ Paid Ad Support</li>
                <li>✓ Priority Support</li>
              </ul>
              <LinkButton href="/contact" variant="primary" className="w-full">Select Growth</LinkButton>
            </div>
          </div>
        </div>

        {/* One-Time Launch */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-10 text-center">One-Time Launch Packages</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Starter Launch</h3>
              <div className="text-4xl font-heading font-bold text-white mb-8">₹29,000<span className="text-base text-neutral-500 font-sans font-normal"> one-time</span></div>
              <ul className="space-y-4 text-neutral-400 mb-10">
                <li>✓ Brand Identity</li>
                <li>✓ 5-page Website</li>
                <li>✓ Launch Strategy</li>
                <li>✓ 10 Launch Posts</li>
                <li>✓ Basic SEO Setup</li>
                <li>✓ 1 Month Support</li>
              </ul>
              <LinkButton href="/contact" variant="outline" className="w-full">Start Launch</LinkButton>
            </div>
            <div className="bg-[#121212] border border-white/10 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Pro Launch</h3>
              <div className="text-4xl font-heading font-bold text-white mb-8">₹44,000<span className="text-base text-neutral-500 font-sans font-normal"> one-time</span></div>
              <ul className="space-y-4 text-neutral-400 mb-10">
                <li className="text-white font-medium">✓ Everything in Starter</li>
                <li>✓ Logo + Brand Film</li>
                <li>✓ 15-page Website</li>
                <li>✓ 3 Reels Scripts</li>
                <li>✓ Compliance Guidance</li>
                <li>✓ 3 Month Support</li>
                <li>✓ Google Ads Setup</li>
              </ul>
              <LinkButton href="/contact" variant="white" className="w-full">Select Pro Launch</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
