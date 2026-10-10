import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function EmotionalMessage() {
  const paragraphs = [
    "Life gets busy. Things get difficult. Some days feel heavier than others.",
    "But through everything, please remember this:",
    "You don't always have to be strong.",
    "You don't always have to pretend you're okay.",
    "You don't have to handle everything alone.",
    "",
    "Whenever you're tired, sad, stressed, confused, or simply having a bad day&hellip;",
    "",
    "Please pause.",
    "Take a breath.",
    "Drink some water.",
    "Rest for a while.",
    "",
    "And remember that somewhere in this world, there is someone who genuinely cares about you and wants to see you happy.",
    "",
    "That someone is me. ❤️",
  ];

  return (
    <motion.section
      className="relative py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-rose-100/30 via-transparent to-violet-100/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <motion.p
          className="text-center font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Just Something I Want You To Remember&hellip;
        </motion.p>

        <motion.div
          className="mt-6 relative rounded-[24px] border border-white/60 bg-white/40 p-6 sm:p-8 lg:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(103,72,81,0.12)]"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200/50 via-pink-200/50 to-violet-200/50 px-4 py-1.5 text-xs font-semibold text-plum backdrop-blur-sm sm:px-5 sm:py-2 sm:text-sm whitespace-nowrap max-w-[90vw]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Heart className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">A note from my heart</span>
            <span className="sm:hidden">From my heart</span>
            <Heart className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
          </motion.div>

          <div className="space-y-3 text-sm leading-relaxed text-plum sm:text-base lg:text-lg">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={paragraph === "" ? "h-4" : "text-center"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.12, duration: 0.5, ease: "easeOut" }}
              >
                {paragraph && (
                  <>
                    {index === 1 && (
                      <span className="font-semibold text-rose-500">But through everything, please remember this:</span>
                    )}
                    {index >= 2 && index <= 4 && (
                      <span className="font-medium text-plum">{paragraph}</span>
                    )}
                    {index === 6 && (
                      <span className="font-medium text-rose-500">Whenever you're tired, sad, stressed, confused, or simply having a bad day&hellip;</span>
                    )}
                    {index === 8 && <span className="font-semibold text-plum">Please pause.</span>}
                    {index === 9 && <span className="font-semibold text-plum">Take a breath.</span>}
                    {index === 10 && <span className="font-semibold text-plum">Drink some water.</span>}
                    {index === 11 && <span className="font-semibold text-plum">Rest for a while.</span>}
                    {index === 13 && (
                      <span className="font-medium text-plum">And remember that somewhere in this world, there is someone who genuinely cares about you and wants to see you happy.</span>
                    )}
                    {index === 15 && (
                      <span className="font-display text-xl text-rose-500">That someone is me. ❤️</span>
                    )}
                    {(index !== 1 && index !== 6 && index !== 8 && index !== 9 && index !== 10 && index !== 11 && index !== 13 && index !== 15 && paragraph !== "") && (
                      <span>{paragraph}</span>
                    )}
                  </>
                )}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
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
              <Heart className="h-full w-full fill-rose-300/80" />
            </motion.span>
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}