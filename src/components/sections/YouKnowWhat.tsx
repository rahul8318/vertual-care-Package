import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function YouKnowWhat() {
  const [stage, setStage] = useState<"idle" | "reveal1" | "reveal2">("idle");

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-display text-2xl text-plum italic sm:text-3xl">
          You know what?
        </p>
      </motion.div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === "idle" && (
            <motion.button
              key="what-btn"
              onClick={() => setStage("reveal1")}
              className="relative rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300 px-8 py-4 text-lg font-semibold text-plum shadow-card transition hover:scale-[1.03]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="flex items-center gap-2"
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                What?
                <motion.span
                  className="text-xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  ❓
                </motion.span>
              </motion.span>
            </motion.button>
          )}

          {stage === "reveal1" && (
            <motion.div
              key="message1"
              className="relative max-w-2xl text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="font-body text-base leading-relaxed text-plumSoft sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                You somehow went from being my bestie to being one of the
                people I genuinely can't imagine my days without.
              </motion.p>

              <motion.button
                key="next-btn"
                onClick={() => setStage("reveal2")}
                className="mt-8 rounded-full border border-white/60 bg-white/45 px-6 py-3 text-sm font-semibold text-plum hover:bg-white/60"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                Okay, one more thing →
              </motion.button>
            </motion.div>
          )}

          {stage === "reveal2" && (
            <motion.div
              key="message2"
              className="relative text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="font-body text-base leading-relaxed text-plumSoft sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I used to think "best friend" was a pretty high bar.
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>
                Now I'm pretty sure I invented a whole new category just
                for you.
              </motion.p>

              <motion.div
                className="mt-6 text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💫
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
