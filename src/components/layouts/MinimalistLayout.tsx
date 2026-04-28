import { ResumeData } from "@/data/resume";
import { Mail, Phone, Link, MapPin, Globe } from "lucide-react";

export default function MinimalistLayout({ data }: { data: ResumeData }) {
  return (
    <div className="p-12 h-full flex flex-col gap-8">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b-2 border-gray-100 pb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-gray-900">{data.profile.name}</h1>
          <p className="text-xl font-medium text-blue-600 mt-1">{data.profile.role}</p>
        </div>
        
        <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600">
          <ContactItem icon={<Mail className="w-4 h-4" />} text={data.profile.email} />
          <ContactItem icon={<Phone className="w-4 h-4" />} text={data.profile.phone} />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text={data.profile.location} />
          <ContactItem icon={<Link className="w-4 h-4" />} text={data.profile.linkedin} />
          <ContactItem icon={<Link className="w-4 h-4" />} text={data.profile.github} />
        </div>
      </header>

      {/* Summary */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-3 border-b border-gray-200 pb-1">Profile</h2>
        <p className="text-gray-700 leading-relaxed text-sm">{data.profile.summary}</p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-200 pb-1">Professional Experience</h2>
        <div className="flex flex-col gap-6">
          {data.experience.map((exp, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                </div>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2 italic">{exp.description}</p>
              {exp.highlights && (
                <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {/* Education */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-200 pb-1">Education</h2>
            <div className="flex flex-col gap-4">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                  <p className="text-xs font-semibold text-gray-700">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.period}</p>
                  {edu.description && <p className="text-xs text-gray-600 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-3 border-b border-gray-200 pb-1">Languages</h2>
            <div className="flex flex-wrap gap-4">
              {data.languages.map((lang, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-gray-800">{lang.name}:</span> <span className="text-gray-600">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-200 pb-1">Skills</h2>
            <div className="flex flex-col gap-4">
              {data.skills.map((skillGroup, i) => (
                <div key={i}>
                  <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((skill, j) => (
                      <span key={j} className="text-xs bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Geological Projects */}
          {data.geo_projects && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-200 pb-1">Geological Projects</h2>
              <div className="flex flex-col gap-4">
                {data.geo_projects.map((project, i) => (
                  <div key={i} className="break-inside-avoid">
                    <h3 className="font-bold text-sm text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-700 mb-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.geoStack?.map((item, j) => (
                        <span key={j} className="text-[10px] text-emerald-600 font-bold uppercase">#{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technology Projects */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-200 pb-1">Technology Projects</h2>
            <div className="flex flex-col gap-4">
              {data.tech_projects ? (
                data.tech_projects.map((project, i) => (
                  <div key={i} className="break-inside-avoid">
                    <h3 className="font-bold text-sm text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-700 mb-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack?.map((tech, j) => (
                        <span key={j} className="text-[10px] text-blue-600 font-bold uppercase">#{tech}</span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                data.projects.map((project, i) => (
                  <div key={i} className="break-inside-avoid">
                    <h3 className="font-bold text-sm text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-700 mb-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack?.map((tech, j) => (
                        <span key={j} className="text-[10px] text-blue-600 font-bold uppercase">#{tech}</span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-blue-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
