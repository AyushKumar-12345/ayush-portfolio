import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import { codingPlatformsData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface Stat {
  label: string
  value: number | string
  suffix?: string
}

interface Platform {
  platform: string
  username: string
  icon: React.ReactNode
  color: string
  url: string
  stats: Stat[]
}

function StatCard({
  stat,
  color,
  inView,
}: {
  stat: Stat
  color: string
  inView: boolean
}) {
  const parsedValue =
    typeof stat.value === 'string'
      ? parseFloat(stat.value)
      : stat.value

  const isNumber =
    !isNaN(parsedValue as number) &&
    isFinite(parsedValue as number)

  const suffix = stat.suffix || ''

  return (
    <div className="text-center flex flex-col justify-between min-w-0">
      <div
        className="text-xl sm:text-2xl font-display font-bold tracking-tight mb-1 truncate"
        style={{ color }}
      >
        {isNumber && inView ? (
          <CountUp
            end={parsedValue as number}
            duration={2}
            suffix={suffix}
            separator=","
          />
        ) : (
          `${stat.value}${suffix}`
        )}
      </div>
      <div className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400 truncate">
        {stat.label}
      </div>
    </div>
  )
}

export function CodingPlatforms() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <section
      id="coding"
      className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Coding Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            Coding Profiles
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {(codingPlatformsData as Platform[]).map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
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
              className="group relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-7 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${platform.color}10, transparent 65%)`,
                }}
              />

              <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{
                  backgroundColor: platform.color,
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm shrink-0 text-xl transition-all duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${platform.color}05`,
                          borderColor: `${platform.color}18`,
                          color: platform.color,
                        }}
                      >
                        {platform.icon}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50 truncate">
                          {platform.platform}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                          @{platform.username}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 shadow-sm transition-colors">
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  <div
                    className="h-px mb-6"
                    style={{
                      backgroundColor: `${platform.color}20`,
                    }}
                  />

                  <div className="grid grid-cols-3 gap-3 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-4 rounded-xl shadow-inner">
                    {platform.stats.map((stat, si) => (
                      <StatCard
                        key={si}
                        stat={stat}
                        color={platform.color}
                        inView={inView}
                      />
                    ))}
                  </div>

                  <div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 opacity-90 group-hover:opacity-100"
                    style={{ color: platform.color }}
                  >
                    <span>Visit Profile</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: 'easeInOut',
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}