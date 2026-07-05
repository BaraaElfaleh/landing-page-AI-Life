import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaLightbulb, FaSearch, FaRobot, FaVolumeUp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const servicesData = [
  {
    icon: <FaLightbulb />,
    title: 'Recommendation Systems',
    desc: 'Hybrid engines blending collaborative filtering, content analysis, and popularity signals for personalized discovery.',
  },
  {
    icon: <FaSearch />, 
    title: 'Retrieval-Augmented Generation',
    desc: 'Enhance LLMs with live external knowledge retrieval for precise, context‑aware answers.',
  },
  {
    icon: <FaRobot />,
    title: 'Large Language Models',
    desc: 'Fine‑tuned and prompt‑engineered models for chat, summarization, code generation, and creative tasks.',
  },
  {
    icon: <FaVolumeUp />,
    title: 'Text‑to‑Speech Models',
    desc: 'Natural, expressive speech synthesis for voice assistants, audiobooks, and accessibility solutions.',
  },
];

// مكون البطاقة مع تأثير ثلاثي الأبعاد (Tilt) – تم حذف المتغير غير المستخدم index
const ServiceCard: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className={`bg-neutral-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl shadow-soft h-full flex flex-col items-center text-center transition-all duration-500 ${
          isHovered ? 'border-primary-500/50 shadow-glow-dark' : ''
        }`}
        style={{
          background: isHovered
            ? `radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.15) 0%, transparent 70%)`
            : undefined,
        }}
      >
        <div className="text-5xl text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
        <p className="text-neutral-400 flex-1">{service.desc}</p>
        
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection direction="up">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Core AI Services
          </h3>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
            Specialized machine learning solutions from personalized recommendations to generative language and speech systems.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up" className="h-full">
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;