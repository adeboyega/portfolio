import AnimatedSection from '../components/AnimatedSection'

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

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <AnimatedSection delay={0.1} className="md:col-span-3">
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

          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 space-y-5">
              <div>
                <p className="text-text-secondary text-xs font-mono mb-1.5 tracking-widest">LOCATION</p>
                <p className="text-text-primary text-sm">Abuja, Nigeria</p>
              </div>
              <div>
                <p className="text-text-secondary text-xs font-mono mb-1.5 tracking-widest">EDUCATION</p>
                <p className="text-text-primary text-sm">B.Sc Computer Science</p>
                <p className="text-text-secondary text-xs mt-0.5">Edo State University Uzairue · 2023</p>
                <p className="text-text-primary text-sm mt-2">M.Sc Information Management</p>
                <p className="text-text-secondary text-xs mt-0.5">ABU DLC · In View</p>
              </div>
              <div>
                <p className="text-text-secondary text-xs font-mono mb-2 tracking-widest">CERTIFICATIONS</p>
                <div className="flex flex-col gap-1.5">
                  {['ALX Software Engineering', 'ALX AICE', 'FreeCodeCamp Web Design'].map(cert => (
                    <span
                      key={cert}
                      className="text-xs px-2.5 py-1.5 bg-dark-bg border border-dark-border2 rounded-lg text-text-secondary"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-text-secondary text-xs font-mono mb-1.5 tracking-widest">EMAIL</p>
                <a
                  href="mailto:abayomiaremo0@gmail.com"
                  className="text-text-primary text-sm hover:text-accent-gold transition-colors"
                >
                  abayomiaremo0@gmail.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
