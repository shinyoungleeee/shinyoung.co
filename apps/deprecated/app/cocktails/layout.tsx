import Footer from '../../components/footer'
import Nav from '../../components/nav'
import { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-4 mt-8 max-w-xl bg-white text-black antialiased md:mx-auto dark:bg-black dark:text-white">
      <div className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <Nav />

        {children}

        <Footer />
      </div>
    </main>
  )
}
