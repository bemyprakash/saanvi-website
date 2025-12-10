import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-indigo-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Saanvi</h3>
          <p className="text-gray-400 mb-6">Building Tomorrow's Tech, Today</p>

          {/* Copyright and Credits */}
          <div className="pt-6 border-t border-indigo-500/20">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              © 2025 Saanvi | Crafted with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Prakash & Mrunal
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Services
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
