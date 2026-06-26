import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, FileText, Sparkles } from "lucide-react";
import { Link } from 'react-router-dom';
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
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const genericFadeUp = {
  hidden: { opacity: 0, y: 25, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const headingLine1 = "Turn Travel Bookings into".split(" ");
  const headingLine2 = "Intuitive AI Journeys".split(" ");

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-black flex items-center"
    >

      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.65) 30%, rgba(0,0,0,.3) 100%), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-0 py-20 min-h-screen flex flex-col justify-between">

        <div className="max-w-2xl my-auto space-y-6">

          <motion.div
            variants={genericFadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/50 border border-teal-500/20 text-teal-400 text-xs font-medium tracking-wide backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Elevating Global Exploration</span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.2] text-white flex flex-wrap gap-x-[0.25em]"
          >
            {headingLine1.map((word, idx) => (
              <motion.span key={idx} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-teal-400 flex flex-wrap gap-x-[0.25em]"
          >
            {headingLine2.map((word, idx) => (
              <motion.span key={idx} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            variants={genericFadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed max-w-xl block"
          >
            Stop managing scattered confirmation emails. Upload your travel
            documents and let our high-fidelity AI concierge craft a seamless,
            synchronized experience.
          </motion.p>

          <motion.div
            variants={genericFadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link to="register">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-xl"
            >
              <FileText className="w-5 h-5" />
              Start Your Journey
            </motion.button>
</Link>

           
          </motion.div>
        </div>

        <motion.div
          animate={{ 

            y: [0, -12, 4, -12, 0], 
            x: [0, 4, -4, 2, 0],
            rotate: [0, 0.5, -0.5, 0.3, 0]
          }}
          transition={{
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.03 }}
          className="self-end md:absolute md:bottom-12 md:right-16 mt-12 md:mt-0 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 max-w-sm w-full will-change-transform"
        >
          <div className="flex gap-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-teal-500 text-white p-3 rounded-full h-fit"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>

            <div className="flex-1">
              <h4 className="font-bold text-zinc-900">AI Extraction</h4>
              <p className="text-sm text-zinc-500 mt-1">Real-time processing...</p>

              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "82%" } : { width: 0 }}
                  transition={{ delay: 0.4, duration: 1.5 }} 
                  className="h-full rounded-full bg-teal-500"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-3 text-xs font-bold tracking-wider text-teal-700"
              >
                ✈ FLIGHT FOUND : QR729 (DOH)
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;