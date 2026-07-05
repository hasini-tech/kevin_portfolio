import { FadeIn } from '../components/FadeIn';
import { education, experience, skills } from '../data/profile';

export function ServicesSection() {
  return (
    <section id="experience" className="rounded-t-[30px] bg-white px-5 py-16 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2 className="mb-10 text-center text-[2.8rem] font-black uppercase leading-none tracking-[-0.04em] text-[#0C0C0C] sm:mb-20 sm:text-[clamp(2.5rem,8vw,120px)] md:mb-28">Experience & Skills</h2>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-16">
        <div>
          <FadeIn delay={0} duration={0.8} y={20}>
            <h3 className="mb-5 text-lg font-semibold uppercase text-[#0C0C0C] sm:mb-6 sm:text-xl">Experience</h3>
            <div className="space-y-7 sm:space-y-8">
              {experience.map((item) => (
                <div key={item.company} className="border-t border-black/10 pt-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-base font-medium text-[#0C0C0C] sm:text-lg">{item.title}</div>
                      <div className="text-sm text-[#0C0C0C]/70">{item.company} - {item.location}</div>
                    </div>
                    <div className="text-sm font-semibold text-[#0C0C0C]/60 sm:text-right">{item.period}</div>
                  </div>
                  <p className="mt-3 text-[clamp(0.9rem,1.6vw,1rem)] leading-relaxed text-[#0C0C0C]/70">{item.details}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.15} duration={0.8} y={20}>
            <h3 className="mb-5 text-lg font-semibold uppercase text-[#0C0C0C] sm:mb-6 sm:text-xl">Education</h3>
            {education.map((edu) => (
              <div key={edu.school} className="border-t border-black/10 pt-6">
                <div className="text-base font-medium text-[#0C0C0C] sm:text-lg">{edu.degree}</div>
                <div className="text-sm text-[#0C0C0C]/70">{edu.school}</div>
                <div className="mt-2 text-sm font-semibold text-[#0C0C0C]/60">{edu.period} - {edu.location}</div>
              </div>
            ))}

            <h3 className="mb-5 mt-10 text-lg font-semibold uppercase text-[#0C0C0C] sm:mb-6 sm:mt-12 sm:text-xl">Skills</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border bg-[#F7F7F8] px-3 py-2 text-xs font-medium text-[#0C0C0C] sm:px-4 sm:text-sm">{skill}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
