import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-24 pb-20">
      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
        <motion.p variants={item} className="font-mono text-accent-gold text-sm mb-4 tracking-widest">
          Hi, my name is
        </motion.p>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-2">
          Abayomi Aremo.
        </motion.h1>

        <motion.div variants={item} className="text-3xl md:text-5xl font-bold text-text-secondary leading-tight mb-8 h-14 md:h-16">
          <Typewriter
            options={{
              strings: ['Full-Stack Developer.', 'Technical Lead.', 'Systems Architect.'],
              autoStart: true,
              loop: true,
              cursor: '|',
              delay: 55,
              deleteSpeed: 35,
            }}
          />
        </motion.div>

        <motion.p variants={item} className="text-text-secondary max-w-lg leading-relaxed mb-10 text-sm md:text-base">
          Software Engineer and Technical Lead specializing in scalable SaaS platforms,
          microservices architectures, and production-ready systems. Based in Abuja, Nigeria.
          Supporting{' '}
          <span className="text-text-primary font-medium">2000+ active users</span>{' '}
          across HR, fintech, e-commerce, and asset management.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-accent-gold text-accent-gold font-mono text-sm rounded-lg hover:bg-accent-gold hover:text-dark-bg transition-all duration-200"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-dark-card border border-dark-border2 text-text-primary font-mono text-sm rounded-lg hover:border-text-secondary transition-all duration-200"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="flex gap-5 mt-12">
          {[
            { href: 'https://github.com/bayomiaremo', icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/abayomiaremo', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:abayomiaremo0@gmail.com', icon: <FiMail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-text-secondary hover:text-accent-gold transition-colors"
              title={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <FiArrowDown className="text-text-secondary" size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
