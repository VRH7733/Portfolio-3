import { motion } from 'framer-motion'

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Prajnan Software Private Limited',
    period: 'Sep 2024 - Present',
    description: [
      'Developing and maintaining responsive web applications using HTML, CSS, JavaScript, and React.js, ensuring an optimal user experience across devices and achieving a 50 percent increase in efficiency.',
      'Currently working on a SaaS-based inventory management system, handling 30 percent front-end and back-end development while guiding the team in best practices and effective implementation strategies.',
      'Integrated RESTful APIs and managed JSON data to enhance functionality and user interaction, contributing to a more seamless and efficient user experience.'
    ]
  },
  {
    title: 'Web Developer Intern',
    company: 'Codsoft IT Services and IT Consulting',
    period: 'Jul 2024 - Aug 2024',
    description: [
      'Designed and developed a responsive personal website, leveraging CSS media queries and flexible grid systems.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

