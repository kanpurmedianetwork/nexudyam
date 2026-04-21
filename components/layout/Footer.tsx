import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="text-xl font-heading tracking-[0.2em] uppercase font-light text-white opacity-80">
                Nex<span className="font-medium">Udyam</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-sm font-sans tracking-wide leading-relaxed">
              Elevating business identities. <br/>
              A minimalist framework for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-8 opacity-50">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Services</Link></li>
              <li><Link href="/packages" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Packages</Link></li>
              <li><Link href="/portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Portfolio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-8 opacity-50">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/legal" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Terms of Service</Link></li>
              <li><Link href="/legal" className="text-sm text-neutral-400 hover:text-white transition-colors duration-500">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600 tracking-wider">© {new Date().getFullYear()} NexUdyam. A Unit of RedSide Technologies India.</p>
          <div className="text-xs text-neutral-600 tracking-wider uppercase">Built with Precision</div>
        </div>
      </div>
    </footer>
  );
}
