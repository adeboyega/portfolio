import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ParallaxItem from '../components/ParallaxItem'
import { FiExternalLink, FiGlobe, FiCode, FiTerminal } from 'react-icons/fi'

const clientWebsites = [
  {
    name: 'CreatrHub',
    subtitle: 'Creator Economy & UGC',
    description: 'A premium UGC platform connecting global brands with vetted creators. Features high-performance video streaming integration, creator discovery engines, and real-time campaign management.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Vimeo API', 'AWS'],
    link: 'https://creatrhub.eu/',
    accentColor: '#E25822', // Burnt orange
  },
  {
    name: 'Eloria Consult',
    subtitle: 'Hospitality & Facility Advisory',
    description: 'Bespoke web presence for a luxury consulting agency specializing in hospitality interior design and procurement. Highly sophisticated typography, scroll reveals, and elegant interfaces.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.eloriaconsult.com/',
    accentColor: '#C5B081', // Luxury gold
  },
  {
    name: 'SAE Apartments',
    subtitle: 'Luxury Shortlets & Serviced Stays',
    description: 'Modern reservation platform managing premium short-stay properties in Abuja & Lagos. Features interactive apartment gallery carousels, automated quotes, and direct WhatsApp scheduling.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp Business API'],
    link: 'https://saeapartments.com/',
    accentColor: '#A9AF99', // Sage green
  },
  {
    name: 'Terranova Residence',
    subtitle: 'Boutique Hotel & Luxury Suites',
    description: 'Dark-themed premium web application showcasing signature lodging suites in Abuja. Includes real-time availability checking, booking forms, and high-end interactive layouts.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API CRM'],
    link: 'https://www.terranovaresidence.com/',
    accentColor: '#C5A059', // Rich gold
  },
]

const featured = [
  {
    name: 'HR Management System',
    subtitle: 'Casalavoro',
    description: 'Comprehensive HR and operations platform with GPS attendance tracking, payroll, and staff management for 200+ employees. Reduced time fraud by 35%.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Paystack', 'GPS'],
    link: 'https://www.casalavorocomprehensivehr.com/',
  },
  {
    name: 'SBITS – Management Information System',
    subtitle: 'Strong Bridge IT Solutions',
    description: 'Full-stack enterprise platform with integrated HR, inventory, maintenance, project management, and CRM functionalities in a single system.',
    tags: ['Next.js', 'TypeScript', 'Microservices', 'MongoDB'],
    link: 'https://mis.strongbridgeitsolutions.com/',
  },
  {
    name: 'Investment & Asset Management Platform',
    subtitle: 'Casalavoro',
    description: 'Financial platform enabling clients to monitor their investment portfolios in real time while the company manages and grows their assets with full audit trails and reporting.',
    tags: ['React', 'Node.js', 'MongoDB', 'Finance', 'Dashboard'],
    link: 'https://casalavoroassetmanagement.com/',
  },
  {
    name: 'Geebay E-commerce Platform',
    subtitle: 'Scalable Marketplace',
    description: 'Scalable e-commerce system (web and mobile) with full payment integration, third-party services, and real-time inventory management.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://geebay.com',
  },
]

