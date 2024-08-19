'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'
import { ModalProvider } from '../components-old/modal/provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster className="dark:hidden" />
      <Toaster theme="dark" className="hidden dark:block" />
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  )
}
