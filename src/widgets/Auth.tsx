'use client'
import React from 'react'
import Login from './admin/Login'

export default function Auth({ children }: { children: React.ReactNode }) {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('token') &&
    localStorage.getItem('token') === process.env.NEXT_PUBLIC_TOKEN
  ) {
    return <>{children}</>
  } else return <Login />
}
