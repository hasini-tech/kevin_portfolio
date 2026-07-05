import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/profile';

export function ProjectsSection() {
  const { scrollYProgress } = useScroll();
  const projectScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section id="projects" className="-mt-8 z-10 rounded-t-[30px] bg-[#0C0C0C] px-5 pb-20 pt-10 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-24 sm:pt-12 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-14">
      <h2 className="mb-10 text-center text-[3.2rem] font-black uppercase leading-none tracking-[-0.04em] text-[#D7E2EA] sm:mb-16 sm:text-[clamp(3rem,12vw,160px)] md:mb-20">Projects</h2>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative overflow-hidden rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:sticky md:top-24 md:h-[85vh] md:rounded-[60px] md:p-8"
            style={{ scale: projectScale }}
            initial={{ scale: 1, opacity: 0.95 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-[3.2rem] font-black leading-none text-[#D7E2EA] sm:text-[clamp(3rem,10vw,140px)]">{project.number}</div>
                  <div className="pt-2">
                    <div className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/70 sm:text-[clamp(0.85rem,1.4vw,1.2rem)] sm:tracking-[0.3em]">{project.category}</div>
                    <div className="mt-1 text-[1.15rem] font-medium uppercase leading-tight text-[#D7E2EA] sm:text-[clamp(1.3rem,3vw,2.2rem)]">{project.name}</div>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#D7E2EA]/70 sm:text-base">{project.description}</p>
                  </div>
                </div>
                <div className="inline-flex w-fit items-center justify-center rounded-full border-2 border-[#D7E2EA] px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#D7E2EA] sm:px-8 sm:py-3 sm:text-sm sm:tracking-[0.25em]">
                  {project.period}
                </div>
              </div>

              <div className="mt-6 grid flex-1 gap-4 sm:mt-8 md:grid-cols-[40%_60%] md:gap-6">
                <div className="flex flex-col gap-4">
                  <img src={project.images[0]} alt="" className="h-40 w-full rounded-[24px] object-cover sm:h-[clamp(130px,16vw,230px)] sm:rounded-[50px] md:rounded-[60px]" />
                  <img src={project.images[1]} alt="" className="h-48 w-full rounded-[24px] object-cover sm:h-[clamp(160px,22vw,340px)] sm:rounded-[50px] md:rounded-[60px]" />
                </div>
                <img src={project.images[2]} alt="" className="h-56 w-full rounded-[24px] object-cover sm:h-full sm:min-h-[280px] sm:rounded-[50px] md:rounded-[60px]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
