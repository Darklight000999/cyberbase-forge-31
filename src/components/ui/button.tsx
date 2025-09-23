import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cyber: "bg-gradient-green text-primary-foreground font-mono font-bold shadow-glow-green hover:shadow-glow-green border border-primary/30 hover:border-primary transition-all duration-300 hover:animate-neon-flicker",
        terminal: "bg-cyber-gray text-primary border border-primary/50 font-mono hover:bg-primary/20 hover:shadow-glow-green transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-hologram-shimmer before:animate-hologram-shimmer before:opacity-0 hover:before:opacity-100",
        danger: "bg-gradient-danger text-destructive-foreground font-mono font-bold shadow-glow-red hover:shadow-glow-red border border-destructive/30 hover:border-destructive transition-all duration-300 hover:animate-neon-flicker",
        hologram: "bg-transparent border-2 border-primary text-primary font-mono font-bold relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:animate-hologram-shimmer hover:shadow-glow-green transition-all duration-300",
        matrix: "bg-cyber-black/50 text-primary border border-primary/30 font-mono backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-glow-green transition-all duration-300 animate-float-3d",
        neon: "bg-transparent border border-primary text-primary font-mono font-bold shadow-[0_0_10px_currentColor] hover:shadow-[0_0_20px_currentColor,0_0_30px_currentColor] hover:animate-neon-flicker transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        cyber: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };