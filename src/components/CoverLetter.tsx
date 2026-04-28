"use client";

import { useResume } from "@/context/ResumeContext";
import { coverLetterData } from "@/data/coverLetter";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link } from "lucide-react";

export default function CoverLetter() {
  const { language } = useResume();
  const data = coverLetterData[language];
  const profile = resumeData[language].profile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl min-h-[1100px] flex flex-col p-16 print:shadow-none print:p-0">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center border-b-2 border-gray-100 pb-10 mb-12"
      >
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-2">{profile.name}</h1>
        <p className="text-xl font-bold text-blue-600 uppercase tracking-[0.3em] mb-8">{profile.role}</p>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600 font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="lowercase">{profile.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>{profile.location}</span>
          </div>
        </div>
      </motion.header>

      {/* Date */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-10 text-gray-500 font-mono text-sm"
      >
        {new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </motion.div>

      {/* Content */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-8"
      >
        <motion.h2 variants={itemVariants} className="text-lg font-bold text-gray-900">
          {data.recipient}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-800 leading-relaxed text-justify">
          {data.introduction}
        </motion.p>

        {data.body.map((paragraph, index) => (
          <motion.p 
            key={index} 
            variants={itemVariants} 
            className="text-gray-800 leading-relaxed text-justify"
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.p variants={itemVariants} className="text-gray-800 leading-relaxed pt-4">
          {data.closing}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-12">
          <p className="text-gray-600 mb-1 italic">{language === 'pt' ? 'Atenciosamente,' : 'Sincerely,'}</p>
          <p className="text-2xl font-serif font-black text-gray-900">{data.signature}</p>
        </motion.div>
      </motion.main>

      {/* Footer / Contact Bar */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 pt-8 border-t border-gray-100 flex justify-center gap-8 no-print"
      >
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors">
          <Link className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors">
          <Link className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
        </a>
      </motion.footer>
    </div>
  );
}
