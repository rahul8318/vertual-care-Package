import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Droplets,
  HandHeart,
  Heart,
  MoonStar,
  NotebookPen,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

type Mood = "good" | "meh" | "exhausted" | "irritated";

const careCards = [
  { icon: Droplets, title: "Drink some water" },
  { icon: MoonStar, title: "Get some rest" },
  { icon: Heart, title: "Have something you love" },
  { icon: HandHeart, title: "Remember you're not alone" },
];

const moodResponses: Record<Mood, string> = {
  good: "Okayyy, we love to see it ❤️",
  meh: "That's okay. Today can just be a meh day.",
  exhausted: "Then rest. Everything else can wait.",
  irritated: "Understood. I will be annoying from a safe distance 😂❤️",
};

const floatingHearts = [
  { left: "8%", top: "12%", size: 20, delay: 0.6 },
  { left: "25%", top: "65%", size: 18, delay: 1.2 },
  { left: "48%", top: "18%", size: 16, delay: 1.8 },
  { left: "72%", top: "72%", size: 20, delay: 0.9 },
  { left: "86%", top: "25%", size: 14, delay: 2.4 },
];

const scrollReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
};

function App() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [hugOpen, setHugOpen] = useState(false);
  const [promiseMade, setPromiseMade] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-plum">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
        {floatingHearts.map((heart, index) => (
          <motion.div
            key={index}
            className="absolute text-pink-300/70"
            style={{ left: heart.left, top: heart.top, fontSize: heart.size }}
            animate={{ y: [0, -12, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] border border-white/60 bg-white/45 p-5 shadow-soft backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 via-white/20 to-pink-50/40" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-plumSoft"
              >
                <Sparkles className="h-3.5 w-3.5 text-rose-400" />
                virtual care package
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="font-display text-4xl leading-[0.95] text-plum sm:text-5xl lg:text-6xl"
              >
                Hey bestie, take care of yourself today. ❤️
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.7 }}
                className="mt-5 max-w-md text-base leading-7 text-plumSoft sm:text-lg"
              >
                I wish I could be there right now...
                <br />
                so I made this little corner for you instead.
              </motion.p>

              <motion.a
                href="#message"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.7 }}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300 px-5 py-3 text-sm font-semibold text-plum shadow-card transition hover:scale-[1.02]"
              >
                Open your little care package
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center sm:h-[320px] sm:w-[320px]"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[32%] bg-gradient-to-br from-pink-100 via-rose-100 to-violet-100 shadow-soft"
              />
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-8 rounded-[36%] border border-white/80 bg-white/30 backdrop-blur-sm"
              />
              <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-white/85 via-pink-50/80 to-violet-50/70 shadow-inner sm:h-52 sm:w-52">
                <div className="absolute left-7 top-10 h-8 w-8 rounded-full bg-pink-200/80 blur-[2px]" />
                <div className="absolute right-9 top-12 h-7 w-7 rounded-full bg-violet-200/80 blur-[2px]" />
                <div className="absolute bottom-7 left-1/2 h-16 w-16 -translate-x-1/2 rounded-[40%] bg-gradient-to-b from-rose-200/90 to-pink-300/80" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <Heart className="h-16 w-16 fill-pink-300/80 text-pink-400 sm:h-20 sm:w-20" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="message"
          {...scrollReveal}
          className="mt-8 rounded-[30px] border border-white/60 bg-white/45 p-5 shadow-card backdrop-blur-md sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2 text-pink-500">
            <NotebookPen className="h-5 w-5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              A little message
            </p>
          </div>

          <h2 className="font-display text-4xl text-plum sm:text-5xl">
            A little message for you 💌
          </h2>

          <div className="mt-6 rounded-[26px] border border-pink-100 bg-gradient-to-br from-white/80 via-rose-50/60 to-violet-50/60 p-5 sm:p-7">
            <p className="text-base leading-8 text-plumSoft sm:text-lg">
              I know I&apos;m not there to bring you your favorite snacks, make
              you comfortable, or annoy you in person...
            </p>
            <p className="mt-4 text-base leading-8 text-plumSoft sm:text-lg">
              So consider this my virtual hug. 🫂
            </p>
            <p className="mt-4 text-base leading-8 text-plumSoft sm:text-lg">
              Rest when you need to. Eat something you like. Drink some water.
              Watch something comforting. And please don&apos;t feel guilty for
              taking it easy.
            </p>
            <p className="mt-4 text-base leading-8 text-plumSoft sm:text-lg">
              I&apos;ll be right here whenever you need me. ❤️
            </p>
            <p className="mt-7 font-display text-3xl italic text-rose-500">
              — Your annoying best friend
            </p>
          </div>
        </motion.section>

        <motion.section {...scrollReveal} className="mt-8">
          <div className="mb-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plumSoft">
              Today&apos;s mini care kit
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careCards.map(({ icon: Icon, title }) => (
              <motion.article
                key={title}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-[24px] border border-white/70 bg-white/55 p-5 shadow-card backdrop-blur-md"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-white/80 p-3 text-plum shadow-sm">
                  <Icon className="h-5 w-5 text-rose-400" />
                </div>
                <h3 className="text-lg font-bold text-plum">{title}</h3>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...scrollReveal}
          className="mt-10 rounded-[30px] border border-white/60 bg-white/45 p-5 shadow-card backdrop-blur-md sm:p-8"
        >
          <h2 className="text-center font-display text-4xl text-plum sm:text-5xl">
            How are we doing today?
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["good", "🥰 Good"],
                ["meh", "😐 Meh"],
                ["exhausted", "😩 Exhausted"],
                ["irritated", "😤 Irritated"],
              ] as [Mood, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMood(key)}
                className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all ${
                  mood === key
                    ? "border-rose-300 bg-gradient-to-r from-pink-100 to-violet-100 text-plum shadow-sm"
                    : "border-pink-100 bg-white/70 text-plumSoft hover:border-rose-200 hover:bg-pink-50/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {mood && (
              <motion.div
                key={mood}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 rounded-[24px] border border-rose-100 bg-gradient-to-r from-pink-50 to-violet-50 p-4 text-center text-base text-plumSoft sm:text-lg"
              >
                {moodResponses[mood]}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          {...scrollReveal}
          className="mt-10 rounded-[32px] border border-white/60 bg-gradient-to-br from-pink-50/80 via-white/50 to-violet-50/70 p-6 shadow-soft sm:p-8"
        >
          <div className="mx-auto max-w-xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plumSoft">
              Since I can&apos;t give you a real hug...
            </p>
            <motion.button
              type="button"
              onClick={() => setHugOpen(true)}
              whileTap={{ scale: 0.96 }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-violet-300 px-7 py-4 text-lg font-semibold text-plum shadow-card transition hover:scale-[1.02]"
            >
              🫂 Tap for a hug
            </motion.button>
          </div>

          <AnimatePresence>
            {hugOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="relative mt-8 overflow-hidden rounded-[28px] border border-rose-100 bg-white/60 p-6 text-center shadow-card"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {[...Array(18)].map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 60, x: 0, scale: 0.7 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: -120,
                        x: (index % 2 === 0 ? -1 : 1) * (index * 6),
                        scale: [0.7, 1, 0.8],
                      }}
                      transition={{
                        duration: 1.8 + index / 12,
                        ease: "easeOut",
                        delay: 0.1 * index,
                      }}
                      className="absolute text-xl text-pink-300"
                      style={{
                        left: `${10 + ((index * 7) % 80)}%`,
                        top: `${20 + ((index * 11) % 60)}%`,
                      }}
                    >
                      ♥
                    </motion.span>
                  ))}
                </div>

                <div className="relative">
                  <p className="text-xl font-semibold text-plum sm:text-2xl">
                    BIGGEST VIRTUAL HUG EVER ❤️
                  </p>
                  <p className="mt-3 text-sm text-plumSoft sm:text-base">
                    *okay, now imagine me annoying you until you smile* 😂
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          {...scrollReveal}
          className="mt-10 rounded-[30px] border border-white/60 bg-white/45 p-5 shadow-card backdrop-blur-md sm:p-8"
        >
          <h2 className="font-display text-4xl text-plum sm:text-5xl">
            Now promise me one thing...
          </h2>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setPromiseMade(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-200 via-pink-200 to-violet-200 px-6 py-3 text-sm font-semibold text-plum shadow-card transition hover:scale-[1.02]"
            >
              I promise ❤️
            </button>
          </div>

          <AnimatePresence>
            {promiseMade && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 rounded-[22px] border border-rose-100 bg-gradient-to-br from-pink-50/80 to-violet-50/70 p-5 text-center text-base leading-8 text-plumSoft sm:text-lg"
              >
                <p>
                  Good. Now get cozy, drink some water, and take care of
                  yourself.
                </p>
                <p className="mt-4">And remember...</p>
                <p>Distance doesn&apos;t mean you&apos;re alone. ❤️</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          {...scrollReveal}
          className="mt-10 rounded-[30px] border border-white/60 bg-gradient-to-r from-pink-50/80 via-rose-50/70 to-violet-50/80 p-5 shadow-soft sm:p-8"
        >
          <div className="flex flex-col gap-4">
            {[
              "A peaceful day",
              "Your favorite food",
              "A comfortable bed",
              "Zero stress",
              "Someone who listens",
              "Lots of rest",
              "Random memes",
              "A really good sleep",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-white/80 p-2 text-pink-500 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base leading-8 text-plumSoft sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-10 pb-4 text-center text-sm text-plumSoft"
        >
          <p>Made with lots of care by your best friend.</p>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;
