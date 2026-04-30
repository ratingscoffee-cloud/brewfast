import { useEffect, useState } from 'react'

type AuthUser = {
  id: string
  firstName?: string
  lastName?: string
  username?: string
}

type UseAuthResult = {
  user: AuthUser | null
  loading: boolean
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user

    if (tgUser?.id) {
      setUser({
        id: String(tgUser.id),
        firstName: tgUser.first_name,
        lastName: tgUser.last_name,
        username: tgUser.username,
      })
    } else {
      setUser(null)
    }

    setLoading(false)
  }, [])

  return { user, loading }
}