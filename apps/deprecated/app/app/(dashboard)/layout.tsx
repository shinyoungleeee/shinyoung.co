import { ReactNode, Suspense } from 'react'
import Profile from '../../../components-old/profile'
import NavOld from '../../../components-old/nav-old'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavOld>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </NavOld>
      <div className="min-h-screen sm:pl-60 dark:bg-black">{children}</div>
    </div>
  )
}
