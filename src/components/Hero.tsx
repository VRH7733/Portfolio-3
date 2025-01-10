import { motion } from 'framer-motion'
import pic from '../assets/images/profile_pic.png'
interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-800 flex items-center justify-center ">
            <img
              src={pic}
              alt="V Raghavendra"
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
        <div className="text-center md:text-left space-y-8 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-primary-600 dark:text-primary-400"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Passionate about creating innovative web solutions with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-primary-400 text-white dark:bg-primary-400 dark:text-white rounded-full font-medium hover:bg-primary-500 dark:hover:bg-primary-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-full font-medium hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

