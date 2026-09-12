import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mood = "good" | "meh" | "exhausted" | "irritated";

const moodResponses: Record<Mood, string> = {
  good: "Okayyy, we love to see it ❤️",
  meh: "That's okay. Today can just be a meh day.",
  exhausted: "Then rest. Everything else can wait.",
  irritated: "Understood. I will be annoying from a safe distance 😂❤️",
};

export function MoodSelector() {
  const [mood, setMood] = useState<Mood | null>(null);

  return (
    <div>
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        How are you feeling?
      </h3>
      <p className="mt-2 text-sm text-plumSoft/70 sm:text-base">
        Tap a mood to get a little note from me.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {([
          ["good", "🥰 Good"],
          ["meh", "😐 Meh"],
          ["exhausted", "😩 Exhausted"],
          ["irritated", "😤 Irritated"],
        ] as [Mood, string][]).map(([key, label]) => (
          <motion.button
            key={key}
            type="button"
            onClick={() => setMood(key)}
            className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all ${
              mood === key
                ? "border-rose-300 bg-gradient-to-r from-pink-100 to-violet-100 text-plum shadow-sm"
                : "border-pink-100 bg-white/70 text-plumSoft hover:border-rose-200 hover:bg-pink-50/60"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {mood && (
          <motion.div
            key={mood}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-[22px] border border-rose-100 bg-gradient-to-r from-pink-50 to-violet-50 p-4 text-center text-base text-plumSoft sm:text-lg"
          >
            {moodResponses[mood]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
