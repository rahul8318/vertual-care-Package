import { motion, AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./components/layout/Background";
import { SectionWrapper } from "./components/layout/SectionWrapper";
import { Hero } from "./components/sections/Hero";
import { EmotionalMessage } from "./components/sections/EmotionalMessage";
import { TakeCareChecklist } from "./components/sections/TakeCareChecklist";
import { DeepestMessage } from "./components/sections/DeepestMessage";
import { BadDaySupport } from "./components/sections/BadDaySupport";
import { RandomCareMessage } from "./components/sections/RandomCareMessage";
import { MemoryHeart } from "./components/sections/MemoryHeart";
import { FinalPromise } from "./components/sections/FinalPromise";
import { MusicToggle } from "./components/ui/MusicToggle";
import { scrollReveal } from "./components/animations/variants";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-plum">
      <AnimatedBackground />
      <MusicToggle />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            <SectionWrapper delay={0.05}>
              <EmotionalMessage />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <TakeCareChecklist />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <DeepestMessage />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <BadDaySupport />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <RandomCareMessage />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <MemoryHeart />
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <FinalPromise />
            </SectionWrapper>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;