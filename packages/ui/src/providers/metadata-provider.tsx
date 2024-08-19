'use client'

import { createContext, useContext, type ReactNode } from 'react'

export interface SiteLinkMetadata {
  href: string
  text: ReactNode
}

export type SiteMetadata = Readonly<{
  siteHeaderIcon: ReactNode
  siteLinks: SiteLinkMetadata[]
  githubTreePath: string
}>

interface MetadataProviderProps extends SiteMetadata {
  children: ReactNode
}

const MetadataContext = createContext<SiteMetadata>({
  siteHeaderIcon: '',
  siteLinks: [],
  githubTreePath: '',
})

export function MetadataProvider({
  children,
  ...metadata
}: MetadataProviderProps): JSX.Element {
  return (
    <MetadataContext.Provider value={metadata}>
      {children}
    </MetadataContext.Provider>
  )
}

export const useMetadata = () => useContext(MetadataContext)
