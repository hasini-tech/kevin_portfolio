import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export function MarqueeSection() {
  const marqueeRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = marqueeRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const computed = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(computed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={marqueeRef} id="showcase" className="bg-[#0C0C0C] px-0 pb-8 pt-16 sm:pb-10 sm:pt-32 md:pt-40">
      <div className="space-y-2 sm:space-y-3">
        <div className="overflow-hidden">
          <motion.div className="flex w-max gap-3 will-change-transform" animate={{ x: offset - 200 }} transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}>
            {[...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11)].map((src, index) => (
              <img key={`row1-${index}`} src={src} alt="" loading="lazy" className="h-[160px] w-[260px] rounded-xl object-cover sm:h-[270px] sm:w-[420px] sm:rounded-2xl" />
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div className="flex w-max gap-3 will-change-transform" animate={{ x: -(offset - 200) }} transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}>
            {[...marqueeImages.slice(11), ...marqueeImages.slice(11), ...marqueeImages.slice(11)].map((src, index) => (
              <img key={`row2-${index}`} src={src} alt="" loading="lazy" className="h-[160px] w-[260px] rounded-xl object-cover sm:h-[270px] sm:w-[420px] sm:rounded-2xl" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
