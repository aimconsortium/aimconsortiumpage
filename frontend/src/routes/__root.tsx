import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Footer} from '@/components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
      <Footer />
    </div>
  )
}
