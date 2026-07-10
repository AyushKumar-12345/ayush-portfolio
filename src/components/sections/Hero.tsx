import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  ArrowDown,
  Github,
  Linkedin,
  FileText,
} from 'lucide-react'
import { personalData } from '@/data/portfolio'

const floatingShapes = [
  {
    size: 350,
    x: '75%',
    y: '12%',
    opacity: 0.15,
    delay: 0,
  },
  {
    size: 250,
    x: '80%',
    y: '58%',
    opacity: 0.12,
    delay: 1.5,
  },
  {
    size: 180,
    x: '8%',
    y: '72%',
    opacity: 0.12,
    delay: 3,
  },
]

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden pt-24"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[80px]"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: 'radial-gradient(circle, #3b82f6 0%, transparent 80%)',
              opacity: shape.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.08, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              delay: shape.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div
          className="absolute inset-0 dark:opacity-20 opacity-70"
          style={{
            backgroundImage: `linear-gradient(rgba(228, 228, 231, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(228, 228, 231, 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle 600px at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle 600px at 50% 50%, black 20%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Column: Context Details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-blue-500 dark:bg-blue-400" />
            <span className="text-xs tracking-[0.4em] uppercase font-mono font-bold text-blue-500 dark:text-blue-400">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display font-black tracking-tight mb-8 text-zinc-900 dark:text-zinc-50 whitespace-nowrap"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
            }}
          >
            {personalData.name}
            <span className="text-blue-500 dark:text-blue-400">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-8"
          >
            <span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-500 dark:text-zinc-400">
              I build
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-blue-500 dark:text-blue-400">
              <TypeAnimation
                sequence={[
                  'Full Stack Web Applications',
                  2200,
                  'MERN Stack Solutions',
                  2200,
                  'Java DSA Solutions',
                  2200,
                  'AI & ML Projects',
                  2200,
                  'Responsive User Interfaces',
                  2200,
                ]}
                repeat={Infinity}
                speed={50}
                deletionSpeed={65}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="text-base md:text-lg font-medium max-w-2xl mb-12 leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            {personalData.bio.slice(0, 170).trim()}...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold tracking-wide px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Explore My Work
            </button>

            <a
              href="./Ayush_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wide px-8 py-4 rounded-full flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all active:scale-95"
            >
              <FileText size={15} className="opacity-70" />
              View Resume
            </a>

            <div className="flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-1.5 rounded-full shadow-sm">
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Github size={20} />
              </a>

              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.7,
            }}
            className="flex flex-wrap gap-x-12 gap-y-6 mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-10 w-full"
          >
            {[
              { value: '7.48', label: 'CGPA' },
              { value: '3', label: 'Major Projects' },
              { value: '200+', label: 'DSA Problems' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col min-w-[120px]">
                <div className="font-display text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Side-by-Side Portrait Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mt-8 lg:mt-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-50 dark:bg-zinc-900 group">
            <img
              src={personalData.avatar}
              alt={personalData.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        whileHover={{ y: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase font-mono font-bold text-zinc-400 dark:text-zinc-500 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
          Scroll Down
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut',
          }}
          className="text-zinc-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}