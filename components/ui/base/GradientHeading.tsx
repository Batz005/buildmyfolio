import React from 'react'
import { cn } from '@/lib/cn'

type GradientHeadingProps<T extends React.ElementType = 'span'> = {
  as?: T
  children: React.ReactNode
  className?: string
  gradientClassName?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const defaultGradientClass =
  'bg-[linear-gradient(92deg,var(--primary-emphasis),var(--primary))] bg-clip-text text-transparent'

export function GradientHeading<T extends React.ElementType = 'span'>(
  props: GradientHeadingProps<T>
) {
  const { as, children, className, gradientClassName, ...rest } = props
  const Component = (as || 'span') as React.ElementType

  return (
    <Component
      className={cn(defaultGradientClass, gradientClassName, className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
