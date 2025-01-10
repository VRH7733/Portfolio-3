import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform using MERN stack with user authentication and admin panel.',
    image: '/full_stack.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VRH7733/full_stack_e-commerce'
  },
  {
    title: 'Jobs Listing Platform',
    description: 'Dynamic job listing platform for streamlined job searching and recruitment.',
    image: '/jobs.png',
    tags: ['React', 'Tailwind CSS', 'JSON-Server', 'Vite'],
    github: 'https://github.com/VRH7733/jobs'
  }
]

const animations = [
  'animate-fade-in',
  'animate-slide-up',
  'animate-slide-down',
  'animate-slide-left',
  'animate-slide-right',
  'animate-scale-in',
  'animate-rotate-in'
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-600 dark:text-primary-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${animations[index % animations.length]}`}
            >
              <img src={project.image} alt={project.title} className=" object-contain" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline transition-all duration-300"
                >
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

