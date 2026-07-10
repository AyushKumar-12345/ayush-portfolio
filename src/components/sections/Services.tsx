import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { servicesData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface ServiceItem {
  title: string
  description: string
  price: string
  icon: React.ReactNode
  features: string[]
}

export function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            My Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
            How I Can Contribute
          </h2>
          <p className="text-base md:text-lg font-medium max-w-2xl mb-20 text-zinc-500 dark:text-zinc-400">
            Passionate about building scalable web applications, solving complex problems, and contributing to impactful software projects through modern technologies.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(servicesData as ServiceItem[]).map((service, i) => (
            <motion.div
              key={i}
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
              className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-8 sm:p-10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div className="w-14 h-14 text-2xl flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all duration-300 group-hover:scale-105 text-zinc-900 dark:text-zinc-50">
                    {service.icon}
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full border border-blue-500/20 dark:border-blue-400/20 bg-blue-500/5 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3.5 mb-8">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="p-0.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <span className="leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-blue-500 dark:text-blue-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-all duration-300 cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight size={15} />
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}