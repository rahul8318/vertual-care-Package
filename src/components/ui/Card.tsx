import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = false,
  onClick,
  ...motionProps
}: CardProps) {
  const hoverProps = hover
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }
    : {};

  return (
    <motion.div
      onClick={onClick}
      className={`rounded-[24px] border border-white/60 bg-white/45 p-5 shadow-card backdrop-blur-md sm:p-8 lg:p-10 ${className}`}
      {...hoverProps}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
