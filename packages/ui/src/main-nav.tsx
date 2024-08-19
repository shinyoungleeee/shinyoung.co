'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMetadata } from './metadata-provider'
import { cn } from './utils'

export function MainNav(): JSX.Element {
  const pathname = usePathname()
  const { siteHeaderIcon, siteLinks } = useMetadata()

  return (
    <div className="mr-4 hidden md:flex">
      <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
        {siteHeaderIcon}
        <span className="font-bold">shinyoung.co</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {siteLinks.map(({ href, text }) => (
          <Link
            className={cn(
              'hover:text-foreground/80 transition-colors',
              pathname === href ? 'text-foreground' : 'text-foreground/60'
            )}
            href={href}
            key={href}
          >
            {text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
