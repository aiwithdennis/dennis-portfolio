import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, CalendarCheck, Star, MapPin } from 'lucide-react'

function useCountUp(target: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

const stats = [
  { icon: Users, value: 275, suffix: '+', label: 'Leads Generated', color: 'text-violet-400' },
  { icon: CalendarCheck, value: 138, suffix: '', label: 'Appointments Booked', color: 'text-emerald-400' },
  { icon: Star, value: 100, suffix: '+', label: 'Google Reviews Generated', color: 'text-amber-400' },
  { icon: MapPin, value: 2, suffix: '', prefix: '#', label: 'Google Ranking Achieved', color: 'text-blue-400' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-pad py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface border border-white/[0.06] rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, i) => {
              const count = useCountUp(stat.value, 2000, isInView)
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon size={24} className={`${stat.color} mx-auto mb-3 opacity-70`} />
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-1">
                    {stat.prefix || ''}{count}{stat.suffix}
                  </div>
                  <div className="text-xs text-white/40 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}