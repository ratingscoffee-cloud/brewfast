import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShopDetail from './pages/ShopDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/:id" element={<ShopDetail />} />
      <Route path="/shop/:id/review" element={<div className="p-4">Review page placeholder</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
