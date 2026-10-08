import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const floatingHearts = [
  { left: "5%", top: "15%", size: 24, delay: 0.5, duration: 22 },
  { left: "20%", top: "70%", size: 18, delay: 1.2, duration: 20 },
  { left: "40%", top: "10%", size: 16, delay: 2.5, duration: 24 },
  { left: "65%", top: "75%", size: 22, delay: 0.8, duration: 21 },
  { left: "85%", top: "20%", size: 14, delay: 3.2, duration: 23 },
  { left: "12%", top: "45%", size: 15, delay: 1.8, duration: 19 },
  { left: "78%", top: "40%", size: 17, delay: 2.9, duration: 22 },
];

const floatingSparkles = [
  { left: "8%", top: "8%", size: 12, delay: 0.3, duration: 12 },
  { left: "30%", top: "92%", size: 10, delay: 1.5, duration: 14 },
  { left: "55%", top: "5%", size: 8, delay: 2.2, duration: 16 },
  { left: "90%", top: "60%", size: 12, delay: 0.7, duration: 13 },
  { left: "15%", top: "80%", size: 9, delay: 3.5, duration: 15 },
  { left: "70%", top: "15%", size: 11, delay: 1.1, duration: 11 },
  { left: "45%", top: "85%", size: 7, delay: 2.8, duration: 17 },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute bottom-32 left-1/4 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-violet-100/20"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {floatingHearts.map((heart, index) => (
        <motion.div
          key={`heart-${index}`}
          className="absolute text-rose-300/50"
          style={{ left: heart.left, top: heart.top, fontSize: heart.size }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.15, 0.7, 0.15],
            rotate: [0, 5, -5, 0],
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

      {floatingSparkles.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute text-amber-300/60"
          style={{ left: sparkle.left, top: sparkle.top, fontSize: sparkle.size }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        >
          <Sparkles className="h-full w-full fill-current" />
        </motion.div>
      ))}
    </div>
  );
}