import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const floatingHearts = [
  { left: "8%", top: "12%", size: 20, delay: 0.6, duration: 16 },
  { left: "25%", top: "65%", size: 18, delay: 1.2, duration: 18 },
  { left: "48%", top: "18%", size: 16, delay: 1.8, duration: 20 },
  { left: "72%", top: "72%", size: 20, delay: 0.9, duration: 17 },
  { left: "86%", top: "25%", size: 14, delay: 2.4, duration: 19 },
];

export function VirtualHug() {
  const [hugged, setHugged] = useState(false);

  return (
    <div>
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        Need a hug?
      </h3>
      <p className="mt-2 text-sm text-plumSoft/70 sm:text-base">
        I can't be there in person, but this works almost as well.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center">
        <motion.button
          onClick={() => setHugged(true)}
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300 px-7 py-4 text-lg font-semibold text-plum shadow-card transition hover:scale-[1.02]"
          whileTap={{ scale: 0.94 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          disabled={hugged}
        >
          <span>🫂</span>
          Tap for a hug
        </motion.button>

        {hugged && (
          <motion.div
            className="pointer-events-none absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {floatingHearts.map((heart, index) => (
              <motion.span
                key={index}
                className="absolute text-pink-300/70"
                style={{ left: heart.left, top: heart.top, fontSize: heart.size }}
                initial={{
                  opacity: 1,
                  scale: 0.5,
                  y: 0,
                  x: 0,
                }}
                animate={{
                  opacity: [1, 0],
                  scale: [0.5, 1.2],
                  y: -100,
                  x: (Math.random() - 0.5) * 60,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 1.8 + index / 3,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <Heart className="h-full w-full fill-current" />
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {hugged && (
          <motion.div
            key="result"
            className="mt-6 rounded-[22px] border border-rose-100 bg-gradient-to-r from-pink-50 to-violet-50 p-5 text-center"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-display text-xl text-plum">
              BIGGEST VIRTUAL HUG EVER ❤️
            </p>
            <p className="mt-2 text-sm text-plumSoft">
              *okay, now imagine me annoying you until you smile* 😂
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
