import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";
import type { ReactNode } from "react";

interface CareKitItem {
  icon: React.ReactNode;
  title: string;
}

const careKitItems: CareKitItem[] = [
  { icon: "💧", title: "Drink some water" },
  { icon: "🌙", title: "Get some rest" },
  { icon: "🍰", title: "Have something you love" },
  { icon: "🤗", title: "Remember you're not alone" },
];

export function CareKit() {
  return (
    <div>
      <h3 className="font-display text-xl text-plum sm:text-2xl">
        Today's mini care kit
      </h3>
      <p className="mt-2 text-sm text-plumSoft/70 sm:text-base">
        Small reminders for your day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {careKitItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-center rounded-[24px] border border-white/70 bg-white/55 p-5 text-center shadow-card backdrop-blur-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <motion.div
              className="mb-3 text-3xl"
              animate={{
                y: [0, -3, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {item.icon}
            </motion.div>

            <h4 className="font-display text-center text-lg text-plum">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

