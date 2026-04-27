import { ResumeData } from "@/data/resume";
import { Mail, Phone, Link, MapPin } from "lucide-react";

export default function SidebarLayout({ data }: { data: ResumeData }) {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-[30%] bg-slate-50 p-10 border-r border-gray-200 flex flex-col gap-8 print:bg-slate-50">
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Contact</h2>
          <div className="flex flex-col gap-3 text-xs text-gray-700">
            <SidebarContactItem icon={<Mail className="w-3.5 h-3.5" />} text={data.profile.email} />
            <SidebarContactItem icon={<Phone className="w-3.5 h-3.5" />} text={data.profile.phone} />
            <SidebarContactItem icon={<MapPin className="w-3.5 h-3.5" />} text={data.profile.location} />
            <SidebarContactItem icon={<Link className="w-3.5 h-3.5" />} text={data.profile.linkedin} />
            <SidebarContactItem icon={<Link className="w-3.5 h-3.5" />} text={data.profile.github} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Skills</h2>
          <div className="flex flex-col gap-6">
            {data.skills.map((group, i) => (
              <div key={i}>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase mb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, j) => (
                    <span key={j} className="text-[11px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Languages</h2>
          <div className="flex flex-col gap-2">
            {data.languages.map((lang, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-700">{lang.name}</span>
                <span className="text-gray-500 italic">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 flex flex-col gap-8">
        <header>
          <h1 className="text-5xl font-black tracking-tight text-gray-900 leading-none">{data.profile.name}</h1>
          <p className="text-xl font-medium text-blue-600 mt-2">{data.profile.role}</p>
        </header>

        <section>
          <p className="text-gray-700 leading-relaxed text-sm italic border-l-4 border-blue-600 pl-4 py-1">
            {data.profile.summary}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
            Experience <div className="flex-1 h-px bg-gray-200"></div>
          </h2>
          <div className="flex flex-col gap-8">
            {data.experience.map((exp, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{exp.title}</h3>
                  <span className="text-[10px] font-black uppercase text-gray-400 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{exp.company}</p>
                <p className="text-sm text-gray-600 mb-3">{exp.description}</p>
                {exp.highlights && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
              Education <div className="flex-1 h-px bg-gray-200"></div>
            </h2>
            <div className="flex flex-col gap-5">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight">{edu.degree}</h3>
                  <p className="text-xs font-bold text-gray-500 mt-1">{edu.institution}</p>
                  <p className="text-[10px] text-gray-400 font-bold">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
              Projects <div className="flex-1 h-px bg-gray-200"></div>
            </h2>
            <div className="flex flex-col gap-5">
              {data.projects.map((project, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-sm text-gray-900">{project.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack?.map((tech, j) => (
                      <span key={j} className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function SidebarContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-blue-600 mt-0.5">{icon}</span>
      <span className="break-all">{text}</span>
    </div>
  );
}
