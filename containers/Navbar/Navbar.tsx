'use client'
import React, { Component } from 'react'
import LogoIcon from '@/components/icons/LogoIcon'
import Link from 'next/link'
import ThemeToggle from '@/components/common/ThemeToggle' 


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)] px-4 py-4 flex items-center justify-between">
      
      {/* Left: Logo */}
 
        <Link href="/"><LogoIcon className="w-12 h-12 text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors" /></Link>
   

      {/* Center: Nav Links */}
      <div className="hidden md:flex gap-6 text-sm text-[color:var(--foreground)]" >
        <Link className="hover:text-[var(--primary-hover)]" href="/">Home</Link>
        <Link className="hover:text-[var(--primary-hover)]" href="/projects">Projects</Link>
        <Link className="hover:text-[var(--primary-hover)]" href="/experience">Experience</Link>
      </div>

      {/* Right: Actions */}
      <div className="flex gap-3 items-center text-sm">
        <Link
          href="/contact"
          className="px-4 py-2 rounded-full border border-primary text-[color:var(--foreground)] hover:bg-[var(--primary-hover)] hover:text-[var(--background)]"
        >
          Let’s Talk
        </Link>

        <a
          href="/resources/resume.pdf"
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


