import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dennisminds@yahoo.com',
    href: 'mailto:dennisminds@yahoo.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 7495 992683',
    href: 'tel:+447495992683',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cheltenham, United Kingdom',
    href: '#',
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/leadplug',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aiwithdennis',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface border border-white/[0.06] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-heading font-bold text-primary-light tracking-widest uppercase">
                Get In Touch
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl mt-3 mb-4">
                Let's Build Something{' '}
                <span className="text-gradient">Together</span>
              </h2>
              <p className="text-white/40 mb-8 leading-relaxed">
                Whether you need an autonomous outreach system, CRM automation,
                or AI integration, I am ready to help. Let's talk about what you
                need.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon size={18} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/20 font-heading font-semibold tracking-widest uppercase">
                        {link.label}
                      </div>
                      <div className="text-sm text-white/60 group-hover:text-white transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-bold text-sm text-white/20 tracking-widest uppercase mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-background/50 border border-white/[0.06] rounded-xl px-5 py-4 group hover:border-primary/20 transition-all"
                    >
                      <span className="text-sm text-white/50 font-medium group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-white/20 group-hover:text-primary-light transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-5">
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  Want to see my AI receptionist in action? Click the chat widget
                  in the bottom-right corner. It is the same system I build for
                  clients.
                </p>
                <div className="flex items-center gap-2 text-xs text-primary-light font-heading font-semibold">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Live Demo Running Now
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}