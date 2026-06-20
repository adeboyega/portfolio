import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCpu } from 'react-icons/fi'
import ParallaxItem from '../components/ParallaxItem'

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
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-24 pb-20 bg-[#050505] overflow-hidden">
      {/* Background Animated Parallax Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.p variants={item} className="font-mono text-accent-gold text-sm mb-4 tracking-widest flex items-center gap-2">
              <FiCpu size={14} className="animate-pulse" />
              Hi, my name is
            </motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-2 tracking-tight">
              Abayomi Aremo.
            </motion.h1>

            <motion.div variants={item} className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-secondary leading-tight mb-8 h-14 md:h-16">
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

            <motion.p variants={item} className="text-text-secondary max-w-lg leading-relaxed mb-10 text-xs sm:text-sm md:text-base">
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
                { href: 'https://github.com/adeboyega', icon: <FiGithub size={20} />, label: 'GitHub' },
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

          {/* Right Column: Floating 3D Parallax Graphic & GIF */}
          <div className="lg:col-span-5 hidden lg:block">
            <ParallaxItem speed={-0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                whileHover={{ rotateY: -5, rotateX: 5, z: 50 }}
                style={{ perspective: 1000 }}
                className="w-full relative cursor-default"
              >
                {/* Behind Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 to-yellow-500/10 rounded-2xl blur-2xl opacity-50 pointer-events-none" />

                {/* Mock Code Editor / IDE Window */}
                <div className="relative bg-dark-card border border-dark-border2 rounded-2xl overflow-hidden shadow-2xl">
                  {/* IDE header */}
                  <div className="bg-[#0A0A0A] border-b border-dark-border px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="font-mono text-[10px] text-text-secondary select-none">
                      ~/abayomi-aremo/main.py
                    </span>
                    <div className="w-10" />
                  </div>

                  {/* Looping Code / Developer GIF */}
                  <div className="aspect-[4/3] bg-black/60 overflow-hidden flex items-center justify-center relative">
                    <img
                      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2s4bzlzMWhhdDVuYXN4NHgwemVzMXdpNHVlNDZnZHg1OWd0ZWwwdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZVik7pBtu9dNS/giphy.gif"
                      alt="Developer Coding Loop"
                      className="w-full h-full object-cover mix-blend-screen opacity-90 select-none pointer-events-none"
                    />
                    
                    {/* Glowing Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* IDE Footer Status Bar */}
                  <div className="bg-[#0B0B0B] border-t border-dark-border px-4 py-2 flex items-center justify-between text-[9px] font-mono text-text-secondary select-none">
                    <div className="flex items-center gap-3">
                      <span className="text-accent-gold">● Live</span>
                      <span>UTF-8</span>
                    </div>
                    <div>Python 3.10</div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 bg-dark-bg/90 border border-dark-border2 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-2.5 select-none"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <div className="font-mono text-[10px]">
                    <p className="text-text-primary font-bold">Systems Architect</p>
                    <p className="text-text-secondary">Uptime 99.9%</p>
                  </div>
                </motion.div>
              </motion.div>
            </ParallaxItem>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
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
