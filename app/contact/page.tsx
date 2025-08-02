

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'mailto:bharath.kotipalli@gmail.com', // <-- Replace with your real email
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bharath-kotipalli/', // <-- Replace with your LinkedIn
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/Batz005', // <-- Replace with your GitHub
  },
  {
    icon: <FaFileAlt />,
    label: 'Resume',
    href: '/resources/bharathkotipalli_resume.pdf', // <-- Replace with your resume path
  },
];

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-[var(--background)]">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-[var(--primary)]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk
      </motion.h1>

      <motion.p
        className="text-muted mb-10 max-w-xl text-lg text-[var(--muted-foreground)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {contacts.map(({ icon, label, href }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg hover:shadow-xl bg-[var(--background)] border-[var(--border-color)] text-[var(--foreground)] transition-all"
            >
              <div className="text-3xl group-hover:text-[var(--primary)] transition-colors">{icon}</div>
              <div className="mt-2 text-sm group-hover:text-[var(--primary)] transition-colors">{label}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ContactPage;