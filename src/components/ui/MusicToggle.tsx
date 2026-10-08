import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2, VolumeX, Volume2 } from "lucide-react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio play failed:", error);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <motion.button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-200/60 via-pink-200/50 to-violet-200/60 shadow-xl backdrop-blur-md border border-white/60"
          animate={{
            boxShadow: isPlaying
              ? [
                  "0 0 20px rgba(217,137,166,0.4)",
                  "0 0 30px rgba(217,137,166,0.6)",
                  "0 0 20px rgba(217,137,166,0.4)",
                ]
              : "0 8px 24px rgba(103,72,81,0.15)",
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isPlaying ? (
            <motion.div className="flex items-center justify-center">
              <Music2 className="h-6 w-6 fill-plum" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-rose-300/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <Music className="h-6 w-6 fill-plum" />
          )}
        </motion.div>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              key="tooltip"
              className="absolute bottom-full right-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-xs font-medium text-white bg-plum/90 rounded-full shadow-lg backdrop-blur-sm whitespace-nowrap"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isPlaying ? "Pause music" : "Play soft music"}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {isPlaying && (
        <motion.div
          className="absolute -top-2 -left-2 h-18 w-18 rounded-full bg-gradient-to-r from-rose-300/20 to-violet-300/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}