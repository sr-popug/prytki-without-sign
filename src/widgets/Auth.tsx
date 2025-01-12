'use client'
import React, { useEffect } from 'react'
import Login from './admin/Login'

export default function Auth({ children }: { children: React.ReactNode }) {
  const [page, setPage] = React.useState<React.ReactNode>(children)
  useEffect(() => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') === process.env.NEXT_PUBLIC_TOKEN
    ) {
      setPage(children)
    } else {
      setPage(<Login />)
    }
  }, [])

  return <>{page}</>
}
