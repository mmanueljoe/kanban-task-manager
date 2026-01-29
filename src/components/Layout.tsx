import { Outlet } from 'react-router'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-50 grid grid-rows-[auto,1fr] lg:grid-rows-1 lg:grid-cols-12">
      <Sidebar />
      <div className="lg:col-span-9 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-auto" role="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
