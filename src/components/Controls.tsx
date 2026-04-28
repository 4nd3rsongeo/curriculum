"use client";

import { useResume } from "@/context/ResumeContext";
import { Languages, Layout, Printer, FileText, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layouts = [
  { id: "minimalist", label: "Minimalist" },
  { id: "sidebar", label: "Sidebar" },
  { id: "tech", label: "Tech Focused" },
  { id: "executive", label: "Executive Serif" },
  { id: "timeline", label: "Timeline" },
];

export default function Controls() {
  const { layout, setLayout, language, setLanguage } = useResume();
  const pathname = usePathname();
  const isCoverLetter = pathname === "/cover-letter";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-gray-200 p-2 rounded-full shadow-2xl flex items-center gap-2 no-print z-50">
      <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
        <Link 
          href={isCoverLetter ? "/" : "/cover-letter"}
          className="p-2 hover:bg-gray-100 rounded-full transition-all text-blue-600"
          title={isCoverLetter ? "Back to Resume" : "View Cover Letter"}
        >
          {isCoverLetter ? <Home className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
        </Link>
      </div>

      <div className="flex items-center gap-1 border-r border-gray-200 pr-2">
        <Languages className="w-4 h-4 text-gray-500 ml-2" />
        <button
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            language === "pt" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            language === "en" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          EN
        </button>
      </div>

      {!isCoverLetter && (
        <div className="flex items-center gap-1 overflow-x-auto max-w-[500px] border-r border-gray-200 pr-2">
          <Layout className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0" />
          {layouts.map((l) => (
            <button
              key={l.id}
              onClick={() => setLayout(l.id as any)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                layout === l.id ? "bg-gray-800 text-white" : "hover:bg-gray-100"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => window.print()}
        className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all shadow-lg"
        title="Print to PDF"
      >
        <Printer className="w-4 h-4" />
      </button>
    </div>
  );
}
