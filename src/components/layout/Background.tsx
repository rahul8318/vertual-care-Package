import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const floatingHearts = [
  { left: "8%", top: "12%", size: 20, delay: 0.6, duration: 16 },
  { left: "25%", top: "65%", size: 18, delay: 1.2, duration: 18 },
  { left: "48%", top: "18%", size: 16, delay: 1.8, duration: 20 },
  { left: "72%", top: "72%", size: 20, delay: 0.9, duration: 17 },
  { left: "86%", top: "25%", size: 14, delay: 2.4, duration: 19 },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute bottom-24 left-1/3 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/70"
          style={{ left: heart.left, top: heart.top, fontSize: heart.size }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: heart.delay,
          }}
        >
          <Heart className="h-full w-full fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
