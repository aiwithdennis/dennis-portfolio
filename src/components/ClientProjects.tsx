import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  subtitle: string
  description: string
  results: string[]
  techStack: string[]
  image?: string
  imageAlt?: string
}

const projects: Project[] = [
  {
    title: 'Lead Generation and Booking System',
    subtitle: 'End-to-end automated intake and scheduling',
    description:
      'Designed a complete lead capture and booking workflow generating 275+ leads and 138 instant bookings over 6 months on a £40/day ad budget. Multi-channel intake from calls, chatbots, landing pages, forms, and social platforms with automated follow-up sequences recovering additional appointments.',
    results: [
      '275+ leads generated on £40/day budget',
      '138 instant appointments booked',
      '49.82% lead-to-appointment conversion rate',
      '6-month sustained campaign performance',
    ],
    techStack: ['GoHighLevel', 'Facebook Ads', 'Chatbot Workflows', 'SMS Sequences', 'Pipeline Automation'],
    image: '/dashboard.png',
    imageAlt: 'GHL Dashboard showing 275 leads and 138 appointments',
  },
  {
    title: 'Google Review and Reputation Automation',
    subtitle: 'Automated review generation, social scheduling, and local SEO',
    description:
      'Built a review generation campaign that collected 80+ genuine 5-star Google reviews in under 2 weeks. Set up AI-powered auto-responses that deliver personalised replies to each review as soon as it comes in. Built an automated scheduling system that repurposes authentic Google reviews into social media posts across Facebook and Instagram. Then implemented an ongoing review collection system that has since grown the client to 100+ total Google reviews, secured the #2 position on local Google search, and now drives consistent inbound leads for the business.',
    results: [
      '80+ genuine 5-star reviews in under 2 weeks',
      '100+ total Google reviews and growing',
      '#2 Google ranking driving consistent inbound leads',
      'AI auto-responses personalised to each review',
      'Automated social media scheduling (Facebook and Instagram)',
      'Ongoing review collection system running on autopilot',
    ],
    techStack: ['GoHighLevel', 'Review Automation', 'AI Auto-Responses', 'Social Media Scheduling', 'Local SEO'],
    image: '/google-ranking.png',
    imageAlt: 'Google Maps showing LPD Driving School ranked #2',
  },
  {
    title: 'Automated Call Handling Workflow',
    subtitle: 'Conversational intake with real-time booking',
    description:
      'Developed automated call handling workflows that answer inbound calls, collect caller details through conversational intake logic, and trigger real-time booking or follow-up actions within the CRM.',
    results: [
      'Calls answered and handled automatically',
      'Real-time appointment booking from calls',
      'Caller details captured and routed to CRM',
      'Follow-up sequences triggered automatically',
    ],
    techStack: ['GoHighLevel', 'Call Workflows', 'Conversational AI', 'CRM Routing'],
  },
  {
    title: 'Payment-Gated Strategy Session Funnel',
    subtitle: 'Stripe integration with automated scheduling',
    description:
      'Integrated Stripe with calendar workflows to enforce prepayment before booking, with automated confirmations, multi-stage reminder sequences, and attendance tracking.',
    results: [
      'Prepayment enforced before booking',
      'Automated confirmation and reminders (24hr, 2hr, 10min)',
      'No-show tracking and follow-up',
      'Reduced no-shows significantly',
    ],
    techStack: ['GoHighLevel', 'Stripe', 'Calendar Automation', 'SMS Reminders'],
  },
  {
    title: 'Missed Enquiry Impact Calculator',
    subtitle: 'Diagnostic tool quantifying revenue loss',
    description:
      'Developed an interactive diagnostic tool that calculates how much revenue businesses lose from slow response times and missed enquiries, used to drive automation adoption.',
    results: [
      'Quantifies revenue lost per missed call',
      'Drives urgency for automation adoption',
      'Used as a sales conversion tool',
      'Custom calculations per business type',
    ],
    techStack: ['GoHighLevel', 'Custom Calculator', 'Lead Qualification'],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-surface border border-white/[0.06] rounded-2xl overflow-hidden card-hover"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div>
          <h3 className="font-heading font-bold text-base md:text-lg text-white">
            {project.title}
          </h3>
          <p className="text-xs text-white/30 mt-1">{project.subtitle}</p>
        </div>
        {expanded ? (
          <ChevronUp size={20} className="text-white/30 shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-white/30 shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-5">
          {/* Image */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-white/[0.06]">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed">{project.description}</p>

          {/* Results */}
          <div>
            <span className="text-[10px] font-heading font-bold text-white/20 tracking-widest uppercase block mb-2">
              Results
            </span>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="flex items-start gap-2 text-sm text-white/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-md px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function ClientProjects() {
  return (
    <section id="projects" className="section-pad py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-heading font-bold text-primary-light tracking-widest uppercase">
            Real Results
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mt-3 mb-4">
            Client Projects
          </h2>
          <p className="text-white/40 max-w-xl">
            Live systems I have built and delivered for real clients, with real measurable results.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}