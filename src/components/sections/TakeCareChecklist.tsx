import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, Sparkles } from "lucide-react";
import { staggerContainer } from "../animations/variants";

const careItems = [
  { id: "water", emoji: "💧", text: "Drink enough water", icon: Heart },
  { id: "meals", emoji: "🍽️", text: "Don't skip your meals", icon: Sparkles },
  { id: "sleep", emoji: "😴", text: "Get enough sleep", icon: Heart },
  { id: "inside", emoji: "🫶", text: "Don't keep everything inside", icon: Sparkles },
  { id: "breaks", emoji: "🌸", text: "Take breaks when you're tired", icon: Heart },
  { id: "overthink", emoji: "🧠", text: "Don't overthink everything", icon: Sparkles },
  { id: "smile", emoji: "😊", text: "Smile whenever you can", icon: Heart },
  { id: "kind", emoji: "❤️", text: "Be kind to yourself", icon: Sparkles },
];

export function TakeCareChecklist() {
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
        className="relative z-10 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          className="mb-10 text-center"
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
            Your Little Reminder
          </motion.p>
          <motion.h2
            className="font-display mt-2 text-2xl text-plum sm:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Take Care Of You
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {careItems.map((item, index) => (
            <CareCard key={item.id} item={item} delay={index * 0.08} />
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm text-plumSoft/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Each small step matters. You matter. ❤️
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

function CareCard({ item, delay }: { item: typeof careItems[0]; delay: number }) {
  const Icon = item.icon;
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-rose-200/30 via-pink-200/20 to-violet-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <motion.div
        className={`relative rounded-[24px] border-2 p-4 sm:p-5 lg:p-6 backdrop-blur-md transition-all duration-300 ${
          checked
            ? "border-rose-200/60 bg-gradient-to-br from-rose-50/80 via-white/50 to-pink-50/60 shadow-[0_12px_30px_rgba(217,137,166,0.25)]"
            : "border-white/60 bg-white/45 hover:border-rose-200/40 hover:bg-white/60 shadow-card"
        }`}
        onClick={() => setChecked(!checked)}
        whileTap={{ scale: 0.97 }}
        layout
      >
        <motion.div
          className="mb-3 flex items-center justify-center"
          animate={{
            scale: checked ? 1.15 : 1,
            rotate: checked ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: checked ? 0.4 : 0 }}
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl">{item.emoji}</span>
        </motion.div>

        <motion.p
          className={`font-display text-center text-base font-semibold leading-relaxed transition-colors sm:text-lg ${
            checked ? "text-rose-500" : "text-plum"
          }`}
        >
          {item.text}
        </motion.p>

        <AnimatePresence>
          {checked && (
            <motion.div
              key="check"
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Check className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs text-plumSoft/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Icon className="h-3 w-3 fill-current" />
          <span>Tap to check</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}