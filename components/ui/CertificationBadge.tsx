import React from 'react'
import { motion } from 'framer-motion'
import { GlowCard } from '@/components/ui/base/GlowCard'
import { MediaFrame } from '@/components/ui/base/MediaFrame'
import { GradientHeading } from '@/components/ui/base/GradientHeading'
import { InfoPill } from '@/components/ui/base/InfoPill'
import { FiShield } from 'react-icons/fi'

export type Certification = {
  title: string
  date?: string
  blurb?: string
  imageUrl?: string
}

type CertificationBadgeProps = {
  certification: Certification
}

export default function CertificationBadge({ certification }: CertificationBadgeProps) {
  const { imageUrl, title, date, blurb } = certification

  return (
    <GlowCard
      as={motion.div}
      className="flex h-full items-center gap-3 px-4 py-3 text-sm"
      wrapperClassName="group"
      showHalo={false}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      whileHover={{ y: -2 }}
    >
        <MediaFrame
          src={imageUrl}
          alt={title}
          size="sm"
          rounded="xl"
          fallback={<FiShield className="text-lg text-[var(--primary)]" />}
          shadow={false}
          border
        />
        <div className="flex flex-1 flex-col gap-2">
          <GradientHeading as="div" className="text-base font-semibold">
            {title}
          </GradientHeading>
          {(date || blurb) && (
            <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
              {date && (
                <InfoPill
                  label={date}
                  variant="outline"
                  className="px-2 py-0.5"
                  icon={<span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />}
                />
              )}
              {blurb && <span className="leading-relaxed">{blurb}</span>}
            </div>
          )}
        </div>
    </GlowCard>
  )
}
