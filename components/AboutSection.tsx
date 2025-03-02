'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GeometricShapes = () => (
  <div className="hidden lg:block absolute right-40 top-1/2 -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 375"
      className="absolute -z-10 w-[180px] h-[180px]"
    >
      {/* SVG içeriği buraya gelecek */}
      <circle cx="187.5" cy="187.5" r="150" fill="#e0e0e0" />
      {/* Örnek bir daire ekledim, kendi SVG içeriğinizi buraya yerleştirin */}
    </svg>
    <motion.div
      className="text-[2.5rem] md:text-[3rem] text-blue-800 font-light italic relative z-10"
      style={{ color: '#cb6216' }}
    >
      {[
        { text: "Hep,", delay: 0, glow: 0.3 },
        { text: "bir adım", delay: 0.5, glow: 0.3 },
        { text: "daha", delay: 1, glow: 0.8 }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            textShadow: [
              "0 0 0px rgba(203, 98, 22, 0)",
              `0 0 20px rgba(203, 98, 22, ${item.glow})`,
              `0 0 40px rgba(203, 98, 22, ${item.glow})`,
              "0 0 0px rgba(203, 98, 22, 0)"
            ]
          }}
          transition={{
            duration: 2,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
          className="mb-2"
        >
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function AboutSection() {
  return (
    <section id="hakkimda" className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.h2
            className="text-[3.5rem] md:text-[3.5rem] font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hakkımda
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed"
          >
            <p>
              Öğrenmenin hayatın her alanında değerli bir adım olduğuna inanıyorum.
              Bu nedenle farklı deneyimlere açık kalarak sürekli gelişimi hedefliyorum.
              Lisans eğitimimi Dokuz Eylül Üniversitesi Yönetim Bilişim Sistemleri
              bölümünde tamamladım. Amacım, bu disiplinin metodolojilerini işletmeler
              üzerinde uygulayarak süreçleri daha verimli ve yenilikçi hale getirmek.
            </p>

            <p>
              2016 yılından beri kişisel blog yazarlığı yaparak dijital dünyada izler
              bırakıyor; markalara freelance içerik editörlüğü ve yazarlığı hizmeti
              sunuyorum. Aynı zamanda kurucu üyelerinden olduğum IYCADA Gençlik
              Derneği&apos;nde denetim kurulu başkanı olarak sosyal projelere katkı
              sağlıyorum. Verinin bilgiye, bilginin bilgeliğe dönüştüğü bu
              yolculukta hem bireysel hem de profesyonel projelere değer katmaktan
              büyük mutluluk duyuyorum.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <GeometricShapes />
    </section>
  );
}
