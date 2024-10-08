'use client'

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChevronDownIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { useMetadata } from '../providers/metadata-provider'
import { projectLinks } from '../lib/constants'
import { LightDarkToggle } from './light-dark-toggle'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card'

export function SiteHeader(): JSX.Element {
  const { githubTreePath } = useMetadata()

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <HoverCard>
            <HoverCardTrigger className="group hidden cursor-default md:block">
              Projects{' '}
              <ChevronDownIcon className="inline-block transition-transform group-hover:rotate-180" />
            </HoverCardTrigger>
            <HoverCardContent align="end" className="flex flex-col space-y-1">
              {projectLinks.map(({ href, text }) => (
                <Link
                  className="text-foreground/60 hover:text-foreground/80 transition-colors"
                  href={href}
                  key={href}
                >
                  {text}
                </Link>
              ))}
            </HoverCardContent>
          </HoverCard>

          <nav className="flex items-center">
            <Link
              href={`https://github.com/shinyoungleeee/shinyoung.co${githubTreePath}`}
              rel="noreferrer"
              target="_blank"
            >
              <div className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
                <GitHubLogoIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/shinyoung-lee/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
                <LinkedInLogoIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <LightDarkToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
