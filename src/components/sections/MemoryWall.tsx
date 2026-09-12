import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../animations/variants";

export interface Memory {
  id: string;
  emoji: string;
  title: string;
  description: string;
  placeholder?: boolean;
}

const memories: Memory[] = [
  {
    id: "coffee",
    emoji: "☕",
    title: "That rainy Tuesday",
    description: "The day we decided to skip our plans and just sat in that tiny café, talking about everything and nothing. You stole my cookie and I 'accidentally' took a sip of your coffee. We were both too lazy to care. That's the kind of magic we make.",
  },
  {
    id: "midnight",
    emoji: "🌙",
    title: "3am conversations",
    description: "When the world is quiet and we're the only two people who matter. Those are the nights I feel like I truly know you. Like there's nothing we can't figure out together.",
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "Silly drives",
    description: "Driving around with nowhere to be, windows down, playing that song you pretend to hate but always sing along to. That's how I know you're home — you're always singing off-key.",
  },
  {
    id: "laugh",
    emoji: "😂",
    title: "Laughing until it hurt",
    description: "Remember when we laughed so hard we both snorted? And then we just kept going because apparently our sense of humor peaked at age 12. I'd pay anything to see you laugh like that again.",
  },
  {
    id: "support",
    emoji: "🤗",
    title: "Quiet support",
    description: "You never say much, but you always show up. Even when you had every reason to bail, you stayed. Even when you were struggling too, you checked on me. That's just who you are.",
  },
];

interface MemoryWallProps {
  memories?: Memory[];
}

export function MemoryWall({ memories: memoriesProp = memories }: MemoryWallProps) {
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
          A few of my favorite moments
        </p>
        <h2 className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl">
          Memory wall
        </h2>
      </motion.div>

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {memoriesProp.map((memory, index) => (
          <MemoryCard key={memory.id} memory={memory} delay={index * 0.15} />
        ))}
      </div>
    </motion.div>
  );
}

function MemoryCard({
  memory,
  delay,
}: {
  memory: Memory;
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative mb-4 cursor-pointer break-inside-avoid"
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ y: -3 }}
    >
      <motion.div
        className="relative rounded-[20px] border border-white/60 bg-white/45 p-4 shadow-card backdrop-blur-md transition-all duration-300"
        layout
      >
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <motion.span
                className="mb-3 text-3xl"
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              >
                {memory.emoji}
              </motion.span>
              <h3 className="font-display text-lg text-plum">{memory.title}</h3>
              <motion.p
                className="mt-2 text-xs text-plumSoft/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.1 }}
              >
                Tap to read
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="font-display text-center text-plum"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {memory.title}
              </motion.h3>
              <motion.p
                className="mt-3 text-sm leading-relaxed text-plumSoft"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {memory.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {!flipped && (
          <motion.div
            className="absolute -right-1 -top-1 text-xs"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💌
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-200 to-violet-200"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
      />
    </motion.div>
  );
}
