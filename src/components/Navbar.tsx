import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import logo from '/profile.png' // แล้วใช้ src={logo}


export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-[#0f172a]' : 'bg-white'
        } shadow-md`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full dark:invert dark:brightness-0"
          />
          <h1
            className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-800'
              }`}
          >
            DevPortfolio
          </h1>
        </div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors ${darkMode
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {item.name}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-1"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden px-6 pb-4 ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 px-3 rounded-md font-medium transition ${darkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
