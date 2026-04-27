"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LayoutType = "minimalist" | "sidebar" | "tech" | "executive" | "timeline";
type LanguageType = "pt" | "en";

interface ResumeContextType {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<LayoutType>("minimalist");
  const [language, setLanguage] = useState<LanguageType>("pt");

  return (
    <ResumeContext.Provider value={{ layout, setLayout, language, setLanguage }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
