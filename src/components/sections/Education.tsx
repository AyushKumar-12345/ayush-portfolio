import { motion } from 'framer-motion'
import { educationData } from '@/data/portfolio'
import {
  AnimatedSection,
  StaggerContainer,
  fadeUpItem,
} from '@/components/ui/AnimatedSection'
import { Award, CheckCircle } from 'lucide-react'

interface EducationItem {
  degree: string
  institution: string
  year: string
  logo: React.ReactNode
  grade: string
  description: string
  highlights: string[]
}

export function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Academic Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(educationData as EducationItem[]).map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="group relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="w-14 h-14 text-2xl flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm transition-all duration-300 group-hover:scale-105">
                    {edu.logo}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 shadow-sm">
                    {edu.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold tracking-wide mb-4 text-blue-500 dark:text-blue-400">
                  {edu.institution}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wide border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 px-3 py-1.5 rounded-lg mb-5 shadow-sm">
                  <Award
                    size={13}
                    className="text-blue-500 dark:text-blue-400"
                  />
                  {edu.grade}
                </div>

                <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400 mb-6">
                  {edu.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  {edu.highlights.map((highlight, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="p-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5 animate-pulse">
                        <CheckCircle size={12} />
                      </div>
                      <span className="leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}