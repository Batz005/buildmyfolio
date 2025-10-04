import React from 'react'

type TechChipProps = {
  label: string
}

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--muted)]/50 text-[color:var(--foreground)] px-2.5 py-1 text-xs border border-[var(--border)]">
      {label}
    </span>
  )
}


