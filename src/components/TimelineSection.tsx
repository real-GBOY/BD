import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';
import { useRef } from 'react';

interface Moment {
  title: string;
  date: string;
  description: string;
  imagePlaceholder: string;
}

const moments: Moment[] = [
  {
    title: 'First Meeting',
    date: 'Day One',
    description: 'The day our story began. I knew there was something special about you from the very first moment.',
    imagePlaceholder: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'First Date',
    date: 'Unforgettable',
    description: 'Coffee turned into hours of conversation. Time just stopped when I was with you.',
    imagePlaceholder: 'https://images.pexels.com/photos/1415554/pexels-photo-1415554.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Special Adventure',
    date: 'Amazing Day',
    description: 'We explored new places together and created memories that will last forever.',
    imagePlaceholder: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'A Funny Memory',
    date: 'Laughter',
    description: 'Remember when we laughed until we cried? Your smile makes everything better.',
    imagePlaceholder: 'https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Growing Together',
    date: 'Every Day',
    description: 'Through challenges and celebrations, we keep growing stronger together.',
    imagePlaceholder: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Forever & Always',
    date: 'To Infinity',
    description: 'Here is to many more birthdays, adventures, and beautiful moments together.',
    imagePlaceholder: 'https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text mb-4">
            Our Love Timeline
          </h2>
          <p className="text-xl text-gray-600">Every moment with you is a treasure</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform -translate-x-1/2 hidden md:block" />

          {moments.map((moment, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: isLeft ? -2 : 2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <img
                      src={moment.imagePlaceholder}
                      alt={moment.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-pink-500 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">{moment.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg z-10"
                  >
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
