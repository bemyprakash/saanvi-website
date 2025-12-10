import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-8 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Saanvi
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
          variants={itemVariants}
        >
          Building Tomorrow's Tech, Today
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          End-to-end tech solutions for companies. Modern websites, mobile apps, and AI systems crafted with precision and innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 glow-effect"
          >
            Explore Our Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
