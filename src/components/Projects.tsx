import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFilm,
  FaPlay,
  FaLaptop,
  FaTimes,
  FaExternalLinkAlt,
  FaBookOpen,
  FaDatabase,
  FaCode,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const projectsData = [
  {
    id: 1,
    title: 'Movies Hybrid Recommendation System',
    desc: 'Content + Collaborative Filtering with IMDb‑weighted rating and recency boost, tested on MovieLens metadata.',
    icon: <FaFilm />,
    details:
      'Overview: A two‑part project that builds a movie recommender from the ground up.\n\n' +
      'Part 1 crafts a content‑based system on TMDB (genres, keywords, cast, crew, overview) using TF‑IDF/CountVectorizer and cosine similarity.\n' +
      'Part 2 upgrades to an improved hybrid: blends Surprise SVD (collaborative filtering) with IMDb‑style weighted rating and a light recency boost, then validates on the larger MovieLens metadata.\n\n' +
      'Key features: cold‑start handling, explainability (similarity + popularity + recency + SVD scores), and a tunable hybrid blend.',
    image: '/Screenshot 2026-07-05 134502.png',
    link: 'https://othman-shbeir.github.io/assets/notebooks/TMDB_RecommenderSystem.ipynb', // Part 1 notebook as main link
    resources: [
      { label: 'MovieLens Dataset', url: 'https://grouplens.org/datasets/movielens/', icon: <FaDatabase /> },
      { label: 'TMDB', url: 'https://www.themoviedb.org/', icon: <FaDatabase /> },
      { label: 'scikit‑learn', url: 'https://scikit-learn.org/stable/', icon: <FaCode /> },
      { label: 'scikit‑surprise', url: 'https://surpriselib.com/', icon: <FaCode /> },
      { label: 'Part 1 Notebook', url: 'https://othman-shbeir.github.io/assets/notebooks/TMDB_RecommenderSystem.ipynb', icon: <FaBookOpen /> },
      { label: 'Part 2 Notebook', url: 'https://othman-shbeir.github.io/assets/notebooks/Testing_The_Improved_Hybrid_Recoomendation_System.ipynb', icon: <FaBookOpen /> },
    ],
  },
  {
    id: 2,
    title: 'Anime Hybrid Recommendation System',
    desc: 'Content + CF on MyAnimeList (2023) with TF‑IDF, spaCy NLP, and Surprise SVD/NMF/KNN tuned via GridSearchCV.',
    icon: <FaPlay />,
    details:
      'Overview: A two‑part Anime recommendation system built on MyAnimeList (MAL) data.\n\n' +
      'Part 1 assembles a content‑based engine using genres, studios, type, source, episodes, rating, and synopsis text (TF‑IDF + cosine similarity).\n' +
      'Part 2 adds collaborative filtering with Surprise models (SVD, NMF, KNNBasic), cross‑validation, GridSearchCV tuning, and persists the best model.\n\n' +
      'Features: spaCy NLP for synopsis cleaning, hybrid scoring (content + CF), cold‑start fallback, and explainable recommendations.',
    image: '/Screenshot 2026-07-05 134508.png',
    link: 'https://othman-shbeir.github.io/assets/notebooks/AnimeRecommender101.ipynb', // Part 1 notebook
    resources: [
      { label: 'MyAnimeList', url: 'https://myanimelist.net/', icon: <FaDatabase /> },
      { label: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets', icon: <FaDatabase /> },
      { label: 'scikit‑learn', url: 'https://scikit-learn.org/stable/', icon: <FaCode /> },
      { label: 'spaCy', url: 'https://spacy.io/', icon: <FaCode /> },
      { label: 'scikit‑surprise', url: 'https://surpriselib.com/', icon: <FaCode /> },
      { label: 'Part 1 Notebook', url: 'https://othman-shbeir.github.io/assets/notebooks/AnimeRecommender101.ipynb', icon: <FaBookOpen /> },
      { label: 'Part 2 Notebook', url: 'https://othman-shbeir.github.io/assets/notebooks/Collaborative_Anime_Recommendation_System.ipynb', icon: <FaBookOpen /> },
    ],
  },
  {
    id: 3,
    title: 'HarmOni – Sync Watch & Recommendations',
    desc: 'Desktop app for synchronized viewing, local media library, and hybrid recommendations (Electron/NestJS + Flask).',
    icon: <FaLaptop />,
    details:
      'Overview: HarmOni is a desktop application that brings friends together to watch in sync, organizes a rich local media library, and personalises discovery using a hybrid recommendation engine.\n\n' +
      'Key features: real‑time session control, faceted library search, IMDb‑weighted rating + recency + SVD hybrid recommendations, cold‑start handling, and modular design (Electron/NestJS + Flask).\n\n' +
      'Tech stack: Electron, NestJS, TypeScript, Python, Flask, Pandas, scikit‑learn, Surprise, MongoDB.',
    image: '/Screenshot 2026-07-05 134458.png',
    link: 'https://www.youtube.com/watch?v=ZzxAlox9lGQ', // Demo video
    resources: [
      { label: 'Watch Demo', url: 'https://www.youtube.com/watch?v=ZzxAlox9lGQ', icon: <FaExternalLinkAlt /> },
    ],
  },
];

const ProjectModal: React.FC<{ project: (typeof projectsData)[0]; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="bg-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl text-secondary-400">{project.icon}</div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        {/* Portrait image 250x400 */}
        <img
          src={project.image}
          alt={project.title}
          className="w-[250px] h-[400px] object-cover rounded-xl mb-4 mx-auto"
        />
        <p className="text-neutral-300 mb-4 whitespace-pre-line">{project.details}</p>

        {/* Resources */}
        {project.resources && project.resources.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Resources</h4>
            <div className="flex flex-wrap gap-2">
              {project.resources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs hover:bg-primary-500/20 hover:text-white transition"
                >
                  <span className="text-primary-400">{res.icon}</span>
                  {res.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2 px-6 rounded-full inline-flex items-center gap-2"
        >
          <FaExternalLinkAlt className="w-3 h-3" />
          View Project
        </a>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'horizontal'>('grid');

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-white/5 text-neutral-400'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('horizontal')}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  viewMode === 'horizontal' ? 'bg-primary-500 text-white' : 'bg-white/5 text-neutral-400'
                }`}
              >
                Horizontal
              </button>
            </div>
          </div>
          <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
            A showcase of hybrid recommendation systems and full‑stack applications that blend machine learning with seamless user experiences.
          </p>
        </AnimatedSection>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.map((project, index) => (
              <div key={project.id} className="break-inside-avoid">
                <AnimatedSection delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <motion.div
                    className="bg-neutral-800/50 backdrop-blur-sm border border-white/5 p-6 rounded-3xl shadow-soft hover:shadow-glow-dark transition-all duration-300 cursor-pointer h-full"
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl text-secondary-400">{project.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                        <p className="text-neutral-400 text-sm">{project.desc}</p>
                        <span className="text-primary-400 text-xs font-semibold mt-2 inline-block">
                          Click to explore →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 w-max px-4">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="w-[300px] md:w-[400px] flex-shrink-0"
                >
                  <div
                    className="bg-neutral-800/50 backdrop-blur-sm border border-white/5 p-6 rounded-3xl shadow-soft hover:shadow-glow-dark transition-all duration-300 cursor-pointer h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Portrait image 250x400 in horizontal cards */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[250px] h-[400px] object-cover rounded-xl mb-4 mx-auto"
                    />
                    <div className="flex items-start gap-3">
                      <div className="text-3xl text-secondary-400">{project.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{project.title}</h4>
                        <p className="text-neutral-400 text-sm">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;