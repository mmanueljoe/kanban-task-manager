import boardsData from '@data/boards.json'
import { Link } from 'react-router'
import type { Board } from '@/types'

const boards = boardsData.boards as Board[]

export function Dashboard() {
  return (
    <section aria-labelledby="dashboard-title" className="space-y-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 id="dashboard-title" className="text-2xl font-semibold text-gray-900 dark:text-slate-50">
            Boards
          </h1>
          <p className="text-sm text-gray-600 dark:text-slate-400">Choose a board to view its tasks and columns.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {boards.map((board) => (
          <Link
            key={board.id}
            to={`/board/${board.id}`}
            className="group rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-gray-50 dark:hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-50 group-hover:text-sky-600 dark:group-hover:text-sky-100">
              {board.name}
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">{board.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
