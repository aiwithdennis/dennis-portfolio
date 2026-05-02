import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Automation and AI',
    skills: [
      'Autonomous Pipeline Design',
      'AI/LLM Integration (Claude API)',
      'Multi-API Orchestration',
      'AI-Assisted Development',
      'Cold Email Automation',
      'Email Deliverability Strategy',
    ],
  },
  {
    title: 'CRM and Sales Automation',
    skills: [
      'GoHighLevel (Advanced)',
      'Pipeline and Workflow Design',
      'Chatbot Intake Workflows',
      'SMS and Email Sequences',
      'Appointment Booking Systems',
      'Stripe Payment Integration',
    ],
  },
  {
    title: 'Marketing and Growth',
    skills: [
      'Cold Outreach Strategy',
      'Facebook Ads',
      'Landing Page Design',
      'Reputation Management',
      'Local SEO',
      'Lead Scoring and Qualification',
    ],
  },
]

const tools = [
  'Claude AI', 'GoHighLevel', 'Instantly', 'Apify',
  'MillionVerifier', 'Vercel',
  'Stripe', 'FastAPI',
  'Zapier', 'Make', 'Facebook Ads', 'Companies House API',
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-heading font-bold text-primary-light tracking-widest uppercase">
            What I Work With
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mt-3 mb-4">
            Skills and Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-white/[0.06] rounded-2xl p-6"
            >
              <h3 className="font-heading font-bold text-sm text-primary-light mb-4">
                {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/50" />
                    <span className="text-sm text-white/50">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-bold text-sm text-white/20 tracking-widest uppercase mb-4">
            Tools I Use
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 hover:border-primary/20 hover:text-primary-light transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}