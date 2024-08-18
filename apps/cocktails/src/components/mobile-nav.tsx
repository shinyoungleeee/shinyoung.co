'use client'

import { Martini, Menu } from 'lucide-react'
import { useState } from 'react'
import { MobileLink } from './mobile-link'
import { Button } from '@/components/button'
import { ScrollArea } from '@/components/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet'

export function MobileNav(): JSX.Element {
  const [open, setOpen] = useState(false)

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
        <MobileLink
          className="flex items-center space-x-2"
          href="/"
          onOpenChange={setOpen}
        >
          <Martini className="h-6 w-6" />
          <span className="font-bold">shinyoung.co</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href="/manage" onOpenChange={setOpen}>
              manage
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
