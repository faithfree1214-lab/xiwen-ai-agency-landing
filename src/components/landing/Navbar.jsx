import { NavLink, Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import logoIcon from '@/assets/logo-icon.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
]

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-8 py-3 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" aria-label="Go to home">
          <img src={logoIcon} alt="Studio logo" className="h-12 w-12 rounded-full object-cover" />
        </Link>

        <nav className="hidden md:flex liquid-glass rounded-full px-1.5 py-1">
          {links.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium font-body ${isActive ? 'text-white' : 'text-foreground/90'}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm text-black"
          >
            Get Started <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <Link to="/contact" className="md:hidden liquid-glass rounded-full px-4 py-2 text-sm">
          Contact
        </Link>
      </div>
    </header>
  )
}
