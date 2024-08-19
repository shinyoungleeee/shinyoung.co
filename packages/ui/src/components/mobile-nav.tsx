'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useMetadata } from '../providers/metadata-provider'
import { projectLinks } from '../lib/constants'
import { Button } from './button'
import { MobileLink } from './mobile-link'
import { ScrollArea } from './scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './sheet'

export function MobileNav(): JSX.Element {
  const [open, setOpen] = useState(false)
  const { siteHeaderIcon, siteLinks } = useMetadata()
  const pathname = usePathname()

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          variant="ghost"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="pr-0" side="left">
        <SheetTitle className="hidden">Mobile navigation menu</SheetTitle>
        <SheetDescription className="hidden">
          Opens when you click the menu icon.
        </SheetDescription>

        <MobileLink
          className="flex items-center space-x-2"
          href="/"
          onOpenChange={setOpen}
        >
          {siteHeaderIcon}
          <span className="font-bold">shinyoung.co</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {siteLinks.map(({ href, text }) => (
              <MobileLink
                className={
                  pathname === href ? 'text-foreground' : 'text-foreground/60'
                }
                href={href}
                key={href}
                onOpenChange={setOpen}
              >
                {text}
              </MobileLink>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-3 pt-6">
              <h4 className="font-medium">Projects</h4>
              {projectLinks.map(({ href, text }) => (
                <MobileLink
                  className="text-muted-foreground"
                  href={href}
                  key={href}
                  onOpenChange={setOpen}
                >
                  {text}
                </MobileLink>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
