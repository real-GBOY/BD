import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stethoscope } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface FallingHeart {
  id: number;
  x: number;
  speed: number;
}

export const MiniGame = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [stethoscopeX, setStethoscopeX] = useState(50);
  const [fallingHearts, setFallingHearts] = useState<FallingHeart[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const startGame = () => {
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    setTimeLeft(30);
    setFallingHearts([]);
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setFallingHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 90,
          speed: 2 + Math.random() * 2,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          setGameStarted(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const gameArea = document.getElementById('game-area');
      if (gameArea) {
        const rect = gameArea.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setStethoscopeX(Math.max(0, Math.min(90, x)));
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const gameArea = document.getElementById('game-area');
      if (gameArea && e.touches[0]) {
        const rect = gameArea.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        setStethoscopeX(Math.max(0, Math.min(90, x)));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gameStarted]);

  const checkCollision = useCallback((heartId: number, heartX: number) => {
    const distance = Math.abs(heartX - stethoscopeX);
    if (distance < 10) {
      setScore((prev) => prev + 1);
      setFallingHearts((prev) => prev.filter((h) => h.id !== heartId));
    }
  }, [stethoscopeX]);

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-4">
            Catch the Love!
          </h2>
          <p className="text-xl text-gray-600">Use your stethoscope to catch falling hearts</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto"
        >
          {!gameStarted && !gameOver && (
            <div className="text-center py-12">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-8"
              >
                <Heart className="w-24 h-24 text-pink-500 fill-pink-500 mx-auto" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to play?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Move your mouse or finger to catch as many hearts as you can in 30 seconds!
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={startGame}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg"
              >
                Start Game
              </motion.button>
            </div>
          )}

          {gameOver && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1 }}
                className="mb-6"
              >
                <Heart className="w-24 h-24 text-pink-500 fill-pink-500 mx-auto" />
              </motion.div>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Game Over!</h3>
              <p className="text-2xl text-pink-600 mb-2">You caught {score} hearts!</p>
              <p className="text-lg text-gray-600 mb-8">
                {score >= 30 ? "Amazing! You're a love expert! 💖" :
                 score >= 20 ? "Great job! You're full of love! 💕" :
                 score >= 10 ? "Nice! Keep spreading the love! ❤️" :
                 "Every heart counts! Try again! 💗"}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={startGame}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg"
              >
                Play Again
              </motion.button>
            </motion.div>
          )}

          {gameStarted && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="bg-pink-100 px-6 py-3 rounded-full">
                  <p className="text-2xl font-bold text-pink-600">Score: {score}</p>
                </div>
                <div className="bg-purple-100 px-6 py-3 rounded-full">
                  <p className="text-2xl font-bold text-purple-600">Time: {timeLeft}s</p>
                </div>
              </div>

              <div
                id="game-area"
                className="relative bg-gradient-to-b from-blue-100 to-pink-100 rounded-xl h-96 overflow-hidden border-4 border-pink-200"
              >
                <AnimatePresence>
                  {fallingHearts.map((heart) => (
                    <motion.div
                      key={heart.id}
                      className="absolute"
                      style={{ left: `${heart.x}%` }}
                      initial={{ y: -50 }}
                      animate={{ y: 450 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: heart.speed,
                        ease: 'linear',
                      }}
                      onUpdate={(latest: any) => {
                        if (latest.y > 350 && latest.y < 380) {
                          checkCollision(heart.id, heart.x);
                        }
                      }}
                    >
                      <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                    </motion.div>
                  ))}
                </AnimatePresence>

                <motion.div
                  className="absolute bottom-4"
                  style={{ left: `${stethoscopeX}%` }}
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Stethoscope className="w-12 h-12 text-blue-600" />
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
