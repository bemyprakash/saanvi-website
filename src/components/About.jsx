import { motion } from 'framer-motion'

const AvatarPlaceholder = ({ initials, name, title, delay }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    {/* Avatar Circle */}
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg glow-effect">
      <span className="text-5xl md:text-6xl font-bold text-white">{initials}</span>
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-indigo-300 text-sm md:text-base">{title}</p>
  </motion.div>
)

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gradient-to-b from-navy-dark to-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Saanvi was founded on the belief that great technology should be accessible, innovative, and transformative. We combine cutting-edge solutions with strategic thinking to help businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <AvatarPlaceholder
            initials="PK"
            name="Prakash Kumbhakar"
            title="Co-Founder & Tech Lead"
            delay={0}
          />
          <AvatarPlaceholder
            initials="MK"
            name="Mrunal Kulkarni"
            title="Co-Founder & Design Lead"
            delay={0.2}
          />
        </div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-navy-light to-navy-dark rounded-2xl p-8 md:p-12 border border-indigo-500/20 glow-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To empower businesses through intelligent, user-centric technology solutions that drive growth, innovation, and success in the digital economy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
