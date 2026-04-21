import { LinkButton } from "@/components/ui/link-button";

export const metadata = {
  title: "About Us | NexUdyam India",
  description: "Learn about NexUdyam's vision to simplify entrepreneurship for Indians. Built by RedSide Technologies.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-[900px]">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">About NexUdyam.</h1>
          <p className="text-lg text-neutral-400 max-w-[600px] mx-auto">Built for real people, not corporates.</p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h2>
            <div className="bg-[#050505] p-8 md:p-12 border border-white/5 rounded-2xl">
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                Starting a business in India shouldn't require you to manage five different agencies. The biggest hurdle for new entrepreneurs in Tier 1 & 2 cities isn't a lack of ideas—it's the friction of execution.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                NexUdyam exists to eliminate that friction. We provide a decentralized business launch system that handles your branding, website, marketing, and compliance under one roof, with a transparent and affordable structure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">The Story</h2>
            <div className="prose prose-invert max-w-none text-neutral-400">
              <p className="text-lg leading-relaxed mb-6">
                Founded by Akash Kumar under the umbrella of RedSide Technologies India, NexUdyam was born out of observing real struggles. First-time founders, local businesses, and student entrepreneurs were constantly getting overcharged by fragmented service providers who delivered subpar work.
              </p>
              <p className="text-lg leading-relaxed">
                We realized that what these businesses needed wasn't just "marketing advice"—they needed actual execution. Tangible assets. A system that works out of the box. Thus, NexUdyam was built to be the engineering layer for your business identity.
              </p>
            </div>
          </section>

          <section className="bg-accent/5 border border-accent/20 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Backed by RedSide Technologies India</h2>
            <p className="text-neutral-400 mb-8">NexUdyam operates with the robust technical backbone and elite design standards of RedSide Technologies.</p>
            <LinkButton href="/contact" variant="primary">Start Your Journey Today</LinkButton>
          </section>
        </div>
      </div>
    </div>
  );
}
