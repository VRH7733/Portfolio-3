import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_o76akap', 'template_bvfyv8c', form.current, 'G7KEKPCQENHVdN5CF')
        .then(
          () => {
            console.log('SUCCESS!')
            alert('Message sent successfully!')
            form.current?.reset()
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    }
  }

  return (
    <section id="contact" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 outline-none transition-all dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 outline-none transition-all dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 outline-none transition-all dark:text-white resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
          >
            Send Message
            <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

