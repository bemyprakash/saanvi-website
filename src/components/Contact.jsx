import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to backend. For now, just show success message.
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gradient-to-b from-navy-light to-navy-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Let's build your next big idea together. Reach out and let's start the conversation.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-gradient-to-br from-navy-dark to-navy-light rounded-2xl p-8 md:p-12 border border-indigo-500/20 glow-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {submitted && (
            <motion.div
              className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Thank you! We've received your message and will get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-3 rounded-lg bg-navy-light border border-indigo-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-3 rounded-lg bg-navy-light border border-indigo-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-6 py-3 rounded-lg bg-navy-light border border-indigo-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 glow-effect"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-indigo-500/20">
            <p className="text-center text-gray-400 mb-6">Or connect with us on social media</p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-gradient-to-br from-navy-light to-navy-dark border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500 transition-all glow-effect"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-gradient-to-br from-navy-light to-navy-dark border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500 transition-all glow-effect"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@saanvi.tech"
                className="p-4 rounded-lg bg-gradient-to-br from-navy-light to-navy-dark border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500 transition-all glow-effect"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
