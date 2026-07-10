import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  X,
} from 'lucide-react'
import { projectsData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type Project = typeof projectsData[0]

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        initial={{
          scale: 0.95,
          opacity: 0,
          y: 20,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0.95,
          opacity: 0,
          y: 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div className="relative overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 sm:p-10 relative z-10 -mt-6 rounded-t-3xl bg-white dark:bg-zinc-950">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="text-sm font-semibold tracking-wide text-blue-500 dark:text-blue-400 mt-1">
                {project.tagline}
              </p>
            </div>

            <div className="flex gap-2 self-start">
              {project.stats?.stars !== undefined && project.stats.stars > 0 && (
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 shadow-sm">
                  <Star
                    size={12}
                    className="text-amber-500 fill-amber-500"
                  />
                  {project.stats.stars}
                </div>
              )}

              {project.stats?.forks !== undefined && project.stats.forks > 0 && (
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 shadow-sm">
                  <GitFork size={12} />
                  {project.stats.forks}
                </div>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono font-bold tracking-wide border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 justify-center py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <ExternalLink size={15} />
              Live Preview
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 justify-center py-3.5 rounded-xl text-sm font-semibold border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Github size={15} />
              View Source
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Featured Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            Projects & Case Studies
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
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
                scale: 1.01,
              }}
              onClick={() => setSelected(project)}
              className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-52 sm:h-60 shrink-0 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {project.featured && (
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-500 backdrop-blur-md shadow-sm">
                    Featured
                  </span>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-zinc-200 dark:border-zinc-800">
                    Explore Project →
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-full shadow-sm shrink-0">
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-full text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <Github size={15} />
                      </a>

                      <a
                        href={project.live}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-1.5 rounded-full text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm font-semibold tracking-wide text-blue-500 dark:text-blue-400 mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed font-medium text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono font-bold tracking-wide border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2.5 py-1 rounded-lg text-[11px] text-zinc-500 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.tech.length > 4 && (
                    <span className="font-mono font-bold tracking-wide border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2.5 py-1 rounded-lg text-[11px] text-zinc-500 dark:text-zinc-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}