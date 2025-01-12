import MainPage from '@/widgets/admin/MainPage'
import Auth from '@/widgets/Auth'

export default function AdminPage() {
  return (
    <Auth>
      <MainPage />
    </Auth>
  )
}
