"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import { GlowCard } from '@/components/ui/base/GlowCard'
import { GradientHeading } from '@/components/ui/base/GradientHeading'
import { InfoPill } from '@/components/ui/base/InfoPill'
import TechChip from '@/components/ui/TechChip'
import { formatRange } from '@/lib/formatDate'
import { cn } from '@/lib/cn'
import { FiArrowUpRight, FiClock, FiLayers, FiUsers, FiLock } from 'react-icons/fi'

const statusCopy: Record<Project['status'], string> = {
  prototype: 'Prototype',
  launched: 'Launched',
  maintained: 'Maintained',
}

const statusToneClasses: Record<Project['status'], string> = {
  prototype: 'bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary-soft-strong)]',
  launched: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40',
  maintained: 'bg-sky-500/15 text-sky-300 border border-sky-400/40',
}

type ProjectCardProps = {
  project: Project
  onSelect?: (project: Project) => void
  href?: string
  className?: string
  selected?: boolean
}

export function ProjectCard({ project, onSelect, href, className, selected }: ProjectCardProps) {
  const { id, name, tagline, status, start, end, tech, association, confidential, links } = project

  const Component: any = href ? 'a' : onSelect ? 'button' : 'div'
  const interactive = Boolean(href || onSelect)
  const cardProps = href
    ? {
        href,
        'aria-label': `Open ${name}`,
        target: href.startsWith('http') ? '_blank' : undefined,
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
      }
    : onSelect
    ? { type: 'button', onClick: () => onSelect(project), 'aria-pressed': selected ?? false }
    : {}

  const timelineLabel = formatRange(start, end)
  const contextLabel =
    association.kind === 'experience'
      ? association.label || association.experienceId
      : association.kind === 'organization'
      ? association.organization
      : association.context || 'Independent'

  const visibleTech = tech.slice(0, 4)
  const remainingTech = tech.length - visibleTech.length

  const promptText = confidential
    ? 'Click to explore high-level outcomes →'
    : 'Click to explore the full build →'

  return (
    <GlowCard
      as={motion(Component)}
      className={cn(
        'flex h-full flex-col gap-5 p-6',
        selected ? 'border-[var(--primary)]/80 shadow-[0_0_30px_-10px_rgba(13,148,136,0.8)]' : undefined,
        className,
      )}
      showHalo={false}
      clickable={interactive}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={interactive ? { y: -6 } : undefined}
      {...cardProps}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <InfoPill
            label={statusCopy[status]}
            className={cn('px-3 py-1 text-xs font-semibold', statusToneClasses[status])}
            icon={<FiLayers className="text-[var(--primary)]" />}
          >
            {interactive && !confidential && <FiArrowUpRight className="ml-2 text-sm" />}
          </InfoPill>
          {confidential ? (
            <InfoPill
              label="Confidential"
              variant="ghost"
              className="px-3 py-1 text-xs font-semibold text-[var(--muted-foreground)]"
              icon={<FiLock className="text-[var(--primary)]" />}
            />
          ) : (
            <InfoPill
              label=""
              variant="ghost"
              className="px-3 py-1 text-xs opacity-0"
            />
          )}
        </div>
        {timelineLabel && (
          <InfoPill
            label={timelineLabel}
            variant="ghost"
            className="px-3 py-1 text-xs font-semibold text-[var(--muted-foreground)]"
            icon={<FiClock className="text-[var(--primary)]" />}
          />
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center ">
        <GradientHeading as="h3" className="text-xl font-semibold md:text-2xl">
          {name}
        </GradientHeading>
        <p className="text-sm text-[color:var(--muted-foreground)] md:text-base">{tagline}</p>

        {contextLabel && (
          <InfoPill
            label={contextLabel}
            variant="ghost"
            className="w-fit px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]"
            icon={<FiUsers className="text-[var(--primary)]" />}
          />
        )}
      </div>

      <div className="mt-auto space-y-3">
        {!confidential && links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {links.map((link) => (
              <a
                key={`${id}-card-link-${link.href}`}
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
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            Tech Stack
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {visibleTech.map((stack) => (
              <TechChip key={`${id}-${stack}`} label={stack} />
            ))}
            {remainingTech > 0 && (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--muted-foreground)]">
                +{remainingTech} more
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-[var(--primary)]">{promptText}</span>
          <span className="text-xs text-[var(--muted-foreground)]">
            {interactive ? 'Peek inside for context, impact, and lessons learned.' : 'Detailed write-up available inside the case study.'}
          </span>
        </div>
      </div>
    </GlowCard>
  )
}
