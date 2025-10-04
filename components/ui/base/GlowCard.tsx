import React from 'react'
import { cn } from '@/lib/cn'

type GlowCardProps<T extends React.ElementType = 'div'> = {
  as?: T
  children: React.ReactNode
  className?: string
  wrapperClassName?: string
  haloClassName?: string
  showHalo?: boolean
  clickable?: boolean
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const defaultCardClasses =
  'relative overflow-hidden rounded-2xl border border-[var(--primary-soft)] bg-[var(--background)] p-6 shadow-[0_18px_42px_-30px_rgba(13,148,136,0.55)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--primary-soft-strong)] hover:shadow-[0_26px_60px_-28px_rgba(13,148,136,0.65)]'

const defaultHaloClasses =
  'pointer-events-none absolute inset-x-0 -top-12 h-24 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(0,255,194,0.22),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100'

const clickableClasses =
  'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]';

export function GlowCard<T extends React.ElementType = 'div'>(props: GlowCardProps<T>) {
  const { as, children, className, wrapperClassName, haloClassName, showHalo = true, clickable, ...rest } = props

  const Component = (as || 'div') as React.ElementType

  return (
    <div className={cn('group relative', wrapperClassName)}>
      {showHalo && <div className={cn(defaultHaloClasses, haloClassName)} />}
      <Component
        className={cn(
          defaultCardClasses,
          clickable ? clickableClasses : undefined,
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    </div>
  )
}
