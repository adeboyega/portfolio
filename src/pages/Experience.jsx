import AnimatedSection from '../components/AnimatedSection'

const experiences = [
  {
    company: 'Casalavoro Limited',
    role: 'Head of IT / Lead Software Engineer',
    period: 'Dec 2024 – Apr 2026',
    type: 'Hybrid',
    highlights: [
      'Led development of comprehensive HR Management System for 200+ employees',
      'Built GPS-enabled attendance system reducing time fraud by 35%',
      'Developed asset management platform with real-time dashboards and audit tracking',
      'Implemented Paystack payment system handling 120+ transactions monthly',
      'Designed scalable microservices architecture supporting 200+ concurrent users',
      'Built company-wide inventory, maintenance ticketing, and workflow management system',
    ],
  },
  {
    company: 'Geebay E-commerce',
    role: 'Technical Team Lead',
    period: '2024 – Present',
    type: 'Remote / Hybrid',
    highlights: [
      'Led development and successful launch of the Geebay e-commerce platform (web and mobile)',
      'Managed platform architecture, scalability, and system performance',
      'Oversaw payment integrations and third-party service connections',
      'Implemented system upgrades, security improvements, and feature enhancements',
    ],
  },
  {
    company: 'Belsoft Systems',
    role: 'Lead Frontend Engineer',
    period: '2023 – 2024',
    type: 'Remote',
    highlights: [
      'Built cross-platform crypto payments application with React Native and TypeScript',
      'Developed and deployed company website using Next.js and TailwindCSS',
      'Integrated authentication systems and optimized frontend performance',
    ],
  },
  {
    company: 'Nigerian Air Force Headquarters',
    role: 'Software Developer / IT Administrator',
    period: '2023 – 2024',
    type: 'Abuja',
    highlights: [
      'Developed Visitor Management System to improve security processes',
      'Built server monitoring and access control tools',
      'Supported network administration and IT infrastructure',
    ],
  },
  {
    company: 'ALX Software Engineering Program',
    role: 'Trainee Engineer',
    period: '2023',
    type: 'Program',
    highlights: [
      'Built full-stack applications using React, Redux, and Express.js',
    ],
  },
  {
    company: 'Lasot Travel Solutions',
    role: 'Web Developer',
    period: '2022 – 2023',
    type: 'Remote',
    highlights: [
      'Developed a cross-platform mobile booking and payment application',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent-gold text-sm">03.</span>
            <h2 className="text-2xl font-bold text-text-primary">Experience</h2>
            <div className="flex-1 h-px bg-dark-border2" />
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-dark-border2 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.08}>
                <div className="md:pl-8 relative">
                  <div className="absolute left-0 top-5 w-2 h-2 bg-accent-gold rounded-full hidden md:block" style={{ transform: 'translateX(-3.5px)' }} />

                  <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-dark-border2 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-2">
                      <h3 className="text-text-primary font-semibold text-sm">{exp.role}</h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-xs text-text-secondary">{exp.period}</span>
                        <span className="text-xs px-2 py-0.5 border border-dark-border2 rounded text-text-secondary">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-accent-gold text-xs font-mono mb-4">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map(h => (
                        <li key={h} className="text-text-secondary text-sm flex gap-2.5">
                          <span className="text-accent-gold mt-0.5 shrink-0 text-xs">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
