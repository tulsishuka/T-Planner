
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, 
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};


const elementFadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.15, once: false });

  return (
    <section
      ref={sectionRef}
      className="bg-[#EAF1FF] min-h-screen px-6 sm:px-12 lg:px-16 py-24 flex items-center justify-center select-none"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:col-span-7 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[380px]"
        >
          <div>
            <motion.div variants={elementFadeUp} className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-wrap gap-x-[0.25em]">
              {"Document Upload".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
              ))}
            </h3>
            
            <motion.p variants={elementFadeUp} className="text-gray-500 text-sm leading-relaxed max-w-md">
              Drag and drop any travel document—PDFs, PNGs, or confirmation emails. Our system processes them in real-time.
            </motion.p>
          </div>

          <motion.div 
            animate={{
              y: [0, -8, 3, -8, 0],
              x: [0, 3, -3, 1, 0]
            }}
            transition={{
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="mt-8 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 p-6 flex flex-col items-center justify-center text-center will-change-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-600 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            <span className="text-xs font-semibold text-gray-700">Drop your tickets here to start</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:col-span-5 bg-[#008066] text-white rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[380px]"
        >
          <div>
            <motion.div variants={elementFadeUp} className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              </svg>
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3 flex flex-wrap gap-x-[0.25em]">
              {"AI Extraction".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
              ))}
            </h3>
            
            <motion.p variants={elementFadeUp} className="text-emerald-100/80 text-sm leading-relaxed">
              Our LLMs instantly identify confirmation numbers, check-in times, and gate info with 99.9% accuracy.
            </motion.p>
          </div>

          <motion.div 
            animate={{
              y: [0, -10, 4, -10, 0],
              rotate: [0, 0.4, -0.4, 0]
            }}
            transition={{
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 7.5, ease: "easeInOut" }
            }}
            className="space-y-2.5 mt-8 will-change-transform"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center text-xs font-medium">
              <span className="mr-2 text-teal-300">✓</span> Found: Flight BA129 (LHR)
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center text-xs font-medium">
              <span className="mr-2 text-teal-300">✓</span> Found: Ace Hotel Tokyo
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[380px]"
        >
          <div>
            <motion.div variants={elementFadeUp} className="w-11 h-11 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15.187l5.096-.813L9 9.312l.813 5.062L15 15.188l-5.187.816Zm7.938-8.914L17 10.25l-.75-3.26-3.26-.75L16.25 5.5l.75-3.26.75 3.26 3.26.75-3.26.75Z" />
              </svg>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-wrap gap-x-[0.25em]">
              {"Smart Itinerary".split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
              ))}
            </h3>
            
            <motion.p variants={elementFadeUp} className="text-gray-500 text-sm leading-relaxed">
              Automatically maps out your days, suggests nearby dining, and syncs with your calendar.
            </motion.p>
          </div>

          <motion.div 
            animate={{
              y: [0, -6, 2, -6, 0],
              x: [0, -2, 2, -1, 0]
            }}
            transition={{
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="space-y-4 border-l border-gray-100 pl-4 ml-1 mt-8 will-change-transform"
          >
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-teal-600" />
              <p className="text-xs font-bold text-gray-900">10:00 AM — Arrive Narita Airport</p>
              <p className="text-[11px] text-gray-400">Train to Shinjuku: 1h 15m</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600" />
              <p className="text-xs font-bold text-gray-900">03:00 PM — Hotel Check-in</p>
              <p className="text-[11px] text-gray-400">Ace Hotel Shinjuku</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:col-span-7 bg-[#EBF0FF] rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 min-h-[380px]"
        >
          <div className="flex flex-col justify-between h-full max-w-xs w-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex flex-wrap gap-x-[0.25em]">
                {"Concierge Access".split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">{word}</motion.span>
                ))}
              </h3>
              
              <motion.p variants={elementFadeUp} className="text-gray-600 text-sm leading-relaxed">
                Real-time alerts for delays and gate changes, plus 24/7 AI chat support for on-the-go rebooking.
              </motion.p>
            </div>
            
            <motion.a 
              variants={elementFadeUp} 
              href="#learn-more" 
              className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline mt-6 md:mt-auto"
            >
              Learn more <span>→</span>
            </motion.a>
          </div>

          <motion.div 
            animate={{
              y: [0, -12, 4, -12, 0],
              x: [0, 4, -4, 2, 0],
              rotate: [0, 0.5, -0.5, 0]
            }}
            transition={{
              y: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[260px] md:max-w-none md:w-1/2 h-52 md:h-full bg-gray-300 rounded-2xl overflow-hidden shadow-inner will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80" 
              alt="Concierge App Mockup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <span className="text-xs font-medium text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                App Preview
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;