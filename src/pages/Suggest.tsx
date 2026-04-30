import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'

export default function Suggest() {
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()

  const [shopName, setShopName] = useState('')
  const [address, setAddress] = useState('')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const isSubmitDisabled = useMemo(() => {
    return loading || authLoading || !shopName.trim() || !address.trim()
  }, [loading, authLoading, shopName, address])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!user?.id) {
      setError('Не удалось отправить, попробуйте ещё раз')
      return
    }

    setLoading(true)

    const { error: insertError } = await supabase.from('suggestions').insert([
      {
        shop_name: shopName.trim(),
        address: address.trim(),
        comment: comment.trim() ? comment.trim() : null,
        user_id: user.id,
      },
    ])

    setLoading(false)

    if (insertError) {
      setError('Не удалось отправить, попробуйте ещё раз')
      return
    }

    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
        <div className="mx-auto w-full max-w-[430px] px-4 pb-24 pt-6">
          <h1 className="text-2xl font-bold">Предложить кофейню</h1>
          <p className="mt-4 text-sm text-[#5C3317]">Спасибо! Рассмотрим в течение недели</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-6 w-full rounded-2xl bg-[#5C3317] px-4 py-3 text-sm font-medium text-white"
          >
            На главную
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FBF7F4] font-sans text-[#5C3317]">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-24 pt-6">
        <h1 className="text-2xl font-bold">Предложить кофейню</h1>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="shopName" className="mb-1 block text-sm font-medium">
              Название кофейни
            </label>
            <input
              id="shopName"
              type="text"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              placeholder="например: Coffee..."
              className="w-full rounded-xl border border-[#D9C5B7] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#5C3317]"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="mb-1 block text-sm font-medium">
              Адрес
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="например: ул. ___ №__, Кишинёв"
              className="w-full rounded-xl border border-[#D9C5B7] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#5C3317]"
              required
            />
          </div>

          <div>
            <label htmlFor="comment" className="mb-1 block text-sm font-medium">
              Комментарий
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Комментарий"
              rows={4}
              className="w-full resize-none rounded-xl border border-[#D9C5B7] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#5C3317]"
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="w-full rounded-2xl bg-[#5C3317] px-4 py-3 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Отправка...' : 'Отправить предложение'}
          </button>
        </form>
      </div>
    </main>
  )
}