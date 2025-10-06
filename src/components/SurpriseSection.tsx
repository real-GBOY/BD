import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(236, 72, 153, 0.5)',
                    '0 0 60px rgba(236, 72, 153, 0.8)',
                    '0 0 20px rgba(236, 72, 153, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center"
              >
                <Heart className="w-16 h-16 md:w-20 md:h-20 text-white fill-white" />
              </motion.div>

              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 8) * 60,
                    y: Math.sin((i * Math.PI * 2) / 8) * 60,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            My Forever Prescription
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl text-white font-bold mb-12"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            A lifetime with you 💖
          </motion.p>

          {!revealed ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRevealed(true)}
              className="relative group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(236, 72, 153, 0.5)',
                    '0 10px 50px rgba(236, 72, 153, 0.8)',
                    '0 10px 30px rgba(236, 72, 153, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-12 py-6 rounded-full text-2xl font-bold flex items-center gap-4"
              >
                <Gift className="w-8 h-8" />
                Click for Your Gift
                <Gift className="w-8 h-8" />
              </motion.div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', bounce: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
                  <Sparkles className="w-12 h-12 text-yellow-500" />
                  <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-6"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                To My Beautiful Dr. Nour
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-700 space-y-4 leading-relaxed"
              >
                <p>
                  Every day with you is a gift. Your smile lights up my world, your laughter is my favorite sound,
                  and your love is my greatest treasure.
                </p>
                <p>
                  As you celebrate another year of being amazing, I want you to know that you make everything better.
                  Your dedication as a doctor inspires me, and your love makes me want to be better every day.
                </p>
                <p className="text-2xl font-bold text-pink-600">
                  Happy Birthday, my love! Here's to forever together. 💕
                </p>
                <p className="text-xl text-purple-600 italic">
                  P.S. This website was coded with love, just for you! 💻❤️
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
                  <p className="text-2xl font-bold text-gray-800 mb-2">Your Real Gift:</p>
                  <p className="text-lg text-gray-700">
                    Replace this text with your actual surprise! It could be:
                    <br />
                    🎁 A link to book a special dinner
                    <br />
                    ✈️ A surprise trip reveal
                    <br />
                    💎 A special gift waiting for her
                    <br />
                    Or anything else you have planned!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
