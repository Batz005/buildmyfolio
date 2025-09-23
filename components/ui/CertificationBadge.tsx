import React from 'react'

export type Certification = {
  title: string
  date?: string
  blurb?: string
  imageUrl?: string
}

type CertificationBadgeProps = {
  certification: Certification
}

const shellBase =
  'group relative overflow-hidden rounded-xl border border-[var(--primary-soft)] bg-[var(--background)] px-4 py-3 text-sm shadow-[0_14px_32px_-24px_rgba(13,148,136,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-soft-strong)] hover:shadow-[0_20px_42px_-24px_rgba(13,148,136,0.65)]'

const haloClass =
  'pointer-events-none absolute inset-x-0 -top-10 h-20 bg-[radial-gradient(100%_90%_at_50%_0%,rgba(110,245,227,0.32),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100'

export default function CertificationBadge({ certification }: CertificationBadgeProps) {
  const hasImage = Boolean((certification as any).imageUrl)

  return (
    <div className={shellBase}>
      <div className={haloClass} />
      <div className="relative z-[1] flex items-start gap-3">
        {hasImage ? (
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(110,245,227,0.38),rgba(13,148,136,0.1))] shadow-[0_12px_28px_-22px_rgba(13,148,136,0.55)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={(certification as any).imageUrl as string} alt={certification.title} className="h-10 w-10 object-contain" />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-lg">
            🎓
          </div>
        )}
        <div className="flex-1 space-y-2">
          <div className="bg-[linear-gradient(92deg,var(--primary-emphasis),var(--primary))] bg-clip-text text-base font-semibold text-transparent">
            {certification.title}
          </div>
          {(certification.date || certification.blurb) && (
            <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
              {certification.date && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft-strong)] bg-[var(--primary-soft)] px-2 py-0.5 font-medium text-[var(--primary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  {certification.date}
                </span>
              )}
              {certification.blurb && <span className="leading-relaxed">{certification.blurb}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
