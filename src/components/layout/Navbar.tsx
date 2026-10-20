import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme, useScrollPosition, useActiveSection } from '@/hooks'
import { personalData } from '@/data/portfolio'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'coding', label: 'Coding' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const scrollY = useScrollPosition()
  const activeSection = useActiveSection(navItems.map((n) => n.id))
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 50

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-sm'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="font-display text-2xl font-bold tracking-tight transition-transform active:scale-95 text-zinc-900 dark:text-zinc-50 cursor-pointer"
          >
            {personalData.name.split(' ')[0]}
            <span className="text-blue-500 dark:text-blue-400">.</span>
          </button>

          <ul className="hidden xl:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 p-1 rounded-full relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-colors relative z-10 cursor-pointer ${
                      isActive
                        ? 'text-white dark:text-zinc-950'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:flex bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-xs sm:text-sm font-semibold tracking-wide px-5 sm:px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              Let's Connect
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden relative z-50 p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-transform active:scale-95 cursor-pointer"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden flex flex-col bg-white/95 dark:bg-zinc-950/95 overflow-y-auto"
          >
            <div className="flex flex-col flex-1 pt-28 pb-12 px-8 max-w-md w-full mx-auto justify-center">
              <ul className="flex flex-col gap-5">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`font-display text-3xl font-semibold tracking-tight transition-transform active:scale-95 cursor-pointer ${
                        activeSection === item.id
                          ? 'text-blue-500 dark:text-blue-400'
                          : 'text-zinc-500 dark:text-zinc-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold py-3.5 rounded-full shadow-md transition-transform active:scale-95"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
