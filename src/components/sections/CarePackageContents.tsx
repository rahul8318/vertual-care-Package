import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, scaleIn } from "../animations/variants";

export interface CareItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  content: ReactNode;
}

interface CarePackageContentsProps {
  items: CareItem[];
}

export function CarePackageContents({ items }: CarePackageContentsProps) {
  return (
    <motion.div
      className="w-full"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map((item) => (
        <CareItemCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
}

function CareItemCard({ item }: { item: CareItem }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`relative cursor-pointer rounded-[24px] border-2 border-dashed border-white/60 bg-white/30 p-5 transition-all duration-300 ${
          open
            ? "border-solid border-rose-200/50 bg-white/50"
            : "hover:border-rose-200/40 hover:bg-white/45"
        } sm:p-6`}
        onClick={() => setOpen(!open)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <div className="flex items-center gap-4">
          <motion.span
            className="text-3xl sm:text-4xl"
            animate={{ rotate: open ? 0 : [0, 5, -5, 0] }}
            transition={{ rotate: { duration: 0.5 } }}
          >
            {item.icon}
          </motion.span>
          <div className="flex-1">
            <h3 className="font-display text-xl text-plum sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-plumSoft/70 sm:text-base">
              {item.description}
            </p>
          </div>
          <motion.span
            className="text-2xl text-plumSoft/40"
            animate={{ rotate: open ? 180 : 0, opacity: open ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            ⌄
          </motion.span>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="content"
              className="mt-5 border-t border-white/40 pt-4"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-base text-plumSoft sm:text-lg">
                {item.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

