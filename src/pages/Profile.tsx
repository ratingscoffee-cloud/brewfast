import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-24 pt-6">
        <h1 className="text-2xl font-bold">Профиль</h1>

        <div className="mt-4 space-y-2">
          <button type="button" onClick={() => navigate('/history')} className="block text-left">
            Моя история оценок
          </button>
          <button type="button" onClick={() => navigate('/suggest')} className="block text-left">
            Предложить кофейню
          </button>
          <button type="button" onClick={() => navigate('/privacy')} className="block text-left">
            Политика конфиденциальности
          </button>
        </div>
      </div>
    </main>
  )
}