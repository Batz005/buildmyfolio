"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { formatRange } from '@/lib/formatDate'
import TechChip from '@/components/ui/TechChip'
import AwardBadge from '@/components/ui/AwardBadge'
import CertificationBadge from '@/components/ui/CertificationBadge'
import LinkChip from '@/components/ui/LinkChip'
import { GlowCard } from '@/components/ui/base/GlowCard'
import { GradientHeading } from '@/components/ui/base/GradientHeading'
import { InfoPill } from '@/components/ui/base/InfoPill'
import { MediaFrame } from '@/components/ui/base/MediaFrame'
import { SectionHeading } from '@/components/ui/base/SectionHeading'
import {
  FiAward,
  FiCheckCircle,
  FiLink,
  FiTool,
  FiCalendar,
  FiMapPin,
} from 'react-icons/fi'

type Impact = { result: string; how?: string; metric?: string }
type Recognition = { title: string; date?: string; blurb?: string }

export type ExperienceItemProps = {
  company: string
  role: string
  start?: string
  end?: string
  location?: string
  logoUrl?: string
  mission: string
  impact?: Impact[]
  tech?: string[]
  awards?: Recognition[]
  certifications?: Recognition[]
  links?: { label: string; href: string }[]
}

export default function ExperienceItem(props: ExperienceItemProps) {
  const { company, role, start, end, location, logoUrl, mission, impact, tech, awards, certifications, links } = props
  const recognition: Recognition[] = [
    ...(awards || []),
    ...(certifications || []),
  ]
  const fallbackInitial = company?.charAt(0)?.toUpperCase() ?? '?'
  const timelineLabel = formatRange(start, end)

  return (
    <div className="relative pl-12">
      <motion.div
        className="pointer-events-none absolute left-[7px] top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]"
        initial={{ scale: 0.95, opacity: 0.85 }}
        animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 14px rgba(13,148,136,0.5)' }}
      />

      <GlowCard
        as={motion.div}
        className="p-6 bg-[linear-gradient(140deg,rgba(0,255,194,0.08),rgba(13,148,136,0.04),transparent)] border border-[var(--primary-soft)]/60"
        wrapperClassName="group"
        showHalo={false}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
        transition={{ duration: 0.20, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative z-[1] space-y-4">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <MediaFrame
                src={logoUrl}
                size='lg'
                alt={`${company} logo`}
                tone="transparent"
                shadow={false}
                fallback={
                  <span className="text-base font-semibold text-[var(--primary)]">
                    {fallbackInitial}
                  </span>
                }
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted-foreground)]">
                  {company}
                </span>
                <GradientHeading as="div" className="mt-2 text-lg font-bold md:text-2xl">
                  {role}
                </GradientHeading>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 text-xs text-[color:var(--muted-foreground)]">
              {timelineLabel && (
                <InfoPill
                  icon={<FiCalendar className="text-[var(--primary)]" />}
                  label={timelineLabel}
                />
              )}
              {location && (
                <InfoPill
                  icon={<FiMapPin className="text-[var(--primary)]" />}
                  label={location}
                  variant="ghost"
                />
              )}
            </div>
          </div>

          {recognition.length > 0 && (
            <div className="pt-2 space-y-2">
              <SectionHeading
                title="Awards & Certifications"
                icon={<FiAward className="text-[var(--primary)]" />}
                className="mb-1"
              />
              <div className="grid gap-2 md:grid-cols-2">
                {recognition.map((r, idx) => (
                  r.title.toLowerCase().includes('cert') ? (
                    <CertificationBadge key={`c-${idx}`} certification={r} />
                  ) : (
                    <AwardBadge key={`a-${idx}`} award={r} />
                  )
                ))}
              </div>
            </div>
          )}

          <p className="text-sm leading-relaxed text-[color:var(--foreground)] opacity-90">
            {mission}
          </p>

          {impact && impact.length > 0 && (
            <div className="space-y-2">
              <SectionHeading
                title="Impact"
                icon={<FiCheckCircle className="text-[var(--primary)]" />}
                className="mb-1.5"
              />
              <ul className="list-disc pl-5 space-y-1 text-sm marker:text-[var(--primary)]">
                {impact.map((imp, idx) => (
                  <li key={idx} className="text-[color:var(--foreground)] opacity-90">
                    <span className="font-medium text-[color:var(--foreground)]">{imp.result}</span>
                    {imp.how && <span className="ml-1">— {imp.how}</span>}
                    {imp.metric && (
                      <span className="ml-1 text-[color:var(--muted-foreground)]">({imp.metric})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tech && tech.length > 0 && (
            <div className="space-y-2">
              <SectionHeading
                title="Tech Stack"
                icon={<FiTool className="text-[var(--primary)]" />}
                className="mb-1.5"
              />
              <div className="flex flex-wrap gap-2">
                {tech.map((t, idx) => (
                  <TechChip key={idx} label={t} />
                ))}
              </div>
            </div>
          )}

          {links && links.length > 0 && (
            <div className="space-y-2">
              <SectionHeading
                title="Links"
                icon={<FiLink className="text-[var(--primary)]" />}
                className="mb-1.5"
              />
              <div className="flex flex-wrap gap-2">
                {links.map((l, idx) => (
                  <LinkChip key={idx} label={l.label} href={l.href} />
                ))}
              </div>
            </div>
          )}
        </div>
      </GlowCard>
    </div>
  )
}
