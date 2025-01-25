import { motion } from 'framer-motion'

const skills: string[] = [
  'JavaScript', 'TypeScript', 'C++', 'Python' , 'Java' , 'React.js', 'Node.js', 'Express.js', 
  'MongoDB', 'MySQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap CSS', 
  'Git', 'GitHub', 'RESTful APIs', 'Data Structures', 'Algorithms'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-600 dark:text-primary-400">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-200 rounded-full font-medium transition-all duration-300 hover:bg-primary-200 dark:hover:bg-primary-700 shadow-md hover:shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

