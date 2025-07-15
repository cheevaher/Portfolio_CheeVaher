import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  // ✅ Load from localStorage or default to true (Dark Mode on)
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode')
    return stored === null ? true : stored === 'true'
  })

  // ✅ Save user's choice to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <HomePage darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}
