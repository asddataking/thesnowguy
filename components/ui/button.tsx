import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-snow-ice text-snow-navy hover:bg-[#3D95EE] shadow-lg shadow-snow-ice/30":
              variant === "primary",
            "border-2 border-snow-navy text-snow-navy hover:bg-snow-ice hover:text-snow-white":
              variant === "secondary",
            "text-snow-navy hover:bg-snow-gray": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

