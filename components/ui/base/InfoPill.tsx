import React from 'react'
import { cn } from '@/lib/cn'

type InfoPillVariant = 'outline' | 'filled' | 'ghost'

type InfoPillProps = {
  icon?: React.ReactNode
  label: string
  className?: string
  variant?: InfoPillVariant
  children?: React.ReactNode
}

const variantClasses: Record<InfoPillVariant, string> = {
  outline:
    'border border-[var(--primary-soft-strong)] bg-[var(--primary-soft)] text-[var(--primary)]',
  filled:
    'border border-transparent bg-[var(--primary)] text-[color:var(--background)]',
  ghost:
    'border border-[var(--primary-soft)] bg-[color:var(--background)] text-[color:var(--muted-foreground)]',
}

export function InfoPill({ icon, label, className, variant = 'outline', children }: InfoPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition-colors',
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
      {children}
    </span>
  )}

