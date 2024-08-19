import type { SiteMetadata } from '@repo/ui/metadata-provider'
import { MetadataProvider } from '@repo/ui/metadata-provider'
import { ThemeProvider } from '@repo/ui/theme-provider'
import { Martini } from 'lucide-react'
import { type ReactNode } from 'react'

const siteMetadata = {
  siteHeaderIcon: <Martini className="h-6 w-6" />,
  siteLinks: [
    { href: '/', text: 'home' },
    { href: '/manage', text: 'manage' },
  ],
  githubTreePath: '/tree/main/apps/cocktails',
} as const satisfies SiteMetadata

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <MetadataProvider {...siteMetadata}>
      <ThemeProvider>{children}</ThemeProvider>
    </MetadataProvider>
  )
}
