import { useNavigate } from 'react-router-dom'

type ShopCard = {
  id: string
  name: string
  address: string
  rating: string
  distance: string
  isOpen: boolean
}

const bestToday = [
  { id: '1', name: 'Kafune', rating: '★★★★☆' },
  { id: '2', name: 'Coffeevarka', rating: '★★★★☆' },
  { id: '3', name: 'Tucano', rating: '★★★★☆' },
]

const shops: ShopCard[] = [
  { id: '1', name: 'Kafune', address: 'ул. Пушкина, 12', rating: '★★★★☆', distance: '0.4 км', isOpen: true },
  { id: '2', name: 'Coffeevarka', address: 'бул. Штефан чел Маре, 89', rating: '★★★★☆', distance: '0.6 км', isOpen: false },
  { id: '3', name: 'Tucano', address: 'ул. Колумна, 44', rating: '★★★★☆', distance: '1.0 км', isOpen: true },
  { id: '4', name: 'Black Rabbit', address: 'ул. Вероники Микле, 8', rating: '★★★★☆', distance: '1.4 км', isOpen: true },
  { id: '5', name: 'Roast Lab', address: 'ул. Армянская, 21', rating: '★★★★☆', distance: '2.0 км', isOpen: false },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-24 pt-6">
        <h1 className="mb-5 text-3xl font-bold">BrewFast ☕</h1>

        <section className="mb-6">
          <h2 className="mb-3 text-lg font-semibold">Лучшие сегодня</h2>
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
            {bestToday.map((shop) => (
              <button
                key={shop.id}
                type="button"
                onClick={() => navigate(`/shop/${shop.id}`)}
                className="min-w-[170px] rounded-2xl bg-white p-4 text-left shadow-sm"
              >
                <p className="font-semibold">{shop.name}</p>
                <p className="mt-1 text-sm">{shop.rating}</p>
              </button>
            ))}
          </div>
        </section>

        <label className="mb-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
          <span aria-hidden="true">🔍</span>
          <input
            type="text"
            placeholder="Найти кофейню"
            className="w-full bg-transparent text-sm text-[#5C3317] placeholder:text-[#8B8B8B] outline-none"
          />
        </label>

        <section className="space-y-3">
          {shops.map((shop) => (
            <button
              key={shop.id}
              type="button"
              onClick={() => navigate(`/shop/${shop.id}`)}
              className="flex w-full items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-sm"
            >
              <div className="h-16 w-16 shrink-0 rounded-xl bg-gray-300" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{shop.name}</p>
                <p className="truncate text-sm text-gray-500">{shop.address}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                  <span>{shop.rating}</span>
                  <span className="text-gray-500">{shop.distance}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      shop.isOpen
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {shop.isOpen ? 'Открыто' : 'Закрыто'}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </section>
      </div>
    </main>
  )
}