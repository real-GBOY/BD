import { motion } from 'framer-motion';
import { Heart, Cake } from 'lucide-react';
import { useEffect, useState } from 'react';

export const LandingSection = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setConfetti(confettiArray);

    const balloonColors = ['#FFB6C1', '#E6E6FA', '#B0E0E6', '#FFE4E1', '#F0E6FF'];
    const balloonArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
    }));
    setBalloons(balloonArray);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {confetti.map((item) => (
        <motion.div
          key={`confetti-${item.id}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${item.left}%`,
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {balloons.map((balloon) => (
        <motion.div
          key={`balloon-${balloon.id}`}
          className="absolute"
          style={{ left: `${balloon.left}%` }}
          initial={{ y: window.innerHeight + 50 }}
          animate={{ y: -100 }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-12 h-14 rounded-full shadow-lg relative"
            style={{ backgroundColor: balloon.color }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-400" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            <Cake className="w-14 h-14 text-purple-500" />
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-8 text-pink-600"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Dr. Nour
        </motion.h2>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            <span className="text-pink-500">Prescribed:</span> Endless love, happiness, and cake
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
