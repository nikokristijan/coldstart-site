import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] text-[13px] font-semibold uppercase tracking-[0.02em] transition-colors duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy-0)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--cream)] text-[#14120e] border border-[var(--cream)] hover:bg-transparent hover:text-[var(--cream)]",
        ghost:
          "bg-transparent text-[var(--cream)] border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--gold)]",
        gold: "bg-[var(--gold)] text-[#201404] border border-[var(--gold)] hover:bg-transparent hover:text-[var(--gold)]",
        teal: "bg-transparent text-[var(--teal)] border border-[var(--teal)] hover:bg-[var(--teal)] hover:text-[#14120e]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-12 px-8 text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
