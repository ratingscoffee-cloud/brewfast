import { NavLink } from 'react-router-dom'

const tabs = [
  { label: 'Кофейни', to: '/' },
  { label: 'История', to: '/history' },
  { label: 'Профиль', to: '/profile' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E9DED4] bg-[#FBF7F4]">
      <div className="mx-auto grid w-full max-w-[430px] grid-cols-3">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            className={({ isActive }) =>
              `py-3 text-center text-sm font-medium ${
                isActive ? 'text-[#5C3317]' : 'text-[#9D8B7E]'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
