import { motion } from 'framer-motion';
import { Stethoscope, Heart, Pill, Calendar } from 'lucide-react';

export const PrescriptionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8 text-pink-300" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4">
            Medical Prescription
          </h2>
          <p className="text-xl text-gray-600">Doctor's orders for the birthday girl</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-4 border-pink-200"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 29px,
              rgba(219, 39, 119, 0.1) 29px,
              rgba(219, 39, 119, 0.1) 31px
            )`,
          }}
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-pink-300">
            <div>
              <h3 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Birthday Prescription
              </h3>
              <p className="text-gray-600 mt-1">From your loving programmer</p>
            </div>
            <Stethoscope className="w-12 h-12 text-pink-500" />
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg">
                  <span className="font-bold text-pink-600">Patient:</span>{' '}
                  <span className="text-gray-800 text-xl">Dr. Nour</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <Pill className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg">
                  <span className="font-bold text-purple-600">Diagnosis:</span>{' '}
                  <span className="text-gray-800 text-xl">Birthday Queen 👑</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg">
                  <span className="font-bold text-blue-600">Date:</span>{' '}
                  <span className="text-gray-800 text-xl">Today & Every Day</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Treatment Plan:</h4>
            <ul className="space-y-3 text-lg text-gray-700">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="text-pink-500 text-2xl">💖</span>
                <span>Unlimited love and affection (Daily dose)</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="text-purple-500 text-2xl">😄</span>
                <span>Endless laughter and joy (As needed)</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <span className="text-blue-500 text-2xl">🎂</span>
                <span>Birthday cake (Immediate consumption)</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-pink-500 text-2xl">✨</span>
                <span>Success and happiness (Lifetime supply)</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="text-purple-500 text-2xl">🌟</span>
                <span>Dreams coming true (All of them)</span>
              </motion.li>
            </ul>
          </div>

          <div className="border-t-2 border-pink-300 pt-6">
            <p className="text-gray-600 italic mb-4">
              Side effects may include: Constant smiling, feeling deeply loved, and being absolutely amazing.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-800">Prescribed by:</p>
                <p className="text-2xl text-pink-600" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Your Web Programmer ❤️
                </p>
              </div>
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl"
              >
                💕
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
