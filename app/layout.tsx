import '../styles/globals.css'
import Header from '@/containers/Header/Header'
import Navbar from '@/containers/Navbar/Navbar'
import Footer from '@/containers/Footer/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeToggle from '@/components/ThemeToggle'
import { ReactNode } from 'react'

export const metadata = {
  title: 'BuildMyFolio',
  description: 'Your name. Your work. Your brand.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <Header />
        <Navbar />
        <main className="px-4 md:px-12 max-w-5xl mx-auto">{children}</main>
        <Footer />
        <ScrollToTop />
        <ThemeToggle />
      </body>
    </html>
  )
}