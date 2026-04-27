import { useNavigate, useParams } from 'react-router-dom'

export default function AddReview() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-24 pt-6">
        <button type="button" onClick={() => navigate(-1)} className="mb-4 text-lg">
          ← Назад
        </button>
        <h1 className="text-2xl font-bold">Оценить кофейню</h1>
        <p className="mt-3 text-sm text-[#8F7A6B]">Страница оценки для кофейни #{id}</p>
      </div>
    </main>
  )
}