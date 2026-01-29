import { useAuth } from '@/hooks/useAuth'
import { useNavigate, useLocation, type Location } from 'react-router'
import { useCallback } from 'react'

export function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from: Location })?.from.pathname || '/'

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      login()
      navigate(from, { replace: true })
    },
    [login, navigate, from],
  )

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-slate-50">Sign in</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">Enter your credentials to access your boards.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-gray-900 dark:text-slate-50 placeholder:text-gray-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-gray-900 dark:text-slate-50 placeholder:text-gray-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
