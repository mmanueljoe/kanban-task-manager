import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

export function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
