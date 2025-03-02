'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fullTexts = [
      "Süreç Geliştirme Uzmanı",
      "Freelance İçerik Editörü",
      "Freelance İçerik Yazarı"
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false; // Silme durumunu takip etmek için

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Yazma işlemi
        if (charIndex < fullTexts[index].length) {
          currentText += fullTexts[index][charIndex];
          setText(currentText);
          charIndex++;
        } else {
          // Yazma tamamlandığında dur ve silmeye başla
          isDeleting = true;
          setTimeout(() => {
            isDeleting = true; // Silme işlemi için duraklama
          }, 2000); // Yazı tamamlandıktan sonra 2 saniye bekle
        }
      } else {
        // Silme işlemi
        if (charIndex > 0) {
          currentText = currentText.slice(0, -1);
          setText(currentText);
          charIndex--;
        } else {
          // Silme tamamlandığında bir sonraki metne geç
          isDeleting = false;
          index = (index + 1) % fullTexts.length; // Döngüsel olarak ilerle
        }
      }
    }, isDeleting ? 30 : 100); // Silme hızı aynı kalsın, yazma hızı daha hızlı

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white" id="anasayfa">
      <div className="relative z-10 flex items-center justify-center h-full bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-center"
        >
          <motion.h1 className="leading-tight font-bold text-black text-5xl">
            <motion.span
              className="text-[4rem] md:text-[5rem] block mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              Melike Nağaç
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-2xl text-black font-semibold mt-2"
            style={{ color: '#3f3b36', minHeight: '2.5rem' }} // Sabit yükseklik
          >
            {text}
          </motion.p>
          <div className="mt-16">
            <span className="text-[2rem] md:text-[2.5rem] leading-normal font-bold text-secondary">
              “Her veri bir hikaye anlatır,
            </span>
            <span className="text-[2rem] md:text-[2.5rem] leading-normal font-bold text-primary">
              her analiz bir çözüm getirir.”
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-black font-semibold mt-5"
            style={{ color: '#3f3b36' }}
          >
            Ben de bu hikayeleri yazıyor, geleceğin projelerine adım atıyorum.
          </motion.p>
        </motion.div>
      </div>
      {/* Aşağı kaydırma butonu kaldırıldı */}
    </div>
  );
};

export default HeroSection;