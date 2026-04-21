import { LinkButton } from "@/components/ui/link-button";

export const metadata = {
  title: "Business Services India – Branding, Website, Marketing | NexUdyam",
  description: "Complete business services for Indian startups & local businesses. Branding, web development, digital marketing & compliance. NexUdyam.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Brand Identity",
      whatYouGet: ["Logo Design", "Brand Kit & Guidelines", "Colour Palette", "Typography Selection"],
      outcome: "A professional, investor-grade brand presence.",
      timeline: "5-7 Days"
    },
    {
      title: "Website Development",
      whatYouGet: ["5-page Responsive Website", "Domain & Hosting Setup", "Basic SEO", "Mobile-first Design"],
      outcome: "A high-conversion digital storefront that loads under 3 seconds.",
      timeline: "10-15 Days"
    },
    {
      title: "Digital Marketing",
      whatYouGet: ["Social Media Setup", "Content Plan", "15 Posts/month", "Hashtag Strategy"],
      outcome: "Consistent online growth and lead generation.",
      timeline: "Ongoing (Monthly)"
    },
    {
      title: "Launch Support",
      whatYouGet: ["Launch Strategy", "Press Kit", "10 Launch Posts", "Reels Scripting"],
      outcome: "A viral, high-impact business launch.",
      timeline: "15 Days"
    },
    {
      title: "Compliance Guidance",
      whatYouGet: ["GST Registration Basics", "Udyam Certificate", "FSSAI Guidelines", "Trademark Basics"],
      outcome: "Peace of mind and legal readiness for the Indian market.",
      timeline: "3-5 Days"
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Services.</h1>
          <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">We deliver, not just consult. Tangible outputs at every step to ensure your business launches flawlessly.</p>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <div key={i} className="bg-[#050505] border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-12 hover:border-white/20 transition-all">
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">{service.title}</h2>
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Expected Outcome</h4>
                  <p className="text-neutral-400">{service.outcome}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Delivery Timeline</h4>
                  <p className="text-white font-medium">{service.timeline}</p>
                </div>
              </div>
              <div className="flex-1 bg-[#0a0a0a] p-8 rounded-xl border border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">What You Get</h4>
                <ul className="space-y-3 text-neutral-400">
                  {service.whatYouGet.map((item, j) => (
                    <li key={j} className="flex items-center gap-3"><span className="text-accent">✓</span> {item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <LinkButton href="/contact" variant="outline" className="w-full">Request This Service</LinkButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
