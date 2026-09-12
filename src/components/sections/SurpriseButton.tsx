import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SurpriseButtonProps {
  onRevealComplete?: () => void;
}

export function SurpriseButton({ onRevealComplete }: SurpriseButtonProps) {
  const [clicked, setClicked] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setShowFinal(true);
      onRevealComplete?.();
    }, 1500);
  };

  return (
    <>
      <motion.div
        className="w-full text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={!clicked ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          ...wait for it
        </motion.p>

        <motion.h2
          className="font-display text-3xl text-plum sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Don't click this.
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-md text-sm text-plumSoft/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm watching you. (Seriously, it's fine, just click it.)
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        >
            <motion.button
            onClick={handleClick}
            className="relative rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 px-8 py-4 text-lg font-semibold text-white shadow-2xl sm:px-10 sm:py-5 sm:text-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="flex items-center gap-2"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Click me
              <span className="text-2xl">🚫</span>
            </motion.span>

            <motion.div
              className="absolute -inset-1 rounded-full opacity-30 blur-xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {clicked && (
          <motion.div
            key="result"
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative rounded-[26px] border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-md max-w-sm text-center sm:p-8"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="mb-4 text-4xl"
              >
                😏
              </motion.div>

              <motion.p
                className="font-display text-xl text-plum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Okay, you clicked it.
              </motion.p>

              <motion.p
                className="mt-4 text-sm text-plumSoft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Anyway...
              </motion.p>

              <motion.p
                className="mt-4 text-sm text-plumSoft"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Just wanted to remind you that I'm really glad you're in
                my life.
              </motion.p>

              <motion.p
                className="mt-6 text-2xl font-bold text-plum"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              >
                That&apos;s it. For now. ❤️
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
