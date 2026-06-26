
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
    y: 20,
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
  hidden: { opacity: 0, y: 25, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const HowItWorksSection = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const titleText = "Ready to travel".split(" ");

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#EAF1FF] py-24 px-6 sm:px-12 lg:px-16 flex items-center justify-center select-none"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={
          isInView 
            ? { 
                y: [0, -10, 4, -10, 0], 
                x: [0, 3, -3, 1, 0],
                rotate: [0, 0.3, -0.3, 0]
              } 
            : { y: 0, x: 0, rotate: 0 }
        }
        transition={{
          y: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
          x: { repeat: Infinity, duration: 7.5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 8.5, ease: "easeInOut" }
        }}
        className="w-full max-w-7xl bg-gradient-to-br from-[#20354B] to-[#142232] text-white rounded-[32px] px-8 py-16 md:py-24 text-center shadow-xl relative overflow-hidden will-change-transform"
      >
 -
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
    
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-[0.25em] leading-tight">
            {titleText.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordVariants} className="text-[#7EFAD6] inline-block">
              smarter?
            </motion.span>
          </h2>

          <motion.p 
            variants={elementFadeUp}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light"
          >
            Upload your first booking today and experience the future of travel planning. No credit card required.
          </motion.p>

          <motion.div 
            variants={elementFadeUp}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
          >
            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-[#7EFAD6] text-[#142232] font-semibold text-sm px-7 py-4 rounded-xl hover:bg-[#6be0be] transition-colors shadow-md"
            >
              Get Started for Free
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-[#2C3E52]/60 text-white font-medium text-sm px-8 py-4 rounded-xl border border-gray-600/30 hover:bg-[#2C3E52]/90 transition-colors backdrop-blur-md"
            >
              View Pricing
            </motion.button>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HowItWorksSection;