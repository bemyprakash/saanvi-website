import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="p-8 rounded-xl bg-gradient-to-br from-navy-light to-navy-dark border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 glow-effect group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
)

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites built with the latest technologies. From concept to deployment, we craft digital experiences that engage and convert.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver performance and user satisfaction. iOS, Android, and everything in between.',
    },
    {
      icon: Zap,
      title: 'AI Solutions',
      description: 'Intelligent systems powered by machine learning and AI. From chatbots to predictive analytics, we integrate smart technology into your business.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-gradient-to-b from-navy-light to-navy-dark">
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
