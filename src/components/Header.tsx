import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { LogOut, Sun, Moon } from 'lucide-react'

export function Header() {
  const { logout, isLoggedIn } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-slate-50">Kanban Task Manager</h1>
        <p className="text-xs text-gray-600 dark:text-slate-400">Manage boards, tasks, and workflows</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
        {isLoggedIn && (
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
            aria-label="Log out"
          >
            <LogOut />
          </button>
        )}
      </div>
    </header>
  )
}
