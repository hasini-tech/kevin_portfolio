import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';
import { profile } from '../data/profile';

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-118px)] flex-col overflow-hidden bg-[#0C0C0C] px-4 pb-7 pt-5 sm:min-h-[calc(100svh-72px)] sm:px-8 sm:pb-8 sm:pt-6 md:px-10">
      <div className="relative z-10 flex flex-1 flex-col items-center gap-4 sm:block">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-heading w-full self-start overflow-hidden text-[2.9rem] font-black uppercase leading-[0.9] tracking-[-0.03em] min-[360px]:text-[3.55rem] min-[390px]:text-[4.1rem] sm:mt-4 sm:text-[15vw] sm:tracking-[-0.04em] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]"
        >
          <span className="block sm:hidden">Hi, this</span>
          <span className="block sm:hidden">is</span>
          <span className="block sm:hidden">KEVIN</span>
          <span className="hidden sm:block">Hi, this is</span>
          <span className="hidden sm:block">KEVIN</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pointer-events-none relative z-0 flex w-full justify-center sm:pointer-events-auto sm:absolute sm:bottom-0 sm:right-0 sm:block sm:w-auto"
        >
          <Magnet strength={3} padding={150}>
            <img
              src="/images/kevinani.png"
              alt={`${profile.name} portrait`}
              className="w-[170px] object-contain opacity-95 min-[360px]:w-[200px] min-[390px]:w-[230px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </motion.div>

        <div className="relative z-10 mt-auto flex w-full flex-col items-start gap-4 rounded-[22px] border border-white/10 bg-[#0C0C0C]/70 p-4 backdrop-blur-sm sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:border-0 sm:bg-transparent sm:p-0 sm:pb-8 sm:backdrop-blur-0 md:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-[290px] text-[0.7rem] font-light uppercase leading-relaxed tracking-[0.15em] text-[#D7E2EA] min-[360px]:text-[0.78rem] sm:max-w-[220px] sm:text-[clamp(0.75rem,1.4vw,1.5rem)] sm:leading-snug sm:tracking-[0.2em] md:max-w-[300px]"
          >
            {profile.role} building analytics-driven solutions with data science and machine learning
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <ContactButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
