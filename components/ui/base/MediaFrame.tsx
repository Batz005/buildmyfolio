import React from 'react'
import { cn } from '@/lib/cn'

type MediaFrameProps = {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'md' | 'lg' | 'xl' | 'full'
  className?: string
  fallback?: React.ReactNode
  shadow?: boolean
  tone?: 'accent' | 'surface' | 'transparent'
  border?: boolean
  clickable?: boolean
}

const sizeClasses: Record<Required<MediaFrameProps>['size'], string> = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
}

const roundedClasses: Record<Required<MediaFrameProps>['rounded'], string> = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  full: 'rounded-full',
}

export function MediaFrame({
  src,
  alt,
  size = 'md',
  rounded = 'xl',
  className,
  fallback,
  shadow = true,
  tone = 'accent',
  border = false,
  clickable = false,
}: MediaFrameProps) {
  const toneClass =
    tone === 'accent'
      ? 'bg-[radial-gradient(circle_at_30%_30%,rgba(110,245,227,0.28),rgba(13,148,136,0.08))]'
      : 'bg-[color:var(--background)]'

  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden',
        tone !== 'transparent' ? toneClass : undefined,
        border ? 'border border-[var(--primary-soft)]' : undefined,
        sizeClasses[size],
        roundedClasses[rounded],
        shadow ? 'shadow-[0_12px_28px_-22px_rgba(13,148,136,0.55)]' : undefined,
        clickable ? 'ring-offset-[var(--background)] transition-shadow hover:ring-2 hover:ring-[var(--primary-soft-strong)] focus-visible:ring-2 focus-visible:ring-[var(--primary-soft-strong)]' : undefined,
        className
      )}
    >
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt || ''} className="h-full w-full object-contain" />
        </>
      ) : fallback ? (
        fallback
      ) : (
        <span className="text-sm font-semibold text-[var(--primary)]">{alt?.charAt(0) ?? '?'}</span>
      )}
    </div>
  )
}
