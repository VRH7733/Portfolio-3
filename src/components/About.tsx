import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-600 dark:text-primary-400">
          About Me
        </h2>
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            I am a Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express and MongoDB. Currently, 
            I am interning at Prajnan Software Private Limited, where I am actively developing responsive web applications 
            and contributing to a SaaS-based inventory management system.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            I hold a Bachelor's degree in Electrical and Electronics Engineering from REVA University, with a CGPA of 9.16/10.0. 
            My technical expertise spans various programming languages and frameworks, and I am passionate about leveraging 
            technology to enhance user experiences.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

