'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/data/experience'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline'

const ExperiencePage: React.FC = () => {
  return (
    <main className="px-4 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h1
          className="text-4xl font-bold text-[var(--primary)] md:text-5xl"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Journey
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-[var(--muted-foreground)] md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A concise timeline of how I contributed, delivered impact, and grew across roles.
        </motion.p>
      </div>

      <motion.section
        className="mx-auto mt-12 max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      >
        <ExperienceTimeline
          items={EXPERIENCES.map((e) => ({
            company: e.company,
            role: e.role,
            start: e.start,
            end: e.end,
            location: e.location,
            logoUrl: e.logoUrl,
            mission: e.mission,
            impact: e.impact,
            tech: e.tech,
            awards: e.awards,
            certifications: e.certifications,
            links: e.links,
          }))}
        />
      </motion.section>
    </main>
  )
}

export default ExperiencePage
