import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { cn } from '../lib/utils'
import { cal, inter } from '../styles/fonts'
import '../styles/globals.css'
import { Providers } from './providers'

const title = "Shinyoung Lee's Porfolio"
const description =
  'Portfolio for Shinyoung Lee, Lead Software Engineer and Manager'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shinyoungleeee',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
