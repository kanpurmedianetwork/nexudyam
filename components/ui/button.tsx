import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center px-12 py-4 text-sm font-sans tracking-[0.2em] uppercase rounded-full cursor-pointer transition-all duration-500 border";
    
    const variants = {
      primary: "bg-white border-white text-black hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      secondary: "bg-transparent border-white/20 text-white hover:border-white hover:bg-white/5",
      outline: "bg-transparent border-white/10 text-white hover:border-white/50",
      white: "bg-white border-white text-black hover:bg-neutral-200"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

Button.displayName = "Button";
