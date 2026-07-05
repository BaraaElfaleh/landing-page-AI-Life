import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get in Touch
          </h3>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
            Have a project or idea? We're here to help. Reach out to our team today.
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <AnimatedSection direction="left" className="flex-1">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-4 rounded-full text-primary-400 text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <p className="text-neutral-400">info@ailife.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-500/20 p-4 rounded-full text-primary-400 text-2xl">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <p className="text-neutral-400">+966 55 123 4567</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="bg-neutral-800 p-3 rounded-full text-2xl text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-300">
                  <FaGithub />
                </a>
                <a href="#" className="bg-neutral-800 p-3 rounded-full text-2xl text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-300">
                  <FaLinkedin />
                </a>
                <a href="#" className="bg-neutral-800 p-3 rounded-full text-2xl text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-300">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="flex-1">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-white/10 bg-neutral-800/50 backdrop-blur-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-white/10 bg-neutral-800/50 backdrop-blur-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 rounded-xl border border-white/10 bg-neutral-800/50 backdrop-blur-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 outline-none transition"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;