import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../animations/variants";

export interface EnvelopeItem {
  id: string;
  emoji: string;
  text: string;
  message: string;
}

const envelopeItems: EnvelopeItem[] = [
  {
    id: "sad",
    emoji: "💙",
    text: "Open when you're sad",
    message: "I know today feels heavy. But remember, storms don't last forever. You're braver than you think, and I'm just a text away. Cry it out if you need to — I'll send you cat videos afterwards. ❤️",
  },
  {
    id: "miss",
    emoji: "🌙",
    text: "Open when you miss me",
    message: "I miss you too. Distance is such a silly concept when what we have isn't measured in miles. Close your eyes and imagine I'm annoying you with my terrible singing right now. Still love you. 😂",
  },
  {
    id: "bad-day",
    emoji: "☁️",
    text: "Open when you had a bad day",
    message: "Bad days are just good days' awkward cousins. They visit, they overstay, and then they leave. Take a shower, eat something, and text me everything. I'll listen, I promise. Your day isn't ruined just because today was.",
  },
  {
    id: "motivation",
    emoji: "🔥",
    text: "Open when you need motivation",
    message: "Remember that time you stayed up until 3am helping me figure out something that wasn't even your problem? That's the kind of person you are. You don't need motivation — you ARE motivation. Now go show the world.",
  },
  {
    id: "cant-sleep",
    emoji: "⭐",
    text: "Open when you can't sleep",
    message: "Put your phone down (ironic, I know 🙃). Count the stars outside your window. Remember that cozy blanket you stole from me. I'm probably awake too, thinking about the same nothing and everything. Goodnight, bestie. Sleep well.",
  },
  {
    id: "smile",
    emoji: "🌼",
    text: "Open when you just want to smile",
    message: "Imagine me doing my dramatic reenactment of that movie we watched three times last week. Remember how we both cried laughing at the same scene? You have this effect on people — making ordinary moments feel like the best ones. Keep smiling.",
  },
];

interface OpenWhenEnvelopesProps {
  items?: EnvelopeItem[];
}

export function OpenWhenEnvelopes({ items = envelopeItems }: OpenWhenEnvelopesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <motion.div
      className="w-full"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          Open when...
        </p>
        <h2 className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl">
          You need me
        </h2>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <EnvelopeCard
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            delay={index * 0.1}
          />
        ))}
      </div>

      <AnimatePresence>
        {openId && (
          <motion.div
            key="close-all"
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setOpenId(null)}
              className="rounded-full border border-white/60 bg-white/45 px-4 py-2 text-sm text-plum hover:bg-white/60"
            >
              Close all
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function EnvelopeCard({
  item,
  isOpen,
  onClick,
  delay,
}: {
  item: EnvelopeItem;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`relative rounded-[20px] border-2 border-dashed border-white/60 bg-gradient-to-br from-rose-50/80 via-white/60 to-violet-50/70 p-5 text-center shadow-card transition-all duration-300 ${
          isOpen ? "border-solid border-rose-200/50" : "hover:border-rose-200/40"
        }`}
        onClick={onClick}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        layout
      >
        <motion.div
          className="mb-3 text-3xl"
          animate={{
            y: isOpen ? [0, -10, 0] : [0, -3, 0],
            rotate: isOpen ? [0, -5, 0] : [0, 2, -2, 0],
          }}
          transition={{
            y: { duration: isOpen ? 0.5 : 2, repeat: isOpen ? 1 : Infinity },
            rotate: { duration: isOpen ? 0.5 : 3, repeat: isOpen ? 1 : Infinity },
          }}
        >
          {item.emoji}
        </motion.div>

        <motion.h3
          className="font-body text-sm font-semibold text-plum"
          animate={{ color: isOpen ? "#be123c" : "#3d2a36" }}
        >
          {item.text}
        </motion.h3>

        <motion.div
          className="mt-2 text-xs text-plumSoft/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
        >
          (click to open)
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-[20px] bg-white/70 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.p
                className="font-body text-sm leading-relaxed text-plumSoft"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {item.message}
              </motion.p>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="mt-4 text-xs text-plumSoft/50 hover:text-plum"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                ← Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 text-yellow-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ✨
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
