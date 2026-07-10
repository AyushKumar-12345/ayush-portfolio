import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Education } from '@/components/sections/Education'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { CodingPlatforms } from '@/components/sections/CodingPlatforms'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'
import { personalData } from '@/data/portfolio'

export default function App() {
  return (
    <>
      <Helmet>
        <title>{personalData.name} | Full Stack Web Developer</title>
        <meta name="description" content={personalData.tagline} />
        <meta name="author" content={personalData.name} />
        <meta
          name="keywords"
          content="Ayush Kumar, Full Stack Developer, MERN Stack, React Developer, Node.js, Express.js, MongoDB, JavaScript, TypeScript, Java, DSA, Machine Learning, AI, Portfolio, IIIT Bhubaneswar"
        />
        <meta property="og:title" content={`${personalData.name} | Portfolio`} />
        <meta property="og:description" content={personalData.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={personalData.avatar} />
        <meta property="og:site_name" content="Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalData.name} | Portfolio`} />
        <meta name="twitter:description" content={personalData.tagline} />
      </Helmet>

      <LoadingScreen />
      <CursorGlow />

      <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 flex w-full flex-col"
        >
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <CodingPlatforms />
          <Services />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  )
}