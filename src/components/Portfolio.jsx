import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ title, description, image, delay }) => (
  <motion.div
    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-light to-navy-dark border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 glow-effect"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Image Container */}
    <div className="relative h-56 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden flex items-center justify-center">
      <div className="text-6xl font-bold text-indigo-300/30 group-hover:scale-110 transition-transform duration-300">
        {image}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <button className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
        View Project
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
)

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: '🛍️',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      image: '📊',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with social features and personalized coaching.',
      image: '💪',
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot solution powered by NLP and machine learning algorithms.',
      image: '🤖',
    },
    {
      title: 'Cloud Management Tool',
      description: 'Enterprise-grade cloud infrastructure management and monitoring platform.',
      image: '☁️',
    },
    {
      title: 'Content Delivery System',
      description: 'Headless CMS with multi-language support and optimized delivery network.',
      image: '📝',
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 bg-gradient-to-b from-navy-dark to-navy-light">
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
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Showcasing our latest and greatest projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
