import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function MemoryHeart() {
  return (
    <motion.section
      className="relative py-20 px-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-rose-50/30 to-violet-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200/20 via-transparent to-violet-200/20" />

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`memory-sparkle-${i}`}
          className="absolute text-rose-300/40"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: `${8 + Math.random() * 12}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.5, 1.3, 0.5],
            y: [0, -25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <Sparkles className="h-full w-full fill-current" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Some People Become Home
        </motion.p>

        <motion.h2
          className="font-display mt-2 text-2xl text-plum sm:text-3xl lg:text-4xl xl:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Some People Become Home.
        </motion.h2>

        <motion.div
          className="mt-12 mb-12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 150 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-rose-300/30 via-transparent to-transparent blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative inline-flex items-center justify-center"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="relative flex h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 items-center justify-center rounded-full bg-gradient-to-br from-rose-200/50 via-pink-200/40 to-violet-200/50 shadow-[0_0_60px_rgba(217,137,166,0.4)]"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(217,137,166,0.4)",
                  "0 0 80px rgba(217,137,166,0.6)",
                  "0 0 60px rgba(217,137,166,0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300/30 to-violet-300/30 blur-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative flex h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36 items-center justify-center rounded-full bg-gradient-to-br from-white/80 via-rose-50/50 to-white/80 shadow-[inset_0_2px_10px_rgba(255,255,255,0.5),0_8px_30px_rgba(217,137,166,0.3)]"
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-rose-200/50"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.span
                  className="relative text-6xl sm:text-8xl lg:text-9xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ❤️
                </motion.span>

                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-rose-200/30"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-rose-200/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-5 w-5 fill-white m-auto" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-r from-violet-300 to-rose-300 shadow-lg"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, -180, -360],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Sparkles className="h-4 w-4 fill-white m-auto" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-200/50 to-pink-200/50 px-4 py-2 text-sm font-medium text-plum backdrop-blur-sm"
            >
              <motion.span
                className="h-4 w-4"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-full w-full fill-current" />
              </motion.span>
              <span>You</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-200/50 to-rose-200/50 px-4 py-2 text-sm font-medium text-plum backdrop-blur-sm"
            >
              <span>Home</span>
              <motion.span
                className="h-4 w-4"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Heart className="h-full w-full fill-current" />
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-3 text-sm leading-relaxed text-plumSoft sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Some people enter our lives and somehow become a part of our heart.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            You're one of those people for me.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            You're not just someone I talk to.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
          >
            You're someone whose happiness genuinely matters to me.
          </motion.p>
          <motion.p
            className="font-medium text-plum"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            And that's why this little corner of the internet exists&hellip;
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
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
            <Heart className="h-full w-full fill-rose-400/80" />
          </motion.span>
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}