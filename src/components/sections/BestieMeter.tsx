import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BestieMeter() {
  const [clicks, setClicks] = useState(0);
  const percentage = Math.min(99.9 + clicks * 0.1, 100);
  const filled = Math.min(20 + Math.floor(clicks / 2), 25);
  const [sparkle, setSparkle] = useState(false);

  const handleClick = () => {
    setClicks((c) => c + 1);
    setSparkle(true);
    setTimeout(() => setSparkle(false), 500);
  };

  return (
    <motion.div
      className="relative w-full text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          Status check
        </p>
        <h2 className="font-display text-2xl text-plum sm:text-3xl">
          Bestie Level
        </h2>
      </motion.div>

      <motion.div
        className="mb-6 inline-flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        <span className="text-2xl">💖</span>
        <motion.div
          className="inline-block font-mono text-xl font-bold text-plum"
          animate={{ scale: sparkle ? 1.15 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {percentage.toFixed(1)}%
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-6 h-6 w-full max-w-md rounded-full bg-white/50 p-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="relative h-4 rounded-full bg-gradient-to-r from-pink-100 to-violet-100">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300"
            style={{
              width: `${(percentage / 100) * 100}%`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((percentage / 100) * 100, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="mt-2 flex justify-between px-1 text-xs text-plumSoft">
          <span>Best friend</span>
          <span>Family</span>
        </div>
      </motion.div>

      <motion.p
        className="mb-6 text-sm italic text-plumSoft"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Still somehow increasing.
      </motion.p>

      <motion.button
        onClick={handleClick}
        className="rounded-full border border-rose-200/50 bg-gradient-to-r from-rose-200/30 via-pink-200/30 to-violet-200/30 px-6 py-3 text-sm font-semibold text-plum backdrop-blur-sm transition hover:from-rose-300 hover:to-violet-300"
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
      >
        + Strengthen bond ({clicks})
      </motion.button>

      <AnimatePresence>
        {sparkle &&
          [...Array(5)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="pointer-events-none absolute"
              style={{
                left: "50%",
                top: "40%",
              }}
              initial={{
                opacity: 1,
                scale: 0.8,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [1, 0],
                scale: [0.8, 1.5],
                x: (i - 2) * 30 + (Math.random() - 0.5) * 20,
                y: -20 - Math.random() * 30,
                rotate: Math.random() * 360,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              ✨
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}

