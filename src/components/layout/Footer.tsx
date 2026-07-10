import { personalData } from '@/data/portfolio'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialIcons = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'email', icon: Mail, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 md:px-12 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personalData.name}
            <span className="text-blue-500 dark:text-blue-400">.</span>
          </span>
          <p className="text-sm font-medium mt-1.5 max-w-sm text-zinc-500 dark:text-zinc-400">
            {personalData.tagline}
          </p>
        </div>

        <div className="flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 p-1 rounded-full">
          {socialIcons.map(({ key, icon: Icon, label }) => {
            const href = personalData.social?.[key as keyof typeof personalData.social]

            if (!href) return null

            return (
              <a
                key={key}
                href={key === 'email' ? `mailto:${href}` : href}
                target={key === 'email' ? undefined : '_blank'}
                rel={key === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            © {year} {personalData.name}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            Designed & Developed by {personalData.name}
          </p>
        </div>
      </div>
    </footer>
  )
}