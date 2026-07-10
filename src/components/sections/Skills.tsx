import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillsData, techIcons } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface Skill {
  name: string
  level: number
}

interface TechIcon {
  name: string
  icon: React.ReactNode
}

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-50">
          {name}
        </span>
        <span className="text-xs font-mono font-bold text-blue-500 dark:text-blue-400">
          {level}%
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden shadow-inner">
        <motion.div
          className="h-full rounded-full bg-zinc-900 dark:bg-white"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.4,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  )
}

const categories = [
  {
    key: 'frontend',
    label: 'Frontend Development',
    icon: '🎨',
  },
  {
    key: 'backend',
    label: 'Backend Development',
    icon: '⚙️',
  },
  {
    key: 'tools',
    label: 'Programming & AI/ML',
    icon: '💻',
  },
] as const

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Technical Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.key} delay={ci * 0.08}>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-10 h-10 text-xl flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {cat.label}
                  </h3>
                </div>

                {((skillsData as Record<string, Skill[]>)[cat.key] || []).map(
                  (skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={ci * 0.05 + si * 0.04}
                    />
                  )
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="relative border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl shadow-inner overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/70 to-transparent dark:from-zinc-900 dark:via-zinc-900/70 z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/70 to-transparent dark:from-zinc-900 dark:via-zinc-900/70 z-10 pointer-events-none" />

            <div className="flex gap-4 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
              {[
                ...(techIcons as TechIcon[]),
                ...(techIcons as TechIcon[]),
                ...(techIcons as TechIcon[]),
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="flex-shrink-0 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 px-6 py-3.5 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <span className="text-xl shrink-0">{tech.icon}</span>
                  <span className="text-sm font-bold tracking-wide whitespace-nowrap text-zinc-500 dark:text-zinc-400 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}