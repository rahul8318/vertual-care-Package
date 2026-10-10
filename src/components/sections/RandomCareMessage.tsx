import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Sparkles } from "lucide-react";

const careMessages = [
  "You are doing better than you think.",
  "Please don't forget to smile today.",
  "Drink some water, sleepyhead. 💧",
  "You deserve rest too.",
  "Don't overthink tonight. Everything doesn't need an answer right now.",
  "Your happiness matters to me.",
  "Please take care of that beautiful heart of yours.",
  "I'm always rooting for you. ❤️",
  "You're stronger than you know, and softer than you realize.",
  "The world is better because you're in it.",
  "It's okay to not be okay sometimes. I'm still here.",
  "Your existence is a gift to everyone who knows you.",
  "Take things one breath at a time.",
  "You don't have to earn rest. You deserve it simply because you exist.",
  "Sending you a little sunshine and a lot of love. ☀️❤️",
];

export function RandomCareMessage() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const getRandomMessage = useCallback(() => {
    const availableMessages = careMessages.filter(
      (msg) => msg !== currentMessage && !history.includes(msg)
    );
    const messagesToUse = availableMessages.length > 0 ? availableMessages : careMessages;
    const randomIndex = Math.floor(Math.random() * messagesToUse.length);
    const newMessage = messagesToUse[randomIndex];
    
    setCurrentMessage(newMessage);
    setHistory((prev) => {
      const newHistory = [...prev, newMessage];
      return newHistory.slice(-5);
    });
  }, [currentMessage, history]);

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
            Need a little reminder?
          </motion.p>
          <motion.h2
            className="font-display mt-2 text-2xl text-plum sm:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Random Care Message
          </motion.h2>
        </motion.div>

        <motion.button
          onClick={getRandomMessage}
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200 via-pink-200 to-violet-200 px-6 py-3.5 text-base font-semibold text-plum shadow-card transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.03, y: -2, boxShadow: "0 16px 32px rgba(217, 137, 166, 0.3)" }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <motion.span
            className="h-5 w-5"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Mail className="h-full w-full fill-current" />
          </motion.span>
          <span className="hidden sm:inline">Give Me A Random Reminder 💌</span>
          <span className="sm:hidden">Random Reminder 💌</span>
          <motion.span
            className="h-5 w-5"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="h-full w-full fill-current" />
          </motion.span>
        </motion.button>

        <motion.p
          className="mt-6 text-sm text-plumSoft/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Click anytime you need a little love note.
        </motion.p>

        <AnimatePresence>
          {currentMessage && (
            <motion.div
              key={currentMessage}
              className="mt-8 relative rounded-[24px] border border-white/60 bg-white/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(103,72,81,0.15)] text-center"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200/50 via-pink-200/50 to-violet-200/50 px-4 py-1.5 text-xs font-semibold text-plum backdrop-blur-sm sm:px-5 sm:py-2 sm:text-sm whitespace-nowrap max-w-[90vw]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.span
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="h-full w-full fill-current " />
                </motion.span>
                <span className="hidden sm:inline">Just for you</span>
                <span className="sm:hidden">For you</span>
                <Heart className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
              </motion.div>

              <motion.div
                className="relative flex items-center justify-center min-h-[100px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              >
                <motion.p
                  className="font-display text-center text-xl leading-relaxed text-plum sm:text-2xl lg:text-3xl xl:text-4xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {currentMessage}
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-6 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
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
                onClick={getRandomMessage}
                className="mt-6 w-full rounded-full border border-white/60 bg-white/45 px-5 py-2.5 text-sm font-semibold text-plum hover:bg-white/60 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Another one, please 💗
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {currentMessage && (
          <motion.p
            className="mt-6 text-xs text-plumSoft/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Message {history.length} of many&hellip; there's always more love where that came from. ❤️
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
}