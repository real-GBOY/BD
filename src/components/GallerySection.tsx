import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Play } from 'lucide-react';
import { useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beautiful Moment 1',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beautiful Moment 2',
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/video/76979871',
    thumbnail: 'https://images.pexels.com/photos/1415554/pexels-photo-1415554.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Special Video 1',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beautiful Moment 3',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beautiful Moment 4',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beautiful Moment 5',
  },
];

export const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Camera className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-4">
            Our Memories
          </h2>
          <p className="text-xl text-gray-600">A collection of our favorite moments together</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-8 h-8 text-pink-600 ml-1" />
                    </motion.div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                onClick={() => setSelectedMedia(null)}
              >
                <X className="w-6 h-6 text-gray-800" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src={selectedMedia.url}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="bg-white p-4">
                  <p className="text-xl font-semibold text-gray-800">{selectedMedia.title}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
