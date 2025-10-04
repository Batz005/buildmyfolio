'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Project, PROJECTS } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectExperienceDialog } from '@/components/projects/ProjectExperienceDialog'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleSelect = (project: Project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="px-4 py-12">
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h1
          className="text-4xl font-bold text-[var(--primary)] md:text-5xl"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects Playground
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-[var(--muted-foreground)] md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hands-on builds, learning experiments, and shipped products where I blended design, motion, and engineering to solve real problems and grow new skills.
        </motion.p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelect}
              selected={selectedProject?.id === project.id && dialogOpen}
            />
          ))}
        </div>
      </section>

      <ProjectExperienceDialog
        project={selectedProject ?? undefined}
        open={dialogOpen && Boolean(selectedProject)}
        onClose={handleClose}
      />
    </main>
  )
}
