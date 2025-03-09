import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  ClockIcon,
} from 'lucide-react';

const TimelineExperience = () => {
  const experiences = [
    {
      date: "2022",
      title: "İçerik Yazarı",
      company: "WebHoDo",
      type: "freelance",
      duration: "Proje Bazlı",
      skills: ["İçerik Planlama", "SEO"]
    },
    {
      date: "2023",
      title: "Dijital Pazarlama Stajyeri",
      company: "Corebyte",
      type: "internship",
      duration: "Stajyer & Freelance",
      skills: ["Pazarlama", "Analiz"]
    },
    {
      date: "2025",
      title: "Dijital Dönüşüm & ERP Stajyeri",
      company: "GermenUPS",
      type: "internship",
      duration: "Stajyer",
      skills: ["ERP", "Süreç Analizi"]
    },
    {
      date: "2024-Günümüz",
      title: "İçerik Editörü",
      company: "TheAlphaFuture",
      type: "fulltime",
      duration: "Freelance",
      skills: ["Analiz", "Strateji"]
    }
  ];

  const getIcon = (type: 'fulltime' | 'internship' | 'freelance') => {
    switch (type) {
      case 'fulltime':
        return <BriefcaseIcon className="w-5 h-5 text-secondary" />;
      case 'internship':
        return <GraduationCapIcon className="w-5 h-5 text-secondary" />;
      case 'freelance':
        return <ClockIcon className="w-5 h-5 text-secondary" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6" id="deneyimler">
      <h2 className="text-3xl font-bold mb-8 text-center">Profesyonel Yolculuğum</h2>
      <div className="flex justify-between gap-4 overflow-x-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="flex-shrink-0 w-56 p-4 bg-white shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center mb-2">
                {getIcon(exp.type as 'fulltime' | 'internship' | 'freelance')}
              </div>

              <span className="text-sm font-semibold text-gray-500">{exp.date}</span>
              <h3 className="font-bold text-lg leading-tight">{exp.title}</h3>
              <p className="text-gray-600 text-sm">{exp.company}</p>
              <p className="text-gray-500 text-xs">{exp.duration}</p>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                {exp.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs bg-primary bg-opacity-60 text-white border-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className="absolute top-1/2 left-full w-1 h-10 bg-gray-200 transform -translate-y-1/2 -translate-x-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;