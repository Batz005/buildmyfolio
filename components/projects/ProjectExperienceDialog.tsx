"use client"

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Project, ProjectMedia } from '@/data/projects'
import { GlowCard } from '@/components/ui/base/GlowCard'
import { GradientHeading } from '@/components/ui/base/GradientHeading'
import TechChip from '@/components/ui/TechChip'
import {
  FiX,
  FiClock,
  FiUsers,
  FiPlay,
  FiArrowUpRight,
  FiLock,
} from 'react-icons/fi'
import { formatRange } from '@/lib/formatDate'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const dialogVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

type ProjectExperienceDialogProps = {
  project?: Project
  open: boolean
  onClose: () => void
}

export function ProjectExperienceDialog({ project, open, onClose }: ProjectExperienceDialogProps) {
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-4 flex max-h-[85vh] w-full max-w-5xl flex-col gap-5 overflow-hidden"
            variants={dialogVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <GlowCard className="flex h-full flex-col gap-6 p-6" showHalo={false}>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <GradientHeading as="h2" className="text-2xl font-bold md:text-3xl">
                    {project.name}
                  </GradientHeading>
                  <p className="text-sm text-[var(--muted-foreground)] md:text-base">
                    {project.summary || project.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--primary-soft)] bg-[var(--background)]/80 text-[var(--primary)] transition-colors hover:border-[var(--primary)]"
                  aria-label="Close project preview"
                >
                  <FiX />
                </button>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
                <div className="space-y-4">
                  {renderExperience(project)}

                  {project.problem && (
                    <DetailBlock title="Problem" description={project.problem} />
                  )}
                  {project.solution && (
                    <DetailBlock title="Solution" description={project.solution} />
                  )}
                  {project.outcomes && project.outcomes.length > 0 && (
                    <ListBlock title="Outcomes" items={project.outcomes} />
                  )}
                  {project.lessons && project.lessons.length > 0 && (
                    <ListBlock
                      title="Lessons"
                      items={project.lessons}
                      icon={<span className="mt-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-[var(--primary)]" />}
                    />
                  )}
                </div>

                <aside className="space-y-4">
                  <div className="grid gap-3 text-xs md:text-sm">
                    <MetaRow
                      icon={<FiClock className="text-[var(--primary)]" />}
                      label="Timeline"
                      value={formatRange(project.start, project.end)}
                    />
                    <MetaRow
                      icon={<FiUsers className="text-[var(--primary)]" />}
                      label={
                        project.association.kind === 'experience'
                          ? 'Experience'
                          : project.association.kind === 'organization'
                          ? 'Organization'
                          : 'Context'
                      }
                      value={
                        project.association.kind === 'experience'
                          ? project.association.label || project.association.experienceId
                          : project.association.kind === 'organization'
                          ? project.association.organization
                          : project.association.context || 'Independent'
                      }
                    />
                  </div>

                  {project.tech.length > 0 && (
                    <div>
                      <SectionLabel>Tech</SectionLabel>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech.map((stack) => (
                          <TechChip key={`${project.id}-dialog-${stack}`} label={stack} />
                        ))}
                      </div>
                    </div>
                  )}

                  {project.principles && project.principles.length > 0 && (
                    <ChipList title="Principles" chips={project.principles} />
                  )}

                  {project.patterns && project.patterns.length > 0 && (
                    <ChipList title="Patterns" chips={project.patterns} />
                  )}

                  {project.metrics && project.metrics.length > 0 && (
                    <div>
                      <SectionLabel>Metrics</SectionLabel>
                      <div className="mt-2 grid gap-2">
                        {project.metrics.map((metric) => (
                          <GlowCard key={`${project.id}-metric-${metric.label}`} className="flex items-center justify-between px-4 py-3 text-sm" showHalo={false}>
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                                {metric.label}
                              </div>
                              {metric.description && (
                                <div className="text-xs text-[var(--muted-foreground)]/80">
                                  {metric.description}
                                </div>
                              )}
                            </div>
                            <div className="text-lg font-bold text-[var(--primary)]">{metric.value}</div>
                          </GlowCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.links && project.links.length > 0 && !project.confidential && (
                    <div>
                      <SectionLabel>Links</SectionLabel>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={`${project.id}-dialog-link-${link.href}`}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft)] bg-[var(--background)] px-3 py-1 text-xs font-semibold text-[var(--primary)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)]/10"
                          >
                            {link.label}
                            <FiArrowUpRight className="text-sm" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function renderExperience(project: Project) {
  if (project.confidential) {
    return (
      <GlowCard className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center text-sm text-[var(--muted-foreground)]" showHalo={false}>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary-soft)] bg-[var(--background)] text-[var(--primary)]">
          <FiLock />
        </span>
        <p>Assets related to this project are confidential and cannot be shared publicly.</p>
      </GlowCard>
    )
  }

  if (project.experience.kind === 'embed') {
    return (
      <MediaPreview
        media={{ kind: 'iframe', src: project.experience.src, alt: project.experience.title }}
        title={project.name}
      />
    )
  }

  if (project.experience.kind === 'live') {
    return (
      <GlowCard className="flex flex-col gap-3 p-5" showHalo={false}>
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <FiPlay className="text-[var(--primary)]" />
          Live experience
        </div>
        <a
          href={project.experience.href}
          target={project.experience.href.startsWith('http') ? '_blank' : undefined}
          rel={project.experience.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft)] bg-[var(--background)] px-4 py-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)]/10"
        >
          Launch experience
          <FiArrowUpRight />
        </a>
        {project.experience.note && (
          <p className="text-xs text-[var(--muted-foreground)]">{project.experience.note}</p>
        )}
      </GlowCard>
    )
  }

  const galleryMedia =
    project.experience.kind === 'gallery'
      ? project.experience.media
      : project.media

  if (!galleryMedia || galleryMedia.length === 0) {
    return (
      <GlowCard className="flex h-48 items-center justify-center text-sm text-[var(--muted-foreground)]" showHalo={false}>
        Preview coming soon.
      </GlowCard>
    )
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {galleryMedia.map((media, index) => (
        <MediaPreview key={`${project.id}-gallery-${index}`} media={media} title={project.name} />
      ))}
    </div>
  )
}

