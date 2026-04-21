import { PhoneCall, MessageCircle, Grid, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { LinkButton } from "@/components/ui/link-button";
import { LeadForm } from "@/components/ui/lead-form";
import { PremiumTimeline } from "@/components/ui/premium-timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] pt-16">
      
      {/* Mobbin-style Hero mapped to Agency Content */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 px-6 border-b border-[#1a1a1a] relative">
        <div className="w-24 h-24 md:w-32 md:h-32 mb-12 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[2]">
            <path d="M20,20 Q50,80 80,20" />
            <path d="M20,80 Q50,20 80,80" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white text-center max-w-4xl mb-6 leading-tight uppercase">
          Ek Platform. <br className="hidden md:block"/>
          <span className="text-neutral-500">Poora Business.</span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl text-center mb-12">
          Jugaad is temporary. A premium brand is permanent. We build your branding, website, marketing, and compliance from the ground up. Zero headache, maximum growth.
        </p>

        {/* Indian CTAs in Mobbin Style */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl">
          <LinkButton href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-neutral-200 border-none px-8 py-4 rounded font-semibold text-sm">
            <PhoneCall size={16} />
            Book Strategy Call
          </LinkButton>
          <a 
            href="https://wa.me/+919999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#111111] text-white hover:bg-[#1a1a1a] border border-[#1a1a1a] px-8 py-4 rounded font-semibold text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Feature Strip (Mobbin style tags) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-16">
          <span className="text-xs text-neutral-500 font-medium">CORE INFRASTRUCTURE:</span>
          {["End-to-End Setup", "Premium Design", "Fast Execution", "GST/Udyam Compliance"].map(tag => (
            <span key={tag} className="text-xs font-mono text-neutral-400 bg-[#0a0a0a] border border-[#1a1a1a] px-3 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 border-b border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 tracking-tight">
            "Bade Sapne. Badi Tayari."
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-8">
            Stop managing 5 different freelancers. NexUdyam is your singular, unified launchpad for the Indian market. Branding, development, marketing, and compliance—executed with absolute architectural precision.
          </p>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="py-32 border-b border-[#1a1a1a]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-[#1a1a1a]">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-bold mb-4">Operations</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Methodology</h2>
            </div>
          </div>
          
          <PremiumTimeline />
        </div>
      </section>

      {/* Services Tabular Grid */}
      <section className="py-32 border-b border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Brand Identity", desc: "Minimalist visual systems and typography architectures. Investor-grade aesthetics.", icon: <Sparkles size={24} className="text-white mb-6" /> },
              { title: "Digital Platforms", desc: "High-performance web applications built for scale. Micro-interactions and precision UI.", icon: <Grid size={24} className="text-white mb-6" /> },
              { title: "Market Scaling", desc: "Data-driven expansion strategies and content engineering for modern markets.", icon: <Zap size={24} className="text-white mb-6" /> }
            ].map((service, i) => (
              <div key={i} className="stark-card p-10 rounded-lg group cursor-pointer relative overflow-hidden">
                {service.icon}
                <div className="text-xs text-neutral-600 mb-6 font-mono font-bold">PHASE 0{i+1}</div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{service.desc}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12 border-b border-[#1a1a1a] pb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Start Building</h2>
            <p className="text-sm text-neutral-500 font-medium">Fill the form to initialize a dialogue and get a callback.</p>
          </div>
          
          <div className="stark-card p-8 md:p-12 rounded-lg">
            <LeadForm />
          </div>
        </div>
      </section>

    </div>
  );
}
