
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const wordVariants: Variants = {
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

const cardEntryVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(15px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: `"VoyageAI is the first tool that actually understands the complexity of luxury travel. It synchronized my entire Maldives journey flawlessly."`,
    name: "Sarah Jenkins",
    role: "Global Director",
    initials: "SJ"
  },
  {
    quote: `"The AI extraction felt like magic. It pulled data from 14 different confirmation formats and built a perfect map of my Asia tour."`,
    name: "Michael Chen",
    role: "Tech Lead",
    initials: "MC"
  },
  {
    quote: `"Finally, a travel experience that matches the aesthetic of the places I visit. Beautiful, functional, and indispensable."`,
    name: "Elena Rodriguez",
    role: "Vogue Contributor",
    initials: "ER"
  }
];

const TestimonialsSection = () => {
  // Explicitly typed layout reference for perfect type matching
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const headingStart = "The choice of".split(" ");
  const headingEnd = "travelers".split(" ");

  return (
    <section 
      id="testimonial"
      ref={sectionRef}
      className="w-full bg-[#11997E] py-24 px-6 sm:px-12 lg:px-16 flex items-center justify-center select-none overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
      <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-white/5 rounded-[100%] blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10">

        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 flex flex-wrap justify-center gap-x-[0.25em] leading-tight"
        >
          {headingStart.map((word, i) => (
            <motion.span key={`start-${i}`} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordVariants} className="text-[#7EFAD6] inline-block">
            premium
          </motion.span>
          {headingEnd.map((word, i) => (
            <motion.span key={`end-${i}`} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardEntryVariants}
              className="will-change-transform"
            >
              <motion.div
                animate={
                  isInView
                    ? {
                        y: index % 2 === 0 ? [0, -10, 4, -10, 0] : [0, -6, 5, -6, 0],
                        x: index % 3 === 0 ? [0, 3, -3, 2, 0] : [0, -3, 2, -1, 0],
                        rotate: index % 2 === 0 ? [0, 0.4, -0.3, 0] : [0, -0.3, 0.4, 0]
                      }
                    : { y: 0, x: 0, rotate: 0 }
                }
                transition={{
                  y: { repeat: Infinity, duration: 6 + index, ease: "easeInOut" },
                  x: { repeat: Infinity, duration: 6.5 + index, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 7 + index, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="h-full bg-[#E5F4F1] text-zinc-800 rounded-[32px] p-8 md:p-10 shadow-lg flex flex-col justify-between border border-white/20 will-change-transform"
              >
                <p className="text-gray-700 text-base md:text-lg italic leading-relaxed font-medium mb-12">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-[#B2DDD5] text-[#11997E] rounded-full flex items-center justify-center font-bold text-sm tracking-wide shadow-inner shrink-0">
                    {item.initials}
                  </div>
          
                  <div>
                    <h4 className="font-bold text-zinc-900 text-base leading-tight">{item.name}</h4>
                    <p className="text-xs font-semibold text-zinc-500 mt-0.5 tracking-wide">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;