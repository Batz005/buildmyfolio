'use client'
import React, { Component } from 'react'
import LogoIcon from '@/components/icons/LogoIcon'
import Link from 'next/link'
import ThemeToggle from '@/components/common/ThemeToggle' 
import { LINKS } from '@/constants/links'


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)] transition-colors duration-300 px-4 py-4 flex items-center justify-between">
      
      {/* Left: Logo */}
 
        <Link href={LINKS.internal.home}><LogoIcon className="w-12 h-12 text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors" /></Link>
   

      {/* Center: Nav Links */}
      <div className="hidden md:flex gap-6 text-sm text-[color:var(--foreground)]" >
        <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.home} >Home</Link>
        <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.projects}>Projects</Link>
        <Link className="hover:text-[var(--primary-hover)]" href={LINKS.internal.experience}>Experience</Link>
      </div>

      {/* Right: Actions */}
      <div className="flex gap-3 items-center text-sm">
        <Link
          href={LINKS.internal.contact}
          className="px-4 py-2 rounded-full border border-primary text-[color:var(--foreground)] hover:bg-[var(--primary-hover)] hover:text-[var(--background)]"
        >
          Let’s Talk
        </Link>

        <a
          href={LINKS.external.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[var(--primary-hover)] text-[color:var(--foreground)] "
        >
          Resume
        </a>

        <ThemeToggle />
      </div>
    </nav>
  )
}


