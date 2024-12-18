import Login from '@/widgets/admin/Login'
import MainPage from '@/widgets/admin/MainPage'

export default function AdminPage() {
  const userIsAdmin = true
  return (
    <>
      {userIsAdmin && <MainPage />}
      {!userIsAdmin && <Login />}
    </>
  )
}
