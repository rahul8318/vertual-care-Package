import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EmergencyChocolate() {
  const [tapped, setTapped] = useState(false);

  return (
    <div className="text-center">
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        Emergency chocolate
      </h3>
      <p className="mt-2 text-sm text-plumSoft/70 sm:text-base">
        In case you need a sugar rush or emotional support snack.
      </p>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {!tapped ? (
            <motion.button
              key="chocolate"
              onClick={() => setTapped(true)}
              className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100 p-6 shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl">🍫</span>
            </motion.button>
          ) : (
            <motion.div
              key="result"
              className="inline-block rounded-[22px] border border-rose-200/40 bg-gradient-to-r from-amber-50 to-rose-50/60 px-6 py-4"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.p
                className="font-display text-lg text-plum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                🍫 Consumed.
              </motion.p>
              <motion.p
                className="mt-1 text-sm text-plumSoft"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                Sugar levels: restored.
                <br />
                Serotonin: temporarily hacked.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
