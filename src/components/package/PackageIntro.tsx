import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface PackageIntroProps {
  onOpen: () => void;
}

export function PackageIntro({ onOpen }: PackageIntroProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.p
          className="font-body text-sm uppercase tracking-[0.3em] text-plumSoft/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hey you...
        </motion.p>

        <motion.h1
          className="font-display text-5xl leading-[0.95] text-plum sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Your care package has arrived.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-md text-base text-plumSoft sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Because apparently one version wasn't enough.
        </motion.p>

        <motion.p
          className="text-sm text-plumSoft/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          Things changed a little since the last one.
          <br />
          Mostly because somehow, you became even more important to me.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            onClick={onOpen}
            variant="primary"
            size="lg"
            className="group px-8 py-4 text-lg"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.94 }}
          >
            <motion.span
              className="flex items-center gap-2"
              animate={{ x: [0, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Open your package
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📦
              </motion.span>
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function PackageOpening({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
      >
        <motion.div
          className="relative flex h-52 w-52 items-center justify-center sm:h-64 sm:w-64 rounded-[32px] border-2 border-white/80 bg-gradient-to-br from-pink-200 via-rose-100 to-violet-200 shadow-2xl"
          initial={{
            clipPath: "inset(0 0 0 0)",
            opacity: 1,
          }}
          animate={{
            clipPath: [
              "inset(0 0 0 0)",
              "inset(0 50% 0 0)",
              "inset(50% 50% 0 0)",
              "inset(50% 0 0 50%)",
              "inset(0 0 50% 50%)",
              "inset(50% 50% 50% 50%)",
            ],
            rotate: [0, 0, 45, 90, 135, 180],
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            📦
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -z-10 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-pink-200/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/80"
            initial={{
              top: "50%",
              left: "50%",
              opacity: 1,
              scale: 0.5,
            }}
            animate={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              opacity: [1, 0],
              scale: [0.5, 1],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              delay: i * 0.03,
              ease: "easeOut",
            }}
          >
            <span className="text-xl">🎀</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center text-plumSoft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Almost there...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
