import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // تفعيل التمرير السلس
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة للتعامل مع نقرات الروابط (للموبايل وللتمرير)
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false); // إغلاق قائمة الموبايل

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = isScrolled ? 70 : 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        px-6 lg:px-20
        ${
          isScrolled
            ? 'py-3 bg-neutral-950/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30'
            : 'py-5 bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center text-2xl font-bold tracking-tight"
        >
          <span className="text-white">AI</span>
          <span className="text-primary-400 group-hover:scale-110 transition-transform duration-300 mx-0.5">
            .
          </span>
          <span className="text-white/80 group-hover:text-primary-400 transition-colors duration-300">
            Life
          </span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-white/30 group-hover:text-primary-400 transition-colors duration-300 ml-1.5">
            DEV
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-[10px] font-medium tracking-[0.2em] uppercase text-white/50">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative hover:text-white transition-colors group flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 scale-0 group-hover:scale-100 transition-transform duration-300" />
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-400 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS (without social icons) */}
       

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-primary-400 transition-colors relative z-[51]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 h-dvh bg-neutral-950/95 backdrop-blur-2xl z-[50] flex flex-col items-center justify-center p-10 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-3xl font-light tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}

              {/* زر في الموبايل أيضاً (تم إزالة أيقونات السوشيال ميديا) */}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.08 + 0.1 }}
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="mt-6 px-8 py-3 rounded-full bg-primary-400 text-neutral-900 font-bold tracking-wide hover:bg-primary-500 transition-colors"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;