import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { profile } from '../data/profile';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 py-16 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl rounded-[28px] border border-[#D7E2EA]/20 bg-[#111111]/90 p-6 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:rounded-[40px] sm:p-12 md:p-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-[#B6C0D1] sm:text-sm sm:tracking-[0.35em]">Get in touch</p>
        <h2 className="mt-5 text-[3rem] font-black uppercase leading-none tracking-[-0.04em] text-white sm:mt-6 sm:text-[clamp(3rem,8vw,90px)]">Contact Me</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#D7E2EA]/80 sm:text-lg">
          If you have a data project, analytics problem, or technical collaboration in mind, let&apos;s talk. I&apos;m ready to help turn data into clear, useful decisions.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-[#D7E2EA]/85 sm:flex-row sm:gap-6">
          <a href={`mailto:${profile.email}`} className="break-all transition hover:text-white">{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="transition hover:text-white">{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
        </div>
        <div className="mt-10 flex justify-center">
          <ContactButton />
        </div>
      </motion.div>
    </section>
  );
}
