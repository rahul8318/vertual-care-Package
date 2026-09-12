import { ReactNode } from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  whileHover,
  whileTap,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 text-plum shadow-card hover:shadow-xl",
    secondary:
      "border border-white/60 bg-white/45 text-plum hover:bg-white/60",
    ghost: "text-plum hover:bg-white/30",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const defaultWhileHover =
    variant === "primary"
      ? { scale: 1.02 }
      : variant === "ghost"
        ? { scale: 1.05 }
        : { scale: 1.02 };

  const defaultWhileTap = { scale: 0.96 };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || defaultWhileTap}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
