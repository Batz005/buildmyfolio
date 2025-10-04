'use client'
import React, { Component } from 'react'
import LogoIcon from '@/components/icons/LogoIcon'
import Link from 'next/link'
import ThemeToggle from '@/components/common/ThemeToggle' 
import { LINKS } from '@/constants/links'


export default function Navbar() {
  return (
    <nav className="relative sticky top-0 z-50 flex items-center justify-between px-4 py-4 transition-colors duration-300 bg-[var(--background)] md:px-8">
      {/* Left: Logo */}
      <Link href={LINKS.internal.home} className="shrink-0">
        <LogoIcon className="h-12 w-12 text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]" />
      </Link>

      {/* Center: Nav Links */}
      <div className="absolute left-1/2 top-1/2 hidden h-12 -translate-x-1/2 -translate-y-1/2 md:flex">
        <div className="flex h-full items-center gap-6 text-sm text-[color:var(--foreground)]">
          <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.home}>
            Home
          </Link>
          <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.projects}>
            Projects
          </Link>
          <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.experience}>
            Experience
          </Link>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 text-sm">
        <Link
          href={LINKS.internal.contact}
          className="px-4 py-2 rounded-full border border-[var(--primary)] text-[color:var(--foreground)] transition-colors hover:bg-[var(--primary-hover)] hover:text-[var(--background)]"
        >
          Let’s Talk
        </Link>

        <a
          href={LINKS.external.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[color:var(--foreground)] transition-colors hover:text-[var(--primary-hover)]"
        >
          Resume
        </a>

        <ThemeToggle />
      </div>
    </nav>
  )
}
