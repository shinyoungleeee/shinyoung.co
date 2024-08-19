'use client'

import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  className?: string
}

export function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps): JSX.Element {
  const router = useRouter()

  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
