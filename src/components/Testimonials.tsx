import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const testimonialsData = [
  {
    text: "Partnering with AILife was a game-changer. Their innovative solutions and continuous support made all the difference.",
    client: 'Client 1',
    company: 'Leading Tech Firm',
    img: 'https://i.pravatar.cc/60?img=10',
  },
  {
    text: 'A professional team with a clear vision for the future of AI. I highly recommend them.',
    client: 'Client 2',
    company: 'Financial Institution',
    img: 'https://i.pravatar.cc/60?img=11',
  },
  {
    text: 'The results exceeded our expectations. AILife was a smart investment.',
    client: 'Client 3',
    company: 'E-commerce Company',
    img: 'https://i.pravatar.cc/60?img=12',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-950">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            What Our Clients Say
          </h3>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
            Feedback from our partners about their experience working with us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.15} direction="up">
              <motion.div
                className="bg-neutral-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl shadow-soft hover:shadow-glow-dark transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-accent-400 text-2xl mb-4">★★★★★</div>
                <p className="text-neutral-300 mb-4">{item.text}</p>
                <div className="flex items-center gap-3">
                  <img src={item.img} alt={item.client} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-white">{item.client}</p>
                    <p className="text-sm text-neutral-400">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;