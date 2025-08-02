import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-muted">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://github.com/Batz005"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-actual-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:you@example.com"
          className="hover:text-primary transition-colors"
        >
          Email
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} Bharath Kotipalli. All rights reserved.</div>
    </footer>
  )
}