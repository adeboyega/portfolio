import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', bounce: 0 }}
      >
        <nav className={`flex items-center gap-2 px-5 py-2.5 rounded-full border border-dark-border2 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-black/80 shadow-lg shadow-black/40' : 'bg-dark-card/70'
        }`}>
          <a href="#home" className="font-mono text-sm text-accent-gold font-semibold mr-3">
            {'<AJ/>'}
          </a>

          <div className="hidden md:flex items-center gap-5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 ml-3 border-l border-dark-border2 pl-4">
            <motion.a
              href="https://github.com/adeboyega"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiGithub size={15} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abayomiaremo"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiLinkedin size={15} />
            </motion.a>
            <motion.a
              href="mailto:abayomiaremo0@gmail.com"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <FiMail size={15} />
            </motion.a>
          </div>

          <button
            className="md:hidden text-text-secondary ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-bg/97 backdrop-blur-md flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-2xl font-mono text-text-primary hover:text-accent-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-4">
              {[
                { href: 'https://github.com/adeboyega', icon: <FiGithub size={20} /> },
                { href: 'https://linkedin.com/in/abayomiaremo', icon: <FiLinkedin size={20} /> },
                { href: 'mailto:abayomiaremo0@gmail.com', icon: <FiMail size={20} /> },
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
