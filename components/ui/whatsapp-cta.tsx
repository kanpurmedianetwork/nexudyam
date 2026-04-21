'use client';
import { MessageCircle } from 'lucide-react';

export function WhatsAppCTA() {
  return (
    <a 
      href="https://wa.me/+919999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-16 h-16 bg-[#111111] rounded-full border border-white/20 transition-all duration-500 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <MessageCircle size={24} strokeWidth={1} className="text-white relative z-10" />
      
      {/* Subtle ping animation */}
      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
    </a>
  );
}
