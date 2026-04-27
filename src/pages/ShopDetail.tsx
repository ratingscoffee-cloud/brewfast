import { useNavigate, useParams } from 'react-router-dom'

const reviews = [
  {
    id: '1',
    name: 'Алина',
    drink: '★★★★★',
    place: '★★★★☆',
    service: '★★★★★',
    text: 'Очень уютно и быстро подали фильтр-кофе.',
    date: '18.04.2026',
  },
  {
    id: '2',
    name: 'Игорь',
    drink: '★★★★☆',
    place: '★★★★★',
    service: '★★★★☆',
    text: 'Хороший капучино, в обед немного шумно.',
    date: '17.04.2026',
  },
  {
    id: '3',
    name: 'Мария',
    drink: '★★★★★',
    place: '★★★★☆',
    service: '★★★★☆',
    text: 'Десерты отличные, вернусь снова.',
    date: '16.04.2026',
  },
]

export default function ShopDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-28 pt-4">
        <div className="mb-4 h-[200px] w-full rounded-2xl bg-gray-300 shadow-sm" />

        <h1 className="text-2xl font-bold">Кофейня #{id}</h1>
        <p className="mt-1 text-sm text-gray-500">ул. Пушкина, 12, Кишинёв</p>
        <p className="mt-1 text-sm text-gray-500">Пн–Вс: 08:00–22:00</p>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <p className="font-medium">Общий: ★★★★☆</p>
          <p className="mt-1 font-medium">Сегодня: ★★★★★</p>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Оценки</h2>
          <div className="space-y-3">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-semibold">{review.name}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>Напиток: {review.drink}</p>
                  <p>Место: {review.place}</p>
                  <p>Обслуживание: {review.service}</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">{review.text}</p>
                <p className="mt-2 text-xs text-gray-500">{review.date}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="h-32" />
      </div>

      <div className="fixed bottom-14 left-0 right-0 bg-[#FBF7F4]/95 p-4 backdrop-blur">
        <div className="mx-auto w-full max-w-[430px]">
          <button
            type="button"
            onClick={() => navigate(`/shop/${id}/review`)}
            className="w-full rounded-2xl bg-[#5C3317] px-4 py-3 text-base font-semibold text-white shadow-sm"
          >
            Оценить ☕
          </button>
        </div>
      </div>
    </main>
  )
}