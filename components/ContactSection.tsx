'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/melikenagac/',
    hoverColor: 'hover:text-[#cb6216]'
  },
  {
    name: 'Github',
    url: 'https://github.com/melikenagac',
    hoverColor: 'hover:text-[#cb6216]'
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/melikenagac',
    hoverColor: 'hover:text-[#cb6216]'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@nagacmelike',
    hoverColor: 'hover:text-[#cb6216]'
  }

];

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="text-[3.5rem] font-bold mb-16 w-full">
            Bana Ulaşın
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-4">
              Profesyonel hesaplarımda beni<br />takip edin!
            </h3>
            <div className="flex flex-col items-start gap-2">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.url}
                    className={`text-xl text-gray-800 ${link.hoverColor} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              İş birliği için ulaşın!
            </h3>
            <Link
              href="mailto:nagacmelike@gmail.com"
              className="text-xl text-gray-800 hover:text-[#cb6216] transition-colors"
            >
              nagacmelike@gmail.com
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 