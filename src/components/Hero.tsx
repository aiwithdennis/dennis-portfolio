import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const HEADSHOT = 'https://assets.cdn.filesafe.space/HjDTB0LDJxrDXJCMDeYD/media/69d8d2afd7871cddf7030e05.png'

export default function Hero() {
  return (
    <section className="relative flex items-center pt-16 section-pad overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10 py-12 md:py-16">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-heading font-semibold text-primary-light tracking-wider uppercase">
              AI Automation Engineer
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-6xl leading-[1.1] mb-5">
            I Build Systems That{' '}
            <span className="text-gradient">Work While I Sleep</span>
          </h1>

          <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-7 max-w-lg">
            I design and build fully autonomous pipelines that find leads, generate
            personalised content, deploy websites, and send targeted outreach, all
            without human input.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#systems"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-heading font-bold px-6 py-3.5 sm:py-3 rounded-lg transition-all glow-purple-sm hover:glow-purple min-h-[48px]"
            >
              View My Systems <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-heading font-semibold px-6 py-3.5 sm:py-3 rounded-lg transition-all min-h-[48px]"
            >
              Get In Touch
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 text-xs text-white/30">
            <span>Claude AI</span>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
            <span>MillionVerifier</span>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
            <span>Instantly</span>
            <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
            <span>Apify</span>
          </div>
        </motion.div>

        {/* Right Column - Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Glow behind headshot */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />

            {/* Ring */}
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-primary/30 p-2">
              <img
                src={HEADSHOT}
                alt="Dennis Akinsete"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Floating badges — hidden on small phones to avoid overflow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden sm:block absolute -left-4 top-1/4 bg-surface border border-white/[0.06] rounded-lg px-3 py-2 text-xs"
            >
              <span className="text-primary-light font-heading font-bold">2</span>
              <span className="text-white/50 ml-1">Autonomous Pipelines</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="hidden sm:block absolute -right-4 top-2/3 bg-surface border border-white/[0.06] rounded-lg px-3 py-2 text-xs"
            >
              <span className="text-primary-light font-heading font-bold">275+</span>
              <span className="text-white/50 ml-1">Leads Generated</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={20} className="text-white/20" />
      </motion.div>
    </section>
  )
}