const others = [
  {
    name: 'Prixair Multi-Business Platforms',
    subtitle: 'Shared Architecture',
    description: 'Multiple e-commerce business platforms built on a shared scalable architecture.',
    tags: ['React', 'Node.js', 'REST API'],
    link: 'https://www.prixair.net/',
  },
  {
    name: 'PMS – Amoj Hotel',
    subtitle: 'Strong Bridge IT Solutions',
    description: 'Hotel property management system handling bookings, room allocation, billing, and comprehensive reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://pms.strongbridgeitsolutions.com/',
  },
  {
    name: 'CIM – Inventory & Maintenance',
    subtitle: 'Casalavoro',
    description: 'Centralized system for company-wide inventory, maintenance tickets, workflows, and reporting.',
    tags: ['React', 'Express', 'MongoDB'],
    link: 'https://cim.casalavoro.net/',
  },
  {
    name: 'CMS – Cenare Restaurant',
    subtitle: 'Content Management',
    description: 'Content management application for restaurant kitchen operations and menu management.',
    tags: ['React', 'Node.js', 'CMS'],
    link: null,
  },
  {
    name: 'QR Code Generator',
    subtitle: 'Full-Stack Tool',
    description: 'Full-stack application with real-time QR code editing and generation for general purpose use.',
    tags: ['React', 'Node.js', 'Real-time'],
    link: null,
  },
]

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-32 bg-[#050505] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Section Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent-gold text-sm">04.</span>
            <h2 className="text-3xl font-bold text-text-primary">Featured Work</h2>
            <div className="flex-1 h-px bg-dark-border2" />
          </div>
        </AnimatedSection>

        {/* SECTION 1: LIVE CLIENT WEBSITES (Parallax layout) */}
        <div className="mb-20">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-8">
              <FiGlobe className="text-accent-gold" size={16} />
              <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Live Web Deployments & Client Sites
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 items-start">
            {clientWebsites.map((project, i) => {
              const isHovered = hoveredProject === project.name
              // Alternate parallax speed for overlapping floating effect
              const speedValue = i % 2 === 0 ? 0.15 : 0.35

              return (
                <ParallaxItem key={project.name} speed={speedValue}>
                  <AnimatedSection delay={i * 0.15}>
                    <motion.div
                      onMouseEnter={() => setHoveredProject(project.name)}
                      onMouseLeave={() => setHoveredProject(null)}
                      style={{
                        borderColor: isHovered ? project.accentColor : '#1A1A1A',
                        boxShadow: isHovered ? `0 15px 35px -10px ${project.accentColor}25` : 'none',
                      }}
                      className="bg-dark-card border rounded-xl overflow-hidden transition-all duration-300 group"
                    >
                      {/* Stylized Mock Browser Window Frame */}
                      <div className="bg-[#0B0B0B] border-b border-dark-border px-4 py-3 flex items-center justify-between">
                        {/* OS-style dots */}
                        <div className="flex gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        {/* Mock Address bar */}
                        <div className="flex-1 max-w-[200px] mx-auto bg-dark-bg/60 border border-dark-border rounded px-2.5 py-0.5 text-center truncate">
                          <span className="font-mono text-[10px] text-text-secondary select-none">
                            {project.link.replace('https://', '').replace('www.', '')}
                          </span>
                        </div>
                        {/* Empty spacer for alignment */}
                        <div className="w-10 shrink-0" />
                      </div>

                      {/* Card Content & Glow Backdrop */}
                      <div className="p-6 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
                        {/* Ambient glow matching client site branding */}
                        <div
                          style={{
                            background: `radial-gradient(circle, ${project.accentColor}12 0%, transparent 75%)`,
                          }}
                          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                        />

                        {/* Title, Subtitle, Info */}
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-mono text-xs font-semibold mb-1" style={{ color: project.accentColor }}>
                                {project.subtitle}
                              </p>
                              <h4 className="text-xl font-bold text-text-primary tracking-tight">
                                {project.name}
                              </h4>
                            </div>
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.95 }}
                              style={{ color: isHovered ? project.accentColor : '#888888' }}
                              className="p-1.5 bg-dark-bg/80 border border-dark-border2 rounded-lg transition-colors duration-200"
                              title="Visit live site"
                            >
                              <FiExternalLink size={15} />
                            </motion.a>
                          </div>

                          <p className="text-text-secondary text-xs leading-relaxed mb-6 mt-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom Metadata & CTA */}
                        <div className="relative z-10 flex flex-wrap gap-2 items-center justify-between border-t border-dark-border2/50 pt-4 mt-auto">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 border border-dark-border2 text-text-secondary bg-[#0E0E0E] rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: project.accentColor }}
                            className="font-mono text-xs font-semibold hover:underline flex items-center gap-1 group/link"
                          >
                            Live Site 
                            <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                </ParallaxItem>
              )
            })}
          </div>
        </div>

        {/* SECTION 2: ENTERPRISE & FULL-STACK SYSTEMS */}
        <div className="mb-20 mt-12">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-8">
              <FiTerminal className="text-accent-gold" size={16} />
              <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Enterprise Platforms & Full-Stack Systems
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, borderColor: '#3A3A3A' }}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 h-full transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-mono text-xs text-accent-gold mb-1">{project.subtitle}</p>
                        <h3 className="text-text-primary font-semibold text-sm leading-snug">{project.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 ml-2 shrink-0">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-text-secondary hover:text-accent-gold transition-colors"
                            title="View Live"
                          >
                            <FiExternalLink size={14} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <p className="text-text-secondary text-xs leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 items-center justify-between border-t border-dark-border2/30 pt-3 mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 border border-dark-border2 text-text-secondary rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent-gold hover:underline mt-1"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* SECTION 3: OTHER NOTEWORTHY PROJECTS */}
        <div>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-2 mb-6">
              <FiCode className="text-accent-gold" size={16} />
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Other Noteworthy Projects
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((project, i) => (
              <AnimatedSection key={project.name} delay={0.25 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, borderColor: '#3A3A3A' }}
                  className="bg-dark-card border border-dark-border rounded-xl p-5 h-full transition-colors cursor-default flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-mono text-xs text-accent-gold">{project.subtitle}</p>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-gold transition-colors">
                          <FiExternalLink size={13} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-text-primary font-medium text-sm mb-2">{project.name}</h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-dark-border2/20">
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

      </div>
    </section>
  )
}
