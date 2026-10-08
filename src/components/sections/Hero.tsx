import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Heart, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-rose-200/20 via-transparent to-violet-200/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/10 via-transparent to-violet-300/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`hero-sparkle-${i}`}
          className="absolute text-rose-300/40"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: `${8 + Math.random() * 16}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1.2, 0.5],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <Sparkles className="h-full w-full fill-current" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="font-body text-sm uppercase tracking-[0.3em] text-plumSoft/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A little note for you
        </motion.p>

        <motion.h1
          className="font-display mt-4 text-3xl leading-[1.1] text-plum sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
        >
          Hey Bestie&hellip; Take Care of Yourself, Okay?{' '}
          <motion.span
            className="inline-block text-rose-400"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ❤️
          </motion.span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-plumSoft sm:text-base lg:text-lg xl:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          You may not realize it every day, but you are one of the most precious
          people in my life. Your smile, your happiness, your presence&hellip;
          they all matter to me more than I can explain.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 w-full sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            variant="primary"
            size="lg"
            className="group w-full sm:max-w-xs px-6 py-3.5 text-base shadow-xl"
            whileHover={{ scale: 1.04, y: -3, boxShadow: "0 20px 40px rgba(217, 137, 166, 0.4)" }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span className="flex items-center gap-2">
              Open This When You Need A Little Love{' '}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                💗
              </motion.span>
            </motion.span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="w-full sm:max-w-xs px-5 py-3 text-base"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span className="flex items-center gap-2">
              <Heart className="h-5 w-5 fill-current" />
              Just exploring
            </motion.span>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-3 text-sm text-plumSoft/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.span
            className="flex items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <Heart className="h-4 w-4 fill-current" />
            Made with love
            <Heart className="h-4 w-4 fill-current" />
          </motion.span>
          <motion.span
            className="flex items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="h-4 w-4 fill-current" />
            Just for you
            <Sparkles className="h-4 w-4 fill-current" />
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="flex items-center gap-2 text-plumSoft/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span className="text-sm">Scroll down</motion.span>
          <motion.span className="text-lg">↓</motion.span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}