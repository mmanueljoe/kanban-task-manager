import { useNavigate } from 'react-router'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center space-y-4 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 px-6 py-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-slate-50">404 - Page not found</h1>
        <p className="text-sm text-gray-600 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
        >
          Return to Dashboard
        </button>
      </div>
    </section>
  )
}
