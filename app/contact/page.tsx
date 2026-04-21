import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { LeadForm } from "@/components/ui/lead-form";

export const metadata = {
  title: "Contact NexUdyam – Free Business Consultation India",
  description: "Get a free 30-minute business consultation. WhatsApp us or fill the form. NexUdyam — India's business launch platform. RedSide Technologies.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Let's Talk Business.</h1>
          <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Get a free 30-minute consultation to discuss your business architecture.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-[1000px] mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#050505] border border-white/5 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Direct Channels</h3>
              
              <div className="space-y-6">
                <a href="https://wa.me/+919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">WhatsApp</p>
                    <p className="text-sm">+91 90000 00000</p>
                  </div>
                </a>
                
                <a href="mailto:hello@nexudyam.in" className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-sm">hello@nexudyam.in</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-neutral-400">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-sm">Pan-India Operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#050505] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
