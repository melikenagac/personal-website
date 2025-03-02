'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiCog, HiChartBar } from 'react-icons/hi';

const works = [
  {
    title: "Yapay Zeka Tabanlı Veri Modelleme ve Tahmin Sistemi",
    description: "Geçmiş veriler ve istatistiksel analiz yöntemleri kullanarak, gelecekteki reklam kampanyalarının gelirini doğru bir şekilde tahmin etmeyi amaçlayan bir projedir.",
    icon: HiLightBulb
  },
  {
    title: "Satın Alma Süreç Analizi ve ERP Entegrasyonu Tasarımı",
    description: "İşletmelerin mevcut satın alma süreçlerini analiz ederek, ERP sistemine entegrasyon için gerekli tasarım ve dokümantasyonu geliştiren bir projedir.",
    icon: HiCog
  },
  {
    title: "Pazarlama Analizi ile İçerik Planlaması ve Üretimi",
    description: "SEO tabanlı analizlerle etkili içerik stratejileri oluşturmak ve bu stratejilere dayalı içerikler üretmek amacıyla gerçekleştirilen projedir.",
    icon: HiChartBar
  }
];

export default function RecentWorksSection() {
  return (
    <section id="projeler" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[3.5rem] font-bold mb-10"
          style={{ color: '#000000' }}
        >
          Son İşler
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group ${index === 2 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto lg:-mt-4' : ''}`}
            >
              <div className="p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="flex gap-4">
                  <work.icon
                    className={`text-secondary group-hover:scale-110 transition-transform flex-shrink-0 ${index === 2 ? 'w-8 h-8 mt-1' : 'w-12 h-12'}`}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 