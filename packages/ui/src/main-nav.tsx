'use client'

import { Martini } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from './utils'

export function MainNav(): JSX.Element {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
        <Martini className="h-6 w-6" />
        <span className="font-bold">shinyoung.co</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname === '/manage' ? 'text-foreground' : 'text-foreground/60'
          )}
          href="/manage"
        >
          manage
        </Link>
      </nav>
    </div>
  )
}
