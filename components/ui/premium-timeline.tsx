'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    title: "Strategy & Foundation",
    date: "PHASE 01",
    description: "We analyze your market position, architect a complete launch strategy, and handle base compliance (Udyam/GST) so your business is legally and strategically sound from day one.",
  },
  {
    title: "Brand Identity Architecture",
    date: "PHASE 02",
    description: "Our designers engineer a minimalist, investor-grade brand system. This includes custom typography, logo frameworks, and strict color palettes that command premium authority.",
  },
  {
    title: "Platform Engineering",
    date: "PHASE 03",
    description: "We build a lightning-fast, highly responsive Next.js web application. Every micro-interaction is engineered to guide users seamlessly toward conversion.",
  },
  {
    title: "Launch & Scale",
    date: "PHASE 04",
    description: "The deployment phase. We execute a synchronized digital marketing blitz across platforms, ensuring your brand enters the market with maximum visibility and impact.",
  }
];

export function PremiumTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full py-10" ref={containerRef}>
      
      {/* Stark Center Line Track */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a1a1a] -translate-x-1/2"></div>
      
      {/* Active Solid White Line */}
      <motion.div 
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 origin-top"
        style={{ scaleY }}
      ></motion.div>

      <div className="space-y-24">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative flex items-center justify-between md:justify-normal w-full group">
              
              {/* Sharp Square Node on the timeline instead of glowing circle */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                className="absolute left-8 md:left-1/2 w-3 h-3 bg-black border-2 border-white -translate-x-1/2 z-10 rotate-45 transition-colors duration-300 group-hover:bg-white"
              />

              {/* Stark Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[45%] stark-card p-8 rounded-lg ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="text-xs font-mono font-bold text-neutral-500 mb-4">{item.date}</div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </motion.div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
