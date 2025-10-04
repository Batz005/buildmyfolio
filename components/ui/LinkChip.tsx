import React from 'react'
import Link from 'next/link'

type LinkChipProps = {
  label: string
  href: string
}

export default function LinkChip({ label, href }: LinkChipProps) {
  const isExternal = href.startsWith('http')
  const className = "inline-flex items-center rounded-full bg-[var(--muted)]/40 text-[color:var(--foreground)] px-2.5 py-1 text-xs border border-[var(--border)] hover:bg-[var(--muted)]/60 transition-colors"
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}


