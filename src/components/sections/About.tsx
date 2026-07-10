import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MapPin,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Award,
} from 'lucide-react'
import { personalData, timelineData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function About() {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const typeConfig: Record<
    string,
    { color: string; icon: any; bg: string }
  > = {
    work: {
      color: '#f59e0b',
      icon: Briefcase,
      bg: 'rgba(245, 158, 11, 0.05)',
    },
    education: {
      color: '#6366f1',
      icon: GraduationCap,
      bg: 'rgba(99, 102, 241, 0.05)',
    },
    achievement: {
      color: '#10b981',
      icon: Award,
      bg: 'rgba(16, 185, 129, 0.05)',
    },
  }

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Who I Am
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-36">
          <AnimatedSection
            direction="left"
            className="lg:col-span-5"
          >
            <div
              ref={imgRef}
              className="relative group max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                className="absolute -inset-4 rounded-3xl z-0 border border-blue-500/30 dark:border-blue-400/30 pointer-events-none"
                animate={
                  imgInView
                    ? {
                        scale: [0.95, 1.02, 1],
                        opacity: [0, 0.5, 1],
                      }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              />

              <motion.div
                className="absolute -inset-8 rounded-3xl z-0 border border-zinc-200 dark:border-zinc-800 pointer-events-none hidden sm:block"
                animate={
                  imgInView
                    ? {
                        scale: [0.92, 1.01, 1],
                        opacity: [0, 0.3, 1],
                      }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: 'easeOut',
                }}
              />

              <div className="relative z-10 overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-full aspect-[4/5] object-cover transition-all duration-700 contrast-[1.02] saturate-[0.95] group-hover:scale-105 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.9,
                }}
                animate={
                  imgInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: 0.4,
                }}
                className="absolute -bottom-5 -right-2 sm:-right-5 z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 rounded-2xl flex items-center gap-2.5 shadow-xl shadow-black/5"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-500 dark:text-blue-400">
                  <MapPin size={15} />
                </div>
                <span className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
                  {personalData.location}
                </span>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.1}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                {personalData.tagline}
              </h3>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                {personalData.bio.split('\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md transition-transform active:scale-95"
                >
                  <Mail size={16} />
                  Let's Connect
                </a>

                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all active:scale-95"
                >
                  View Resume
                  <ArrowUpRight
                    size={16}
                    className="opacity-60"
                  />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="flex flex-col mb-16">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
              My Journey
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Education & Achievements
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 dark:from-zinc-800 dark:via-zinc-800 to-transparent" />

            <div className="space-y-10">
              {timelineData.map((item, i) => {
                const config = typeConfig[item.type] || {
                  color: '#e4e4e7',
                  icon: Briefcase,
                  bg: 'transparent',
                }

                const IconComponent = config.icon

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      margin: '-100px',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20,
                      delay: i * 0.05,
                    }}
                    className="relative flex gap-8 pl-14 group"
                  >
                    <div
                      className="absolute left-6 top-6 w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 -translate-x-1/2 flex items-center justify-center z-10 bg-white dark:bg-zinc-950 transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        color: config.color,
                        boxShadow: `0 0 15px ${config.bg}`,
                      }}
                    >
                      <IconComponent size={16} />
                    </div>

                    <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden group-hover:translate-x-1">
                      <div
                        className="absolute top-0 left-0 w-1 h-full"
                        style={{
                          backgroundColor: config.color,
                        }}
                      />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            {item.title}
                          </h4>
                          <p
                            className="text-sm font-semibold tracking-wide mt-0.5"
                            style={{ color: config.color }}
                          >
                            {item.org}
                          </p>
                        </div>

                        <span className="text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 self-start sm:self-center shadow-sm">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}