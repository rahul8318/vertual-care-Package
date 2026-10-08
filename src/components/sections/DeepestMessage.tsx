import { motion } from "framer-motion";
import { Heart, Moon, Star } from "lucide-react";

const lines = [
  "I don't know if I say it enough&hellip;",
  "",
  "but your existence in my life is something I will always be grateful for.",
  "",
  "You have a very special place in my heart.",
  "",
  "And no matter how busy life gets, no matter how much things change, I will always want you to be okay.",
  "",
  "So please&hellip;",
  "",
  "eat properly.",
  "sleep properly.",
  "take care of your beautiful heart.",
  "don't be too hard on yourself.",
  "",
  "Because you matter.",
  "",
  "A lot.",
  "",
  "More than words can ever explain. ❤️",
];

export function DeepestMessage() {
  return (
    <motion.section
      className="relative py-20 px-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/80 to-plum/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-violet-900/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%20fill%3D%22%23ffcccc%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')]" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`deep-star-${i}`}
          className="absolute text-rose-200/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${2 + Math.random() * 3}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <Star className="h-full w-full fill-current" />
        </motion.div>
      ))}

      <motion.div
        className="absolute top-10 right-10 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-rose-400/10 to-violet-400/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 left-10 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-violet-400/10 to-rose-400/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="flex items-center gap-2 text-rose-300/80">
            <motion.span
              className="h-5 w-5"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Moon className="h-full w-full fill-current" />
            </motion.span>
            <motion.span
              className="h-5 w-5"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Star className="h-full w-full fill-current" />
            </motion.span>
            <motion.span
              className="h-5 w-5"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <Moon className="h-full w-full fill-current" />
            </motion.span>
          </motion.div>
          <motion.div
            className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        <motion.h2
          className="font-display text-2xl text-white sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          You Mean More Than You Know.
        </motion.h2>

        <motion.div
          className="mt-6 space-y-2.5 text-sm leading-relaxed text-rose-50 sm:text-base lg:text-lg xl:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className={line === "" ? "h-3" : "text-center"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {line && (
                <>
                  {index === 7 && (
                    <span className="font-semibold text-rose-300">So please&hellip;</span>
                  )}
                  {(index >= 9 && index <= 12) && (
                    <span className="font-medium text-white">{line}</span>
                  )}
                  {index === 14 && <span className="font-semibold text-rose-300">Because you matter.</span>}
                  {index === 16 && <span className="font-display text-xl text-rose-300">A lot.</span>}
                  {index === 18 && (
                    <span className="font-body text-rose-200/80">More than words can ever explain. ❤️</span>
                  )}
                  {(index !== 7 && index !== 9 && index !== 10 && index !== 11 && index !== 12 && index !== 14 && index !== 16 && index !== 18 && line !== "") && (
                    <span className="text-rose-100">{line}</span>
                  )}
                </>
              )}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="h-5 w-5"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Heart className="h-full w-full fill-rose-300/80" />
          </motion.span>
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}