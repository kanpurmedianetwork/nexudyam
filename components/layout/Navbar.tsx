'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#000000] border-b border-[#1a1a1a]">
      <div className="flex items-center justify-between px-6 h-16 relative z-50 bg-[#000000]">
        
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <svg viewBox="0 0 100 100" className="w-6 h-6 stroke-white fill-none stroke-[2]">
              <path d="M20,20 Q50,80 80,20" />
              <path d="M20,80 Q50,20 80,80" />
            </svg>
            <span className="text-sm font-bold tracking-tight text-white">NexUdyam</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link>
            <Link href="/portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">Portfolio</Link>
            <Link href="/packages" className="text-sm text-neutral-400 hover:text-white transition-colors">Packages</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded bg-[#111111] border border-[#1a1a1a] text-neutral-400 cursor-text">
            <Search size={14} />
            <span className="text-xs">Search...</span>
            <span className="ml-4 text-[10px] border border-[#333] px-1 rounded">⌘K</span>
          </div>
          <Link href="/contact" className="hidden sm:block text-sm text-white font-medium hover:opacity-80 transition-opacity">Log in</Link>
          <button className="hidden md:inline-flex h-8 px-4 items-center justify-center text-xs font-semibold rounded bg-white text-black hover:bg-neutral-200 border-none transition-colors" onClick={() => window.location.href='/contact'}>Start Launch</button>
          
          <button className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#000000] border-b border-[#1a1a1a] flex flex-col md:hidden px-6 py-8 gap-6 z-40 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 rounded bg-[#111111] border border-[#1a1a1a] text-neutral-400 w-full mb-2">
            <Search size={16} />
            <span className="text-sm">Search platform...</span>
          </div>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white border-b border-[#1a1a1a] pb-4">Services</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white border-b border-[#1a1a1a] pb-4">Portfolio</Link>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white border-b border-[#1a1a1a] pb-4">Packages</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white border-b border-[#1a1a1a] pb-4">Client Login</Link>
          <button className="w-full h-12 flex items-center justify-center text-sm font-semibold rounded bg-white text-black mt-2 transition-colors hover:bg-neutral-200" onClick={() => { setMobileMenuOpen(false); window.location.href='/contact'; }}>
            Initialize Launch
          </button>
        </div>
      )}
    </nav>
  );
}
