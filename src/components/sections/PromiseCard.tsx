import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PromiseCard() {
  const [promised, setPromised] = useState(false);

  return (
    <div>
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        One last thing...
      </h3>

      <AnimatePresence>
        {!promised ? (
          <motion.div
            key="button"
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <motion.button
              onClick={() => setPromised(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200 via-pink-200 to-violet-200 px-6 py-3 text-sm font-semibold text-plum shadow-card transition hover:scale-[1.02]"
              whileTap={{ scale: 0.92 }}
            >
              I promise ❤️
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            className="mt-6 rounded-[22px] border border-rose-100 bg-gradient-to-r from-pink-50 to-violet-50 p-5 text-center"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-sm text-plumSoft sm:text-base">
              Good. Now get cozy, drink some water, and take care of
              yourself.
            </p>
            <p className="mt-3 text-sm text-plumSoft sm:text-base">
              And remember...
            </p>
            <p className="mt-3 text-sm text-plumSoft sm:text-base">
              Distance doesn't mean you're alone. ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
