import { NavLink } from 'react-router'
import data from '@data/boards.json'
import type { Board } from '@/types'

const boards = data.boards as Board[]

export function Sidebar() {
  return (
    <aside className="bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 lg:border-b-0 lg:border-r lg:col-span-3 p-4 flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-400">Boards</h2>
      <nav aria-label="Boards" className="space-y-1 overflow-auto">
        {boards.map((board) => (
          <NavLink
            key={board.id}
            to={`/board/${board.id}`}
            aria-label={`Open board ${board.name}`}
            className={({ isActive }) =>
              [
                'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900',
                isActive
                  ? 'bg-sky-500 text-white'
                  : 'text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white',
              ].join(' ')
            }
          >
            {board.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
