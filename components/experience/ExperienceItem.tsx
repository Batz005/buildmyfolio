"use client"
import React from 'react'
import { formatRange } from '@/lib/formatDate'
import TechChip from '@/components/ui/TechChip'
import AwardBadge from '@/components/ui/AwardBadge'
import CertificationBadge from '@/components/ui/CertificationBadge'
import LinkChip from '@/components/ui/LinkChip'
import { motion } from 'framer-motion'

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
    <div className="group relative pl-12">
      <div className="pointer-events-none absolute left-[7px] top-8 h-4 w-4 -translate-x-1/2 rounded-full border border-[var(--primary-soft-strong)] bg-[var(--primary)] shadow-[0_0_22px_rgba(13,148,136,0.65)]" />
      <div className="pointer-events-none absolute left-[7px] top-8 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-40 blur-2xl" />
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-[var(--primary-soft)] bg-[var(--background)] p-6 shadow-[0_18px_42px_-30px_rgba(13,148,136,0.55)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--primary-soft-strong)] hover:shadow-[0_26px_60px_-28px_rgba(13,148,136,0.65)]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.015 }}
      >
        <div className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(0,255,194,0.22),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative z-[1] space-y-4">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                 <img src={logoUrl} alt={`${company} logo`} className="h-12 w-12 object-contain" />

              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-base font-semibold text-[var(--primary)]">
                  {fallbackInitial}
                </div>
              )}
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted-foreground)]">
                  {company}
                </div>
                <div className="mt-2 bg-[linear-gradient(92deg,var(--primary-emphasis),var(--primary))] bg-clip-text text-lg font-bold text-transparent md:text-2xl">
                  {role}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs text-[color:var(--muted-foreground)]">
              {timelineLabel && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft-strong)] bg-[var(--primary-soft)] px-3 py-1 font-semibold text-[var(--primary)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  {timelineLabel}
                </span>
              )}
              {location && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft)] bg-[var(--background)] px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  {location}
                </span>
              )}
            </div>
          </div>

          {recognition.length > 0 && (
            <div className="pt-2">
              <h4 className="text-sm font-medium text-[color:var(--foreground)] mb-1.5">🏆 Awards & Certifications</h4>
              <div className="grid gap-2 sm:grid-cols-2">
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
            <div>
              <h4 className="text-sm font-medium text-[color:var(--foreground)] mb-1.5">✅ Impact</h4>
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
            <div>
              <h4 className="text-sm font-medium text-[color:var(--foreground)] mb-1.5">⚙️ Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, idx) => (
                  <TechChip key={idx} label={t} />
                ))}
              </div>
            </div>
          )}

          {links && links.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-[color:var(--foreground)] mb-1.5">Links</h4>
              <div className="flex flex-wrap gap-2">
                {links.map((l, idx) => (
                  <LinkChip key={idx} label={l.label} href={l.href} />
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
