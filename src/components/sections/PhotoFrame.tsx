import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

export function PhotoFrame() {
  return (
    <motion.div
      className="w-full"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
          Because I never want to forget this face
        </p>
        <h2 className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl">
          My bestie
        </h2>
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
      >
        <div className="relative">
          <motion.div
            className="relative rounded-[20px] p-3 shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, #fff 0%, #fdf6f8 50%, #f0e6ff 100%)",
            }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute -top-2 -right-2 text-xl opacity-60"
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              📎
            </motion.div>

            <motion.div
              className="absolute -bottom-1 -left-1 text-sm opacity-40"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ❤️
            </motion.div>

            <motion.img
              src="/bestie.png"
              alt="My bestie"
              className="w-64 rounded-[16px] shadow-inner sm:w-72 md:w-80"
              style={{
                objectFit: "cover",
                maxHeight: "500px",
                aspectRatio: "3/4",
              }}
              loading="lazy"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-200 to-violet-200 px-4 py-1.5 text-xs font-medium text-plum"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Best friends since forever
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
