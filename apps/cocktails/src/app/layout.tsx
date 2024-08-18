import { SiteFooter } from '@repo/ui/site-footer'
import { SiteHeader } from '@repo/ui/site-header'
import { ThemeProvider } from 'next-themes'
import { Inter, Lora } from 'next/font/google'
import { type ReactNode } from 'react'
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            <SiteHeader />

            <main className="grow">{children}</main>

            <SiteFooter />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
