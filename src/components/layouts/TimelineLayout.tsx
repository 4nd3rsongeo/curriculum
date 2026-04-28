import { ResumeData } from "@/data/resume";
import { Briefcase, GraduationCap, Award, Zap } from "lucide-react";

export default function TimelineLayout({ data }: { data: ResumeData }) {
  return (
    <div className="p-12 h-full flex flex-col gap-10">
      <header className="flex justify-between items-end border-b-4 border-gray-800 pb-6">
        <div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter">{data.profile.name}</h1>
          <p className="text-xl font-bold text-gray-400 uppercase tracking-widest mt-1">{data.profile.role}</p>
        </div>
        <div className="text-right text-sm font-bold text-gray-600">
          <p>{data.profile.email}</p>
          <p>{data.profile.phone}</p>
          <p>{data.profile.location}</p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10 flex-1">
        <div className="col-span-8 flex flex-col gap-10">
          <section>
            <h2 className="text-lg font-black uppercase flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-gray-800" /> Career Timeline
            </h2>
            <div className="relative pl-8 border-l-2 border-gray-200 ml-2 space-y-10">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative break-inside-avoid">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-gray-400 uppercase mb-1">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-sm font-black text-blue-600 uppercase tracking-tight mb-3">{exp.company}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                    {exp.highlights && (
                      <div className="grid grid-cols-1 gap-2">
                        {exp.highlights.map((h, j) => (
                          <div key={j} className="flex gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded border-l-2 border-gray-300">
                            <Zap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-4 flex flex-col gap-10">
          <section>
            <h2 className="text-lg font-black uppercase flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-gray-800" /> Education
            </h2>
            <div className="space-y-6">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                  <p className="text-xs text-gray-500 font-bold">{edu.institution}</p>
                  <p className="text-xs text-gray-400 font-bold uppercase">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-gray-800" /> Competencies
            </h2>
            <div className="space-y-6">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <h3 className="text-xs font-black text-gray-400 uppercase mb-3 border-b border-gray-100 pb-1">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, j) => (
                      <span key={j} className="text-[10px] font-bold bg-gray-900 text-white px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200">
            <h2 className="text-sm font-black uppercase mb-4">Geology Projects</h2>
            <div className="space-y-4">
              {data.geo_projects?.map((p, i) => (
                <div key={i}>
                  <h3 className="font-bold text-xs text-emerald-700">{p.name}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200">
            <h2 className="text-sm font-black uppercase mb-4">Technology Projects</h2>
            <div className="space-y-4">
              {(data.tech_projects || data.projects).map((p, i) => (
                <div key={i}>
                  <h3 className="font-bold text-xs text-blue-700">{p.name}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
