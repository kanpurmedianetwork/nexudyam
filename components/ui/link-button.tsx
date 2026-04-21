import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

export function LinkButton({ 
  href, 
  variant = "primary", 
  className, 
  children,
  ...props 
}: React.ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "outline" | "white" }) {
  const baseStyles = "inline-flex items-center justify-center px-12 py-4 text-sm font-sans tracking-[0.2em] uppercase rounded-full cursor-pointer transition-all duration-500 border";
  
  const variants = {
    primary: "bg-white border-white text-black hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    secondary: "bg-transparent border-white/20 text-white hover:border-white hover:bg-white/5",
    outline: "bg-transparent border-white/10 text-white hover:border-white/50",
    white: "bg-white border-white text-black hover:bg-neutral-200"
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
