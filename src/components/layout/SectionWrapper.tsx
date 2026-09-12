import { ReactNode } from "react";
import { motion } from "framer-motion";
import { scrollReveal } from "../animations/variants";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-5xl px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 ${className}`}
      {...scrollReveal}
      transition={{ ...scrollReveal.transition, delay }}
    >
      {children}
    </motion.section>
  );
}
