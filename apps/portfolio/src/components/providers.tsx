import type { SiteMetadata } from '@repo/ui/metadata-provider'
import { MetadataProvider } from '@repo/ui/metadata-provider'
import { ThemeProvider } from '@repo/ui/theme-provider'
import { BriefcaseBusiness } from 'lucide-react'
import { type ReactNode } from 'react'

const siteMetadata = {
  siteHeaderIcon: <BriefcaseBusiness className="h-6 w-6" />,
  siteLinks: [{ href: '/', text: 'home' }],
  githubTreePath: '/tree/main/apps/portfolio',
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
