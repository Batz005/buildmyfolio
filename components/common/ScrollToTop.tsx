'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  if (typeof window === 'undefined') return null;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-[var(--primary)] text-[var(--foreground)] shadow-lg hover:bg-[var(--primary-hover)] hover:text-[var(--background)] xtransition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
    
  
  
}
