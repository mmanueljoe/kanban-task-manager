import { useParams, useNavigate } from 'react-router'
import { useEffect, useMemo } from 'react'
import data from '@data/boards.json'
import type { Board } from '@/types'

const boards = data.boards as Board[]

export function BoardView() {
  const { boardId } = useParams<{ boardId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!boardId) {
      navigate('/')
    }
  }, [boardId, navigate])

  const id = Number(boardId)

  const board = useMemo(() => boards.find((b) => b.id === id), [id])

  return (
    <section className="space-y-4">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm text-gray-700 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
      >
        ← Back to Dashboard
      </button>

      {board ? (
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-slate-50">{board.name}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">{board.description}</p>
        </div>
      ) : (
        <div className="rounded-lg border border-rose-300 dark:border-rose-500/40 bg-rose-50 dark:bg-rose-950/40 p-4 text-rose-900 dark:text-rose-100">
          <h2 className="text-lg font-semibold">Board not found</h2>
          <p className="text-sm">The board you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      )}
    </section>
  )
}
