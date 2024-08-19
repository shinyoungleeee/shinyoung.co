import { SiteFooter } from '@repo/ui/site-footer'
import { SiteHeader } from '@repo/ui/site-header'
import { Inter, Lora } from 'next/font/google'
import { type ReactNode } from 'react'
import { Providers } from '@/components/providers'
import '../styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html
      className={`${inter.variable} ${lora.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <Providers>
            <SiteHeader />

            <main className="grow">{children}</main>

            <SiteFooter />
          </Providers>
        </div>
      </body>
    </html>
  )
}
