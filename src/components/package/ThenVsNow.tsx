import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

interface TimelineItem {
  label: string;
}

const thenItems: TimelineItem[] = [
  { label: "Already close." },
];

const nowItems: TimelineItem[] = [
  { label: "More conversations." },
  { label: "More inside jokes." },
  { label: "More random moments." },
  { label: "More understanding." },
  { label: "More memories." },
  { label: "More us." },
];

interface ThenVsNowProps {
  active?: boolean;
}

export function ThenVsNow({ active = true }: ThenVsNowProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          A little update...
        </p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <motion.div
          className="relative overflow-hidden rounded-[26px] border border-white/60 bg-white/45 p-6 shadow-card backdrop-blur-md"
          initial={{ opacity: 0, x: -20 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-plumSoft/50">
            Then
          </p>
          <motion.p
            className="mt-2 font-display text-2xl text-plum sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {thenItems[0].label}
          </motion.p>
          <motion.div
            className="absolute bottom-4 right-4 text-3xl opacity-10"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            ☕
          </motion.div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[26px] border border-white/60 bg-gradient-to-br from-pink-50/80 via-white/50 to-violet-50/70 p-6 shadow-card"
          initial={{ opacity: 0, x: 20 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-rose-400">
            Now
          </p>
          <motion.p
            className="mt-2 font-display text-2xl text-plum sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Somehow even closer.
          </motion.p>

          <motion.div
            className="mt-6 space-y-3"
            variants={staggerContainer}
            initial="initial"
            animate={active ? "animate" : "initial"}
          >
            {nowItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 text-sm text-plumSoft"
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={active ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-200/50 text-rose-400"
                >
                  <span className="text-xs">✓</span>
                </motion.span>
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
