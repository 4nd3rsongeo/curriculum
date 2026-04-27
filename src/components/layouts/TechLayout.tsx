import { ResumeData } from "@/data/resume";
import { Terminal, Code2, Database, Layout as LayoutIcon, Cpu, Globe } from "lucide-react";

export default function TechLayout({ data }: { data: ResumeData }) {
  return (
    <div className="p-10 h-full bg-white flex flex-col gap-6">
      {/* Header - Terminal Style */}
      <header className="bg-gray-900 text-white p-6 rounded-lg flex justify-between items-center print:bg-gray-900 print:text-white">
        <div>
          <h1 className="text-3xl font-mono font-bold tracking-tighter text-blue-400">
            {"> "} {data.profile.name.toUpperCase()}
          </h1>
          <p className="text-gray-400 font-mono text-sm mt-1">{data.profile.role}</p>
        </div>
        <div className="text-right font-mono text-[10px] text-gray-500 space-y-1">
          <p>{data.profile.email}</p>
          <p>{data.profile.linkedin}</p>
          <p>{data.profile.location}</p>
        </div>
      </header>

      {/* Profile Section */}
      <section className="bg-blue-50/50 p-4 border-l-4 border-blue-500">
        <h2 className="text-blue-700 text-xs font-black uppercase mb-1 flex items-center gap-2">
          <Terminal className="w-3 h-3" /> System.Profile
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed font-medium">
          {data.profile.summary}
        </p>
      </section>

      <div className="grid grid-cols-12 gap-6 flex-1">
        {/* Left Column - Main Tech Focus */}
        <div className="col-span-8 flex flex-col gap-6">
          {/* Projects First - Tech Focus */}
          <section>
            <h2 className="text-gray-900 text-sm font-black uppercase mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" /> Featured_Projects
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.projects.map((project, i) => (
                <div key={i} className="border border-gray-200 p-4 rounded-lg bg-gray-50/50 break-inside-avoid">
                  <h3 className="font-bold text-blue-700 text-sm">{project.name}</h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.techStack?.map((tech, j) => (
                      <span key={j} className="text-[9px] bg-white border border-blue-200 text-blue-600 px-1.5 py-0.5 rounded-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-gray-900 text-sm font-black uppercase mb-4 flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" /> professional_history
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-gray-100 break-inside-avoid">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm text-gray-900">{exp.title}</h3>
                    <span className="text-[10px] font-mono text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-xs font-bold text-gray-500 mb-2">{exp.company}</p>
                  <ul className="text-xs text-gray-700 space-y-1.5 list-none">
                    {exp.highlights?.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-blue-500">λ</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Education */}
        <div className="col-span-4 flex flex-col gap-6">
          <section>
            <h2 className="text-gray-900 text-sm font-black uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" /> Tech_Stack
            </h2>
            <div className="space-y-4">
              {data.skills.map((group, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <h3 className="text-[10px] font-mono font-bold text-blue-600 mb-2 uppercase">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill, j) => (
                      <span key={j} className="text-[10px] bg-white text-gray-700 px-2 py-0.5 rounded border border-gray-200 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 text-sm font-black uppercase mb-4 flex items-center gap-2">
              <LayoutIcon className="w-4 h-4 text-blue-600" /> Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-xs text-gray-900 leading-tight">{edu.degree}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{edu.institution}</p>
                  <p className="text-[10px] font-mono text-blue-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 text-sm font-black uppercase mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" /> Languages
            </h2>
            <div className="space-y-2">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded border border-gray-100">
                  <span className="text-xs font-bold text-gray-700">{lang.name}</span>
                  <span className="text-[10px] font-mono text-blue-500 uppercase">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
