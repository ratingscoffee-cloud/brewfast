import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import AddReview from './pages/AddReview'
import History from './pages/History'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Profile from './pages/Profile'
import ShopDetail from './pages/ShopDetail'
import Suggest from './pages/Suggest'

function App() {
  const location = useLocation()
  const hideBottomNav = location.pathname === '/privacy'

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
        <Route path="/shop/:id/review" element={<AddReview />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideBottomNav && <BottomNav />}
    </>
  )
}

export default App