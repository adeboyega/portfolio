import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const socials = [
  { href: 'https://github.com/adeboyega', icon: <FiGithub size={20} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/abayomiaremo', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
  { href: 'mailto:abayomiaremo0@gmail.com', icon: <FiMail size={20} />, label: 'Email' },
  { href: 'tel:+2349071637078', icon: <FiPhone size={20} />, label: 'Phone' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-xl mx-auto text-center">
        <AnimatedSection>
          <span className="font-mono text-accent-gold text-sm block mb-4">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get In Touch</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary leading-relaxed mb-10 text-sm md:text-base">
            I'm open to new opportunities and collaborations. Whether you have a project in mind,
            a question, or just want to connect — feel free to reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href="mailto:abayomiaremo0@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 border border-accent-gold text-accent-gold font-mono text-sm rounded-lg hover:bg-accent-gold hover:text-dark-bg transition-all duration-200 mb-14"
          >
            Say Hello →
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center gap-8 pt-8 border-t border-dark-border2">
            {socials.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-text-secondary hover:text-accent-gold transition-colors"
                title={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="font-mono text-text-secondary/30 text-xs mt-10">
            Designed & Built by Abayomi Aremo · 2026
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
