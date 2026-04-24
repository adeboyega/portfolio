import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const featured = [
  {
    name: 'HR Management System',
    subtitle: 'Casalavoro',
    description: 'Full HR and operations platform with GPS attendance tracking, payroll, and staff management for 200+ employees. Reduced time fraud by 35%.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Paystack', 'GPS'],
  },
  {
    name: 'SBITS – Management Information System',
    subtitle: 'Enterprise Platform',
    description: 'Full-stack application with integrated HR, inventory, maintenance, project management, and CRM functionalities in a single system.',
    tags: ['Next.js', 'TypeScript', 'Microservices', 'MongoDB'],
  },
  {
    name: 'Geebay E-commerce Platform',
    subtitle: 'Scalable Marketplace',
    description: 'Scalable e-commerce system (web and mobile) with full payment integration, third-party services, and real-time inventory management.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
  },
]

const others = [
  {
    name: 'Prixair Multi-Business Platforms',
    subtitle: 'Shared Architecture',
    description: 'Multiple e-commerce business platforms built on a shared scalable architecture.',
    tags: ['React', 'Node.js', 'REST API'],
  },
  {
    name: 'Asset Management System',
    subtitle: 'Enterprise Tools',
    description: 'Platform for tracking assets, documents, and financial records with real-time dashboards and audit trails.',
    tags: ['React', 'Node.js', 'MongoDB', 'Dashboard'],
  },
  {
    name: 'PMS – Amoj Hotel',
    subtitle: 'Property Management',
    description: 'Hotel management system handling bookings, room allocation, billing, and comprehensive reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'CIM – Inventory & Maintenance',
    subtitle: 'Operations Platform',
    description: 'Centralized system for company-wide inventory, maintenance tickets, workflows, and reporting.',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    name: 'CMS – Cenare Restaurant',
    subtitle: 'Content Management',
    description: 'Content management application for restaurant kitchen operations and menu management.',
    tags: ['React', 'Node.js', 'CMS'],
  },
  {
    name: 'QR Code Generator',
    subtitle: 'Full-Stack Tool',
    description: 'Full-stack application with real-time QR code editing and generation for general purpose use.',
    tags: ['React', 'Node.js', 'Real-time'],
  },
]

export default function Work() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent-gold text-sm">04.</span>
            <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
            <div className="flex-1 h-px bg-dark-border2" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {featured.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5, borderColor: '#3A3A3A' }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 h-full transition-colors cursor-default"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-mono text-xs text-accent-gold mb-1">{project.subtitle}</p>
                    <h3 className="text-text-primary font-semibold text-sm leading-snug">{project.name}</h3>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold rounded shrink-0 ml-2">
                    Featured
                  </span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 border border-dark-border2 text-text-secondary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="font-mono text-xs text-text-secondary mb-5 tracking-widest uppercase">
            Other Noteworthy Projects
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {others.map((project, i) => (
            <AnimatedSection key={project.name} delay={0.35 + i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: '#3A3A3A' }}
                className="bg-dark-card border border-dark-border rounded-xl p-5 h-full transition-colors cursor-default"
              >
                <p className="font-mono text-xs text-accent-gold mb-1">{project.subtitle}</p>
                <h3 className="text-text-primary font-medium text-sm mb-2">{project.name}</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-1.5 py-0.5 border border-dark-border2 text-text-secondary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
