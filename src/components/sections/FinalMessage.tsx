import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

export function FinalMessage() {
  return (
    <motion.div
      className="w-full text-center"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          Until next time, bestie
        </p>
      </motion.div>

      <motion.h2
        className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        To more...
      </motion.h2>

      <motion.div
        className="mt-8 space-y-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        {[
          "More random conversations.",
          "More stupid jokes.",
          "More memories.",
          "More late-night talks.",
          "More chaos.",
          "More moments where we somehow",
          "understand each other without saying much.",
        ].map((item, index) => (
          <motion.p
            key={index}
            className="font-body text-sm text-plumSoft sm:text-lg"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
          >
            {item}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 font-display text-2xl text-rose-500 sm:text-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
      >
        And most importantly...
      </motion.div>
      <motion.div
        className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.6, type: "spring", stiffness: 200 }}
      >
        More us.
      </motion.div>

      <motion.div
        className="mt-12 border-t border-white/40 pt-8 text-center text-sm text-plumSoft"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Care package delivered successfully. ❤️
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
