import { Routes, Route } from 'react-router'
import { Layout } from '@/components/Layout'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { Admin } from '@/pages/Admin'
import { NotFound } from '@/pages/NotFound'
import { BoardView } from '@/components/BoardView'
import { ProtectedRoutes } from '@/components/ProtectedRoutes'

export function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route
          index
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="board/:boardId"
          element={
            <ProtectedRoutes>
              <BoardView />
            </ProtectedRoutes>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
