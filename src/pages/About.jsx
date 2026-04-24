import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import photo from '../abayomi_opt.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent-gold text-sm">01.</span>
            <h2 className="text-2xl font-bold text-text-primary">About Me</h2>
            <div className="flex-1 h-px bg-dark-border2" />
          </div>
        </AnimatedSection>

        {/* Photo + bio row */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', bounce: 0 }}
              className="shrink-0 mx-auto md:mx-0"
            >
              <div className="relative w-44 md:w-56">
                <div className="absolute inset-0 rounded-2xl bg-accent-gold/20 blur-xl" />
                <img
                  src={photo}
                  alt="Abayomi Aremo"
                  className="relative w-full h-auto rounded-2xl border border-dark-border2 shadow-2xl object-contain"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-accent-gold/30" />
              </div>
              <p className="text-center font-mono text-xs text-text-secondary mt-3">Abayomi Aremo</p>
              <p className="text-center font-mono text-xs text-accent-gold">Software Engineer · Abuja</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex-1">
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
              <p>
                I'm a Software Engineer and Technical Lead based in{' '}
                <span className="text-text-primary">Abuja, Nigeria</span>, with experience
                designing and scaling SaaS platforms across HR, fintech, e-commerce, and
                asset management domains.
              </p>
              <p>
                I've built and deployed systems supporting{' '}
                <span className="text-text-primary font-medium">2000+ active users</span>,
                improving operational efficiency, reducing fraud, and enabling business
                automation.
              </p>
              <p>
                My background spans full-stack development, system architecture, networking,
                and cloud infrastructure. I have a track record of leading engineering teams
                and delivering production-ready solutions in fast-paced environments.
              </p>
              <p>
                Currently pursuing a{' '}
                <span className="text-text-primary font-medium">
                  Master of Information Management
                </span>{' '}
                at ABU DLC while serving as Head of IT & Lead Engineer at Casalavoro Limited.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Info cards row */}
        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <p className="text-text-secondary text-xs font-mono mb-2 tracking-widest">EDUCATION</p>
              <p className="text-text-primary text-sm font-medium">B.Sc Computer Science</p>
              <p className="text-text-secondary text-xs mt-0.5">Edo State University · 2023</p>
              <p className="text-text-primary text-sm font-medium mt-3">M.Sc Info Management</p>
              <p className="text-text-secondary text-xs mt-0.5">ABU DLC · In View</p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <p className="text-text-secondary text-xs font-mono mb-2 tracking-widest">CERTIFICATIONS</p>
              <div className="flex flex-col gap-1.5">
                {['ALX Software Engineering', 'ALX AICE', 'FreeCodeCamp Web Design'].map(cert => (
                  <span key={cert} className="text-xs px-2.5 py-1.5 bg-dark-bg border border-dark-border2 rounded-lg text-text-secondary">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <p className="text-text-secondary text-xs font-mono mb-2 tracking-widest">CONTACT</p>
              <p className="text-text-secondary text-xs mb-1">Email</p>
              <a href="mailto:abayomiaremo0@gmail.com" className="text-text-primary text-xs hover:text-accent-gold transition-colors break-all">
                abayomiaremo0@gmail.com
              </a>
              <p className="text-text-secondary text-xs mt-3 mb-1">Phone</p>
              <a href="tel:+2349071637078" className="text-text-primary text-xs hover:text-accent-gold transition-colors">
                +234 907 163 7078
              </a>
              <p className="text-text-secondary text-xs mt-3 mb-1">Location</p>
              <p className="text-text-primary text-xs">Abuja, Nigeria</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
