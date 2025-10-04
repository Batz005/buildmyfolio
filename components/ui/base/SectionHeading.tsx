import React from 'react'
import { cn } from '@/lib/cn'
import { GradientHeading } from './GradientHeading'

type SectionHeadingProps = {
  title: string
  eyebrow?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
  description?: string
}

export function SectionHeading({
  title,
  eyebrow,
  icon,
  action,
  className,
  description,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-2 md:flex-row md:items-center md:justify-between', className)}>
      <div>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted-foreground)]">
            {eyebrow}
          </span>
        )}
        <div className="flex items-center gap-2">
          {icon && <span className="text-base">{icon}</span>}
          <GradientHeading as="h3" className="text-lg font-semibold md:text-xl">
            {title}
          </GradientHeading>
        </div>
        {description && (
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{description}</p>
        )}
      </div>
      {action && <div className="text-sm text-[var(--primary)]">{action}</div>}
    </div>
  )
}
