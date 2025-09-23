import React from 'react'
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem'

type ExperienceTimelineProps = {
  items: ExperienceItemProps[]
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary-soft-strong)] via-[var(--primary-soft)] to-transparent" />
      <div className="space-y-6">
        {items.map((item, idx) => (
          <ExperienceItem key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}
