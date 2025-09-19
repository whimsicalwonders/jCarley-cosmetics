import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

/**
 * Layout component for jCarley Cosmetics
 * Wraps all pages with consistent header and footer
 */
interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
