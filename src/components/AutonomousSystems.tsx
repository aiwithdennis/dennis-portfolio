import { motion } from 'framer-motion'
import {
  Search, Filter, UserCheck, MailCheck, Brain, FileCode, Send, Handshake,
  Globe, ScanSearch, CheckSquare, Rocket, Camera, Mail,
  ArrowRight,
} from 'lucide-react'

const receptionAutoPipeline = [
  { icon: Search, label: 'Scrape', desc: 'Find jobs on Indeed' },
  { icon: Filter, label: 'Qualify', desc: 'Score leads 1-5' },
  { icon: UserCheck, label: 'Contact', desc: '7-method waterfall' },
  { icon: MailCheck, label: 'Verify', desc: 'MillionVerifier' },
  { icon: Brain, label: 'Enrich', desc: 'Claude pain extraction' },
  { icon: FileCode, label: 'Generate', desc: 'AI email sequences' },
  { icon: Send, label: 'Push', desc: 'Instantly campaigns' },
  { icon: Handshake, label: 'Close', desc: 'GHL CRM routing' },
]

const leadplugPipeline = [
  { icon: Globe, label: 'Find', desc: 'Google Maps scraping' },
  { icon: MailCheck, label: 'Verify', desc: 'Email verification' },
  { icon: ScanSearch, label: 'Research', desc: 'Claude site analysis' },
  { icon: CheckSquare, label: 'Score', desc: 'Lead qualification' },
  { icon: FileCode, label: 'Generate', desc: 'AI builds website' },
  { icon: Rocket, label: 'Deploy', desc: 'Live on Vercel' },
  { icon: Camera, label: 'Screenshot', desc: 'Before/after capture' },
  { icon: Mail, label: 'Outreach', desc: '3-email sequence' },
]

function PipelineFlow({ steps }: { steps: typeof receptionAutoPipeline }) {
  return (
    <div className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:flex items-start gap-0 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start"
          >
            <div className="flex flex-col items-center text-center w-24 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                <step.icon size={18} className="text-primary-light" />
              </div>
              <span className="text-xs font-heading font-bold text-white mb-0.5">{step.label}</span>
              <span className="text-[10px] text-white/30 leading-tight">{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center pt-4 px-1 shrink-0">
                <div className="w-4 h-[2px] pipeline-line rounded-full" />
                <ArrowRight size={10} className="text-primary/40 -ml-0.5" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="lg:hidden grid grid-cols-4 gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-1.5">
              <step.icon size={16} className="text-primary-light" />
            </div>
            <span className="text-[10px] font-heading font-bold text-white">{step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SystemCard({
  title,
  subtitle,
  description,
  pipeline,
  techStack,
  stats,
  index,
}: {
  title: string
  subtitle: string
  description: string
  pipeline: typeof receptionAutoPipeline
  techStack: string[]
  stats: { label: string; value: string }[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-surface border border-white/[0.06] rounded-2xl p-6 md:p-8 card-hover"
    >
      {/* Header */}
      <div className="mb-6">
        <span className="text-[10px] font-heading font-bold text-primary-light tracking-widest uppercase">
          {subtitle}
        </span>
        <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white mt-2 mb-3">
          {title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed max-w-2xl">{description}</p>
      </div>

      {/* Pipeline Visual */}
      <div className="bg-background/50 border border-white/[0.04] rounded-xl p-4 md:p-6 mb-6">
        <span className="text-[10px] font-heading font-semibold text-white/20 tracking-widest uppercase mb-4 block">
          Pipeline Flow
        </span>
        <PipelineFlow steps={pipeline} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background/50 rounded-lg p-3 text-center">
            <div className="font-heading font-extrabold text-lg text-primary-light">{stat.value}</div>
            <div className="text-[10px] text-white/30 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-md px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function AutonomousSystems() {
  return (
    <section id="systems" className="section-pad py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-heading font-bold text-primary-light tracking-widest uppercase">
            What I Build
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mt-3 mb-4">
            Autonomous Systems
          </h2>
          <p className="text-white/40 max-w-xl">
            Fully autonomous pipelines that run daily with zero human input.
            I only step in when a warm lead is ready to talk.
          </p>
        </motion.div>

        <div className="space-y-8">
          <SystemCard
            index={0}
            subtitle="Pipeline 1"
            title="ReceptionAuto: Autonomous B2B Lead Generation"
            description="Scrapes UK job boards for businesses hiring receptionists, finds decision-maker contacts through a 7-method waterfall, generates AI-written 4-email sequences, and delivers them via Instantly on autopilot. Positive replies route to GoHighLevel for manual closing."
            pipeline={receptionAutoPipeline}
            techStack={['Claude API', 'Apify', 'Indeed', 'MillionVerifier', 'Instantly', 'Companies House API', 'GoHighLevel', 'FastAPI']}
            stats={[
              { label: 'Pipeline Phases', value: '8' },
              { label: 'Contact Methods', value: '7' },
              { label: 'Industries', value: '13' },
              { label: 'Human Input', value: 'Zero' },
            ]}
          />

          <SystemCard
            index={1}
            subtitle="Pipeline 2"
            title="Leadplug: AI Website Generation and Outreach"
            description="Finds UK trade businesses with poor websites via Google Maps, generates personalised React/TypeScript preview websites using Claude AI, deploys them live to Vercel automatically, and sends targeted cold email sequences. Entire pipeline runs on a daily cron."
            pipeline={leadplugPipeline}
            techStack={['Claude API', 'Apify', 'Indeed', 'MillionVerifier', 'Instantly', 'Companies House API', 'GoHighLevel', 'FastAPI']}
            stats={[
              { label: 'Pipeline Phases', value: '8' },
              { label: 'Website Templates', value: '3' },
              { label: 'Layout Variants', value: '12' },
              { label: 'Human Input', value: 'Zero' },
            ]}
          />
        </div>
      </div>
    </section>
  )
}