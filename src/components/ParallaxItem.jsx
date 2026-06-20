/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxItem({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null)
  
  // Track scroll position of the element inside the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Interpolate y offset based on scroll progress
  // Positive speed moves it faster/upwards, negative moves it slower/downwards
  const y = useTransform(scrollYProgress, [0, 1], [-80 * speed, 80 * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
