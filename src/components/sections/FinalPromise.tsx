import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, CheckCircle } from "lucide-react";

export function FinalPromise() {
  const [promised, setPromised] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handlePromise = () => {
    setPromised(true);
    setTimeout(() => setShowFinal(true), 800);
  };

  return (
    <motion.section
      className="relative py-20 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-transparent to-rose-50/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.div
          className="mb-10"
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
            One Last Thing&hellip;
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!promised ? (
            <motion.div
              key="before-promise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h2
                className="font-display text-2xl text-plum sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                Please take care of yourself.
              </motion.h2>

              <motion.div
                className="mt-8 space-y-3 text-base leading-relaxed text-plumSoft sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Not just because I asked you to&hellip;
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                >
                  but because you deserve to be cared for, loved, protected, and
                  happy.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  And whenever you forget how important you are&hellip;
                </motion.p>
                <motion.p
                  className="font-medium text-plum"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.5 }}
                >
                  come back here.
                </motion.p>
                <motion.p
                  className="font-display text-xl text-rose-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  I'll remind you. ❤️
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              >
                <motion.button
                  onClick={handlePromise}
                  className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300 px-6 py-3.5 text-base font-semibold text-plum shadow-xl transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    boxShadow: "0 24px 48px rgba(217, 137, 166, 0.5)",
                  }}
                  whileTap={{ scale: 0.94 }}
                >
                  <motion.span
                    className="h-6 w-6"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="h-full w-full fill-current" />
                  </motion.span>
                  <span className="hidden sm:inline">Promise Me You'll Take Care Of Yourself</span>
                  <span className="sm:hidden">Promise to Take Care 🤝❤️</span>
                  <motion.span
                    className="h-6 w-6"
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  >
                    <CheckCircle className="h-full w-full fill-current" />
                  </motion.span>
                  <motion.span
                    className="h-5 w-5 absolute -right-3 top-1/2 -translate-y-1/2"
                    animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="h-full w-full fill-current" />
                  </motion.span>
                </motion.button>
              </motion.div>

              <motion.p
                className="mt-6 text-sm text-plumSoft/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                Pinky promise? 🤝❤️
              </motion.p>
            </motion.div>
          ) : (
<motion.div
                key="after-promise"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="relative rounded-[24px] border border-white/60 bg-white/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(103,72,81,0.15)] text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                >
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200/50 via-pink-200/50 to-violet-200/50 px-5 py-2 text-xs font-semibold text-plum backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <CheckCircle className="h-4 w-4 fill-current text-rose-500" />
                  Promise made
                  <Heart className="h-4 w-4 fill-current" />
                </motion.div>

                <motion.div
                  className="space-y-4 text-base leading-relaxed text-plum sm:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.p>
                    Okay&hellip; that's all I wanted. 🥹
                  </motion.p>
                  <motion.p>
                    Now go drink some water and smile.
                  </motion.p>
                  <motion.p className="font-display text-xl text-rose-500">
                    You are precious. Never forget that. ❤️
                  </motion.p>
                </motion.div>

                <motion.div
                className="mt-6 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="h-5 w-5"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Heart className="h-full w-full fill-rose-400" />
                </motion.span>
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>
              </motion.div>

              {showFinal && (
                <motion.div
                  key="final-hearts"
                  className="mt-10 fixed inset-0 pointer-events-none -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={`final-heart-${i}`}
                      className="absolute text-rose-300/80"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${80 + Math.random() * 20}%`,
                        fontSize: `${16 + Math.random() * 24}px`,
                      }}
                      initial={{ opacity: 0, y: 0, scale: 0.5 }}
                      animate={{
                        opacity: [1, 0],
                        y: -120,
                        x: (Math.random() - 0.5) * 100,
                        scale: [0.5, 1.2, 1],
                        rotate: [0, Math.random() * 720],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Heart className="h-full w-full fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}