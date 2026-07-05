import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const teamData = [
  {
    name: 'Anas Elfaleh',
    role: 'Backend Engineer',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQF1pISASY6uhg/profile-displayphoto-scale_400_400/B56Z4XQbioH8Ak-/0/1778506646609?e=1784764800&v=beta&t=NHoUMerhl5vjFHHXhdXmowizZhsp0Z9KKTVtpRsFtiI', // استبدلها بالصورة الفعلية
    desc: '"Senior Backend Developer specialized in building scalable, secure, and maintainable server-side solutions. Expert in leveraging modern tech stacks to engineer efficient data pipelines and high-concurrency systems.',
  },
  {
    name: 'Othman Shbeir',
    role: 'AI Engineer',
    img: 'https://othman-shbeir.github.io/assets/img/prof_pic-480.webp',
    desc: 'Specialist in hybrid recommendation engines, NLP, and full‑stack AI applications.',
  },
  {
    name: 'Baraa Elfaleh',
    role: 'Frontend Developer',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQHAtUfCFRsxGg/profile-displayphoto-crop_800_800/B4DZ61c7STHcAM-/0/1781160724216?e=1784764800&v=beta&t=7uTLDpfzewn85Z9rJ-QQImhHu5zCw0VMRx50e56xYy8', // استبدلها بالصورة الفعلية
    desc: 'Crafts beautiful, interactive user interfaces with React, TypeScript, and modern animation libraries.',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-neutral-900">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Meet the Team
          </h3>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
            Three passionate tech enthusiasts driving innovation in AI and web development.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {teamData.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="text-center group"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-secondary-400 transition-colors duration-300 mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-primary-400 text-sm">{member.role}</p>
                <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;