import { motion } from 'framer-motion'
import { Github, Linkedin, Code2 } from 'lucide-react'

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/VRH7733',
      icon: <Github className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/v-raghavendra1',
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/raghavendravenkatesh1',
      icon: <Code2 className="w-6 h-6" />
    }
  ]

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          © {new Date().getFullYear()} V Raghavendra. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

