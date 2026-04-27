"use client";

import { useResume } from "@/context/ResumeContext";
import { resumeData } from "@/data/resume";
import Controls from "@/components/Controls";
import MinimalistLayout from "@/components/layouts/MinimalistLayout";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import TechLayout from "@/components/layouts/TechLayout";
import ExecutiveLayout from "@/components/layouts/ExecutiveLayout";
import TimelineLayout from "@/components/layouts/TimelineLayout";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { layout, language } = useResume();
  const data = resumeData[language];

  const renderLayout = () => {
    switch (layout) {
      case "minimalist":
        return <MinimalistLayout data={data} />;
      case "sidebar":
        return <SidebarLayout data={data} />;
      case "tech":
        return <TechLayout data={data} />;
      case "executive":
        return <ExecutiveLayout data={data} />;
      case "timeline":
        return <TimelineLayout data={data} />;
      default:
        return <MinimalistLayout data={data} />;
    }
  };

  return (
    <main className="min-h-screen py-10 print:py-0 print:bg-white bg-gray-100">
      <Controls />
      
      <div className="resume-container overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${layout}-${language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderLayout()}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center text-gray-400 text-xs no-print pb-20">
        <p>Press Ctrl+P to save as PDF. Ensure "Background Graphics" is enabled in print settings.</p>
      </div>
    </main>
  );
}
