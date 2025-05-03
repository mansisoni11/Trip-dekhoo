// components/AnimatedWrapper.js
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const animationVariants = {
  fadeUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  zoomIn: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  flip: { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 } },
}

const AnimatedWrapper = ({ children, type = 'fadeUp', delay = 0.1 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const variant = animationVariants[type] || animationVariants.fadeUp

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={inView ? variant.animate : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      style={{ perspective: type === 'flip' ? 1000 : 'none' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