function MediaPreview({ media, title }: { media: ProjectMedia; title: string }) {
  if (media.kind === 'image') {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--primary-soft)]/50 bg-[var(--background)]/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.src} alt={media.alt || title} className="h-full w-full object-cover" />
      </div>
    )
  }
  if (media.kind === 'video') {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--primary-soft)]/50 bg-[var(--background)]/80">
        <video
          className="h-full w-full"
          src={media.src}
          poster={media.poster}
          controls
          playsInline
        />
      </div>
    )
  }
  if (media.kind === 'embed' || media.kind === 'iframe') {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--primary-soft)]/50 bg-[var(--background)]/80">
        <iframe
          src={media.src}
          title={media.alt || title}
          className="h-full w-full min-h-[320px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
    )
  }
  return null
}

function DetailBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2">
      <SectionLabel>{title}</SectionLabel>
      <p className="text-sm text-[var(--foreground)]/90">{description}</p>
    </div>
  )
}

function ListBlock({ title, items, icon }: { title: string; items: string[]; icon?: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <SectionLabel>{title}</SectionLabel>
      <ul className="space-y-2 text-sm text-[var(--foreground)]/90">
        {items.map((item, index) => (
          <li key={`${title}-item-${index}`} className="flex items-start gap-2">
            {icon && <span className="mt-1 text-xs text-[var(--primary)]">{icon}</span>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ChipList({ title, chips }: { title: string; chips: string[] }) {
  return (
    <div>
      <SectionLabel>{title}</SectionLabel>
      <div className="mt-2 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={`${title}-chip-${chip}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft)] bg-[var(--background)] px-3 py-1 text-xs font-semibold text-[var(--primary)]"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value?: string }) {
  if (!value) return null
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[var(--primary-soft)]/50 bg-[var(--background)]/60 px-3 py-2">
      <span className="text-base">{icon}</span>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
          {label}
        </div>
        <div className="text-sm text-[var(--foreground)]">{value}</div>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
      {children}
    </p>
  )
}
