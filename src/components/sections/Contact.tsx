import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Check,
  AlertCircle,
} from 'lucide-react'
import { personalData } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormFields>>({})

  const validate = () => {
    const newErrors: Partial<FormFields> = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setFormState('loading')

    try {
      const response = await fetch(
        'https://formspree.io/f/YOUR_FORM_ID',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      if (!response.ok) throw new Error('Submission failed')

      setFormState('success')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => {
        setFormState('idle')
      }, 4000)
    } catch {
      setFormState('error')
      setTimeout(() => {
        setFormState('idle')
      }, 4000)
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest font-semibold mb-3 text-blue-500 dark:text-blue-400">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900 dark:text-zinc-50">
            Get In Touch
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <AnimatedSection
            direction="left"
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <p className="text-base md:text-lg leading-relaxed font-medium text-zinc-600 dark:text-zinc-400">
                I'm always open to internship opportunities, full-time roles, freelance work, or exciting collaborations. If you'd like to discuss a project or simply connect, feel free to reach out. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: personalData.email,
                  href: `mailto:${personalData.email}`,
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: personalData.phone,
                  href: `tel:${personalData.phone}`,
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: personalData.location,
                  href: '#',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl group transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 group-hover:bg-blue-500/10 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300">
                    <item.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase tracking-wide font-semibold text-zinc-400 dark:text-zinc-500">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-0.5 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-2xl w-max shadow-sm">
              {[
                {
                  href: personalData.social.github,
                  icon: Github,
                  label: 'GitHub',
                },
                {
                  href: personalData.social.linkedin,
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: `mailto:${personalData.email}`,
                  icon: Mail,
                  label: 'Email',
                },
              ].map(({ href, icon: Icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.1}
            className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ayush Kumar"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className={`w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/10'
                        : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-zinc-950'
                    } text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="ayushkumardandapat200@gmail.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className={`w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/10'
                        : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-zinc-950'
                    } text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Internship Opportunity"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      subject: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-zinc-950 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Hi Ayush, I'd like to discuss an internship opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className={`w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none resize-none transition-all duration-300 bg-zinc-50 dark:bg-zinc-900 border ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/10'
                      : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-zinc-950'
                  } text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-semibold flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={formState === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full justify-center py-4 rounded-xl text-base font-semibold tracking-wide bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                {formState === 'loading' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                )}
                {formState === 'success' && <Check size={18} />}
                {formState === 'idle' && <Send size={16} />}
                {formState === 'error' && <AlertCircle size={18} />}

                {formState === 'idle' && 'Send Message'}
                {formState === 'loading' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
                {formState === 'error' && 'Try Again'}
              </motion.button>

              {formState === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center font-semibold text-emerald-500 mt-4"
                >
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </motion.p>
              )}

              {formState === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center font-semibold text-red-500 mt-4"
                >
                  Something went wrong. Please try again later or contact me directly via email.
                </motion.p>
              )}
            </form>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}