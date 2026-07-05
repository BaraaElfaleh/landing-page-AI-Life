import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const [text] = useTypewriter({
    words: ['recommendation systems', 'RAG pipelines', 'LLMs', 'text‑to‑speech'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="relative w-full h-dvh lg:h-screen overflow-hidden bg-neutral-950"
    >
      {/* Particles – no interactivity, quiet ambient motion */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-10"
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#2dd4bf', '#22d3ee', '#14b8a6'] },
            shape: { type: 'circle' },
            opacity: {
              value: 0.3,
              random: true,
              anim: { enable: true, speed: 0.8, opacity_min: 0.1 },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 1, size_min: 0.5 },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
            // No interactivity – particles won’t react to mouse or text changes
          },
          retina_detect: true,
        }}
      />

      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, -30, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-primary-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary-500/15 blur-[100px]"
        />
      </div>

      {/* Side image (unchanged) */}
      <div className="absolute inset-0 z-20 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-end p-8 lg:p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative w-20 h-20 mt-16 ml-auto rounded-full border border-white/10 overflow-hidden shadow-2xl shadow-primary-500/10 lg:w-[45%] lg:h-full lg:mt-0 lg:ml-0 lg:rounded-none lg:border-0 lg:overflow-visible"
        >
         
          <div className="absolute inset-0 lg:hidden bg-gradient-to-tr from-primary-500/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Text content – smaller fonts, AI Life focused */}
      <div className="relative z-30 h-full container mx-auto px-6 lg:px-20 flex items-center pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-[10px] font-medium text-white/70 uppercase tracking-widest">
                AI Life – Smart Solutions
              </span>
            </div>
          </motion.div>

          {/* Headline – reduced size */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-6 text-white"
          >
            Building{' '}
            <span className="italic font-serif bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor cursorColor="#2dd4bf" cursorStyle="|" />
            <br />
            solutions that change the game.
          </motion.h1>

          {/* Description – smaller text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-gray-400 text-base md:text-lg max-w-md mb-8 font-light leading-relaxed"
          >
            We deliver cutting‑edge recommendation engines, retrieval‑augmented generation (RAG), large language models, and voice AI to empower your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-8 md:gap-12"
          >
            <a
              href="#services"
              className="group relative flex items-center gap-4 py-2"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:border-primary-500 transition-colors duration-500">
                <FaArrowRight className="w-5 h-5 text-white group-hover:text-primary-400 transition-transform duration-500 group-hover:translate-x-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.2em] text-white">
                  GET STARTED
                </span>
                <span className="h-px w-0 bg-primary-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>

           
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] text-white/30 font-medium tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/10 flex justify-center p-1.5 relative">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-primary-500"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary-500/20 to-transparent opacity-50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;