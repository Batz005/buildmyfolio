import './globals.css'
import Navbar from '@/containers/Navbar/Navbar'
import Footer from '@/containers/Footer/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import ThemeToggle from '@/components/common/ThemeToggle'
import { ReactNode } from 'react'
import Experiment from '@/components/debug/Experiment'

export const metadata = {
  title: 'BuildMyFolio',
  description: 'Your name. Your work. Your brand.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="px-4 md:px-12 max-w-5xl mx-auto">{children}</main>
        <div className="h-[2000px] w-full bg-gradient-to-b from-transparent to-black"></div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}