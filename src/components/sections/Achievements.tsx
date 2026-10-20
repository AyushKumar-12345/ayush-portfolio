import { motion } from 'framer-motion'
import { achievementsData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ExternalLink } from 'lucide-react'

interface AchievementItem {
  title: string
  subtitle: string
  description: string
  year: string
  icon: React.ReactNode
  color: string
  url?: string
}

export function Achievements() {
  return (
    <div id="achievements" className="scroll-mt-24">
      <section
        className="py-32 px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
              Milestones & Recognition
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
              Achievements & Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(achievementsData as AchievementItem[]).map((item, i) => {
              const hasUrl = Boolean(item.url)
              const Component = hasUrl ? motion.a : motion.div

              return (
                <Component
                  key={i}
                  {...(hasUrl
                    ? {
                        href: item.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: i * 0.06,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block cursor-pointer"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 20% 20%, ${item.color}10, transparent 65%)`,
                    }}
                  />

                  <div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border shadow-sm transition-all duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${item.color}08`,
                          borderColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 shadow-sm">
                          {item.year}
                        </span>

                        {hasUrl && (
                          <div className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 shadow-sm transition-colors">
                            <ExternalLink size={12} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                          {item.title}
                        </h3>

                        <p
                          className="text-xs font-semibold tracking-wide mb-4"
                          style={{ color: item.color }}
                        >
                          {item.subtitle}
                        </p>

                        <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
                          Verified Milestone
                        </span>
                      </div>
                    </div>
                  </div>
                </Component>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
