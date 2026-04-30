import { ResumeData } from "@/data/resume";
import QRCode from "react-qr-code";

export default function ExecutiveLayout({ data }: { data: ResumeData }) {
  return (
    <div className="p-16 h-full flex flex-col gap-10 font-serif">
      {/* Header */}
      <header className="relative border-b-[3px] border-gray-900 pb-8">
        {data.profile.website && (
          <div className="absolute left-0 top-0 flex flex-col items-center gap-1">
            <div className="bg-white p-1 border border-gray-200">
              <QRCode value={data.profile.website} size={60} />
            </div>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Portfolio</span>
          </div>
        )}
        <div className="text-center">
          <h1 className="text-5xl font-black uppercase tracking-widest text-gray-900 mb-2">
            {data.profile.name}
          </h1>
          <p className="text-lg uppercase tracking-[0.3em] text-gray-600 font-bold mb-6">
            {data.profile.role}
          </p>
          <div className="flex justify-center gap-6 text-xs font-sans font-bold text-gray-500 uppercase">
            <span>{data.profile.location}</span>
            <span>•</span>
            <span>{data.profile.email}</span>
            <span>•</span>
            <span>{data.profile.phone}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="px-8">
        <p className="text-lg text-gray-800 leading-relaxed text-justify first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
          {data.profile.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="flex flex-col gap-8">
        <h2 className="text-xl font-black uppercase tracking-widest border-b border-gray-300 pb-2 mb-2 italic">
          Professional Portfolio
        </h2>
        <div className="flex flex-col gap-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="break-inside-avoid px-4">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-900 underline decoration-gray-300 underline-offset-4">{exp.title}</h3>
                <span className="text-sm font-bold text-gray-600 italic">{exp.period}</span>
              </div>
              <p className="text-sm font-black uppercase tracking-wider text-gray-500 mb-4">{exp.company}</p>
              <div className="space-y-3">
                <p className="text-base text-gray-700 italic leading-relaxed">{exp.description}</p>
                {exp.highlights && (
                  <ul className="list-square list-inside space-y-2 px-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-gray-800 leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-12 mt-4 px-4">
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 italic">
              Academic Background
            </h2>
            <div className="flex flex-col gap-6">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                  <p className="text-sm font-medium text-gray-600 italic">{edu.institution}</p>
                  <p className="text-xs font-bold text-gray-400 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 italic">
              Strategic Project Highlights
            </h2>
            <div className="flex flex-col gap-4">
              {data.geo_projects?.slice(0, 2).map((p, i) => (
                <div key={i} className="break-inside-avoid border-l-2 border-emerald-200 pl-3">
                  <h3 className="font-bold text-xs text-gray-900 uppercase tracking-tight">{p.name}</h3>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">{p.description}</p>
                </div>
              ))}
              {(data.tech_projects || data.projects).slice(0, 2).map((p, i) => (
                <div key={i} className="break-inside-avoid border-l-2 border-blue-200 pl-3">
                  <h3 className="font-bold text-xs text-gray-900 uppercase tracking-tight">{p.name}</h3>
                  <p className="text-[11px] text-gray-600 mt-1 leading-snug">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 italic">
              Linguistic Proficiency
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-2 font-sans uppercase font-bold text-xs text-gray-600">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex gap-2">
                  <span>{lang.name}:</span>
                  <span className="text-gray-900">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 italic">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 gap-4 font-sans uppercase">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <h3 className="text-[10px] font-black text-gray-400 mb-2 tracking-tighter">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, j) => (
                      <span key={j} className="text-[10px] font-bold text-gray-700 border border-gray-200 px-2 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
