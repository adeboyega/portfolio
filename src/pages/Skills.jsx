import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'React.js', 'Next.js', 'React Native', 'Node.js', 'Express.js'],
  },
  {
    category: 'Architecture & Systems',
    skills: ['Microservices', 'REST APIs', 'System Design', 'SaaS Platforms', 'Distributed Systems'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'Google Cloud', 'Docker', 'CI/CD', 'Cloud Services'],
  },
  {
    category: 'Data & State Management',
    skills: ['SQL', 'NoSQL', 'MongoDB', 'Database Design', 'Redux Toolkit'],
  },
  {
    category: 'Practices',
    skills: ['Agile Development', 'Unit Testing', 'Performance Optimization', 'Code Review', 'Team Leadership'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent-gold text-sm">02.</span>
            <h2 className="text-2xl font-bold text-text-primary">Skills</h2>
            <div className="flex-1 h-px bg-dark-border2" />
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>
              <div>
                <p className="font-mono text-xs text-text-secondary mb-3 tracking-widest uppercase">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: '#555' }}
                      className="px-3 py-1.5 text-sm bg-dark-card border border-dark-border2 text-text-primary rounded-lg cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
