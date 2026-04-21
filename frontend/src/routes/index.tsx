import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/pages/landing/LandingPage'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <LandingPage />
    </div>
  )
}
