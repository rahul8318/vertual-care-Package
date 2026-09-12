import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./components/layout/Background";
import { SectionWrapper } from "./components/layout/SectionWrapper";
import { PackageIntro, PackageOpening } from "./components/package/PackageIntro";
import { ThenVsNow } from "./components/package/ThenVsNow";
import { CarePackageContents, CareItem } from "./components/sections/CarePackageContents";
import { OpenWhenEnvelopes } from "./components/sections/OpenWhenEnvelopes";
import { Reminders } from "./components/sections/Reminders";
import { MemoryWall } from "./components/sections/MemoryWall";
import { YouKnowWhat } from "./components/sections/YouKnowWhat";
import { BestieMeter } from "./components/sections/BestieMeter";
import { SurpriseButton } from "./components/sections/SurpriseButton";
import { FinalMessage } from "./components/sections/FinalMessage";
import { MoodSelector } from "./components/sections/MoodSelector";
import { VirtualHug } from "./components/sections/VirtualHug";
import { PromiseCard } from "./components/sections/PromiseCard";
import { CareKit } from "./components/sections/CareKit";
import { PeacefulDayChecklist } from "./components/sections/PeacefulDayChecklist";
import { EmergencyChocolate } from "./components/sections/EmergencyChocolate";

type Stage = "landing" | "opening" | "main";

const careItems: CareItem[] = [
  {
    id: "letter",
    icon: "💌",
    title: "A Letter",
    description: "A personal message just for you.",
    content: (
      <p className="leading-relaxed">
        I know I'm not there to bring you your favorite snacks, make you
        comfortable, or annoy you in person...
        <br />
        <br />
        So consider this my virtual hug. 🫂
        <br />
        <br />
        Rest when you need to. Eat something you like. Drink some water.
        Watch something comforting. And please don't feel guilty for taking
        it easy.
        <br />
        <br />
        I'll be right here whenever you need me. ❤️
        <br />
        <br />
        — Your annoying best friend
      </p>
    ),
  },
  {
    id: "hug",
    icon: "🫂",
    title: "A Hug",
    description: "Sometimes you just need one.",
    content: <VirtualHug />,
  },
  {
    id: "reminder",
    icon: "☕",
    title: "A Little Reminder",
    description: "Small things that matter.",
    content: (
      <div className="space-y-4">
        <CareKit />
        <PeacefulDayChecklist />
      </div>
    ),
  },
  {
    id: "chocolate",
    icon: "🍫",
    title: "Emergency Chocolate",
    description: "For urgent emotional support.",
    content: <EmergencyChocolate />,
  },
  {
    id: "comfort",
    icon: "🌙",
    title: "Comfort Corner",
    description: "How are you feeling today?",
    content: <MoodSelector />,
  },
  {
    id: "promise",
    icon: "💖",
    title: "Something Special",
    description: "A promise from me to you.",
    content: <PromiseCard />,
  },
];

function App() {
  const [stage, setStage] = useState<Stage>("landing");

  useEffect(() => {
    if (stage === "opening") {
      const timer = setTimeout(() => {
        setStage("main");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-plum">
      <AnimatedBackground />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {stage === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PackageIntro onOpen={() => setStage("opening")} />
            </motion.div>
          )}

          {stage === "opening" && (
            <motion.div key="opening" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <PackageOpening onComplete={() => setStage("main")} />
            </motion.div>
          )}

          {stage === "main" && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MainContent />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function MainContent() {
  return (
    <>
      {/* Hero with updated message */}
      <SectionWrapper className="pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-body text-sm uppercase tracking-[0.3em] text-plumSoft/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your care package, v2
          </motion.p>

          <motion.h1
            className="font-display text-4xl leading-[0.95] text-plum sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hey bestie, take care of yourself today. ❤️
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-md text-base text-plumSoft sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I wish I could be there right now...
            <br />
            so I made another little corner for you instead.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* Then vs Now */}
      <SectionWrapper delay={0.1}>
        <ThenVsNow />
      </SectionWrapper>

      {/* Care Package Contents */}
      <SectionWrapper delay={0.15}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-plumSoft/60">
            Inside the package
          </p>
          <h2 className="font-display text-3xl text-plum sm:text-4xl lg:text-5xl">
            What's inside
          </h2>
        </motion.div>

        <div className="mt-10">
          <CarePackageContents items={careItems} />
        </div>
      </SectionWrapper>

      {/* Open When Envelopes */}
      <SectionWrapper delay={0.15}>
        <OpenWhenEnvelopes />
      </SectionWrapper>

      {/* Reminders */}
      <SectionWrapper delay={0.15}>
        <Reminders />
      </SectionWrapper>

      {/* Memory Wall */}
      <SectionWrapper delay={0.15}>
        <MemoryWall />
      </SectionWrapper>

      {/* You Know What */}
      <SectionWrapper delay={0.15}>
        <YouKnowWhat />
      </SectionWrapper>

      {/* Bestie Meter */}
      <SectionWrapper delay={0.15}>
        <BestieMeter />
      </SectionWrapper>

      {/* Surprise Button */}
      <SectionWrapper delay={0.15}>
        <SurpriseButton />
      </SectionWrapper>

      {/* Final Message */}
      <SectionWrapper delay={0.15}>
        <FinalMessage />
      </SectionWrapper>
    </>
  );
}

export default App;
