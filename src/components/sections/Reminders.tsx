import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

interface ReminderCard {
  id: string;
  emoji: string;
  text: string;
  playNote?: boolean;
}

const reminders: ReminderCard[] = [
  {
    id: "matter",
    emoji: "⭐",
    text: "You matter.",
  },
  {
    id: "alone",
    emoji: "🤗",
    text: "You don't have to handle everything alone.",
  },
  {
    id: "better",
    emoji: "🌈",
    text: "Your existence makes someone's life brighter.",
  },
  {
    id: "bad-days",
    emoji: "🌧️",
    text: "You're allowed to have bad days.",
  },
  {
    id: "stuck",
    emoji: "🦝",
    text: "And yes, you're stuck with me. (Wouldn't have it any other way!)",
    playNote: true,
  },
];

interface RemindersProps {
  items?: ReminderCard[];
}

export function Reminders({ items = reminders }: RemindersProps) {
  return (
    <motion.div
      className="w-full"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          A little reminder
        </p>
        <h2 className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl">
          Things I never want you to forget
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <ReminderNote
            key={item.id}
            item={item}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ReminderNote({
  item,
  delay,
}: {
  item: ReminderCard;
  delay: number;
}) {
  return (
    <motion.div
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <motion.div
        className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-pink-200/30 via-rose-200/20 to-violet-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative rounded-[20px] border border-white/60 bg-gradient-to-br from-white/70 via-white/50 to-pink-50/40 p-5 shadow-card backdrop-blur-md">
        <motion.div
          className="mb-3 text-3xl"
          animate={item.playNote ? {
            rotate: [0, 10, -10, 5, 0],
            y: [0, -5, 5, -2, 0],
          } : {}}
          transition={item.playNote ? {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
            repeatDelay: 2,
          } : {}}
        >
          {item.emoji}
        </motion.div>

        <motion.p
          className="font-display text-center text-lg text-plum leading-relaxed sm:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.1, duration: 0.5 }}
        >
          {item.text}
        </motion.p>

        {item.playNote && (
          <motion.div
            className="absolute -bottom-2 -right-2 text-xs text-rose-400/60"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🎵
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
