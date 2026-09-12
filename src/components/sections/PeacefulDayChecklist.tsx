import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

interface ChecklistItem {
  text: string;
  icon: string;
}

const checklistItems: ChecklistItem[] = [
  { text: "A peaceful day", icon: "☮️" },
  { text: "Your favorite food", icon: "🍜" },
  { text: "A comfortable bed", icon: "🛏️" },
  { text: "Zero stress", icon: "🕊️" },
  { text: "Someone who listens", icon: "👂" },
  { text: "Lots of rest", icon: "😴" },
  { text: "Random memes", icon: "LOL" },
  { text: "A really good sleep", icon: "🌙" },
];

export function PeacefulDayChecklist() {
  return (
    <div>
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        For your peace of mind
      </h3>
      <p className="mt-2 text-sm text-plumSoft/70 sm:text-base">
        Here's what the world should give you.
      </p>

      <div className="mt-6 space-y-3">
        {checklistItems.map((item) => (
          <motion.div
            key={item.text}
            className="flex items-center gap-3 rounded-[18px] border border-white/50 bg-white/40 p-3 text-plumSoft"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.55)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="text-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.span>
            <span className="text-sm sm:text-base">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
