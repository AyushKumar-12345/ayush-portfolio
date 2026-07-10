import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { personalData } from '@/data/portfolio'

export function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-zinc-950"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: 'blur(4px)',
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-6xl md:text-7xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-50 select-none"
            >
              {personalData.name.split(' ')[0]}
              <span className="text-blue-500 dark:text-blue-400">.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
              className="text-xs uppercase tracking-[0.4em] font-semibold text-zinc-400 dark:text-zinc-500 mb-8"
            >
              Portfolio
            </motion.p>

            <div className="w-44 h-[2px] rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative shadow-inner">
              <motion.div
                initial={{
                  left: '-100%',
                }}
                animate={{
                  left: '100%',
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}