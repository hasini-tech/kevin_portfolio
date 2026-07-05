import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { profile, strengths } from '../data/profile';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-[#0C0C0C] px-5 py-16 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon icon" className="absolute left-[-28px] top-[4%] w-[90px] opacity-45 sm:left-[2%] sm:w-[160px] sm:opacity-100 md:left-[4%] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D object" className="absolute bottom-[4%] left-[-24px] w-[74px] opacity-45 sm:left-[6%] sm:w-[140px] sm:opacity-100 md:left-[10%] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego icon" className="absolute right-[-30px] top-[5%] w-[90px] opacity-45 sm:right-[2%] sm:w-[160px] sm:opacity-100 md:right-[4%] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D group" className="absolute bottom-[4%] right-[-32px] w-[96px] opacity-45 sm:right-[6%] sm:w-[170px] sm:opacity-100 md:right-[10%] md:w-[220px]" />
      </FadeIn>

      <div className="relative z-10 flex min-h-[74vh] flex-col items-center justify-center gap-8 text-center sm:min-h-[80vh] sm:gap-14 md:gap-16">
        <FadeIn delay={0} duration={0.8} y={40}>
          <h2 className="hero-heading text-[3.2rem] font-black uppercase leading-none tracking-[-0.04em] sm:text-[clamp(3rem,12vw,160px)]">About me</h2>
        </FadeIn>
        <AnimatedText text={`${profile.summary} Based in ${profile.location}, I focus on practical analysis, clean technical execution, and fast learning across emerging technologies.`} />
        <FadeIn delay={0.15} duration={0.8} y={20}>
          <div className="flex max-w-4xl flex-wrap justify-center gap-3">
            {strengths.map((strength) => (
              <span key={strength} className="rounded-full border border-[#D7E2EA]/30 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#D7E2EA] sm:px-4 sm:text-xs sm:tracking-[0.25em]">
                {strength}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2} duration={0.8} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
