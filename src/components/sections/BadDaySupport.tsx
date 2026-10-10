import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CloudRain, Sunrise } from "lucide-react";

const badDayMessage = `Hey&hellip; it's okay.

You don't have to fix everything today.

Take a deep breath.

You've survived every difficult day you've faced until now.

This one will pass too.

Rest if you need to.
Cry if you need to.
Talk if you want to.

Just don't forget that you're loved, appreciated, and incredibly important.

Tomorrow can be better. ❤️`;

export function BadDaySupport() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <motion.section
      className="relative py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-violet-100/30 via-transparent to-rose-100/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.p
            className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            When things feel heavy
          </motion.p>
          <motion.h2
            className="font-display mt-2 text-2xl text-plum sm:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Having a Bad Day?
          </motion.h2>
        </motion.div>

        <motion.button
          onClick={handleClick}
          className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300 px-6 py-3.5 text-base font-semibold text-plum shadow-xl transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.04, y: -3, boxShadow: "0 20px 40px rgba(217, 137, 166, 0.5)" }}
          whileTap={{ scale: 0.94 }}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <motion.span
            className="h-5 w-5"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CloudRain className="h-full w-full fill-current" />
          </motion.span>
          <span className="hidden sm:inline">I'm Having A Bad Day 🥺</span>
          <span className="sm:hidden">Bad Day 🥺</span>
          <motion.span
            className="h-5 w-5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="h-full w-full fill-current" />
          </motion.span>
        </motion.button>

        <motion.p
          className="mt-6 text-sm text-plumSoft/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Tap above when you need a little reminder that you're not alone.
        </motion.p>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              key="message"
              className="mt-8 relative rounded-[24px] border border-white/60 bg-white/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(103,72,81,0.15)] text-center"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200/50 via-pink-200/50 to-violet-200/50 px-4 py-1.5 text-xs font-semibold text-plum backdrop-blur-sm sm:px-5 sm:py-2 sm:text-sm whitespace-nowrap max-w-[90vw]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Sunrise className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
                <motion.span
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sunrise className="h-full w-full fill-current" />
                </motion.span>
                <span className="hidden sm:inline">A little note for you</span>
                <span className="sm:hidden">A note for you</span>
                <Heart className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
              </motion.div>

              <motion.div
                className="space-y-3 text-base leading-relaxed text-plum sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {badDayMessage.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className={index === 0 ? "text-center font-medium text-rose-500" : "text-center"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                className="mt-6 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="h-4 w-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-full w-full fill-rose-400" />
                </motion.span>
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>

              <motion.button
                onClick={() => setShowMessage(false)}
                className="mt-6 w-full rounded-full border border-white/60 bg-white/45 px-5 py-2.5 text-sm font-semibold text-plum hover:bg-white/60 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                I feel a little better now 💗
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}