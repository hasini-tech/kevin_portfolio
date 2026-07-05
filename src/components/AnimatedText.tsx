import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = useMemo(() => text.split(''), [text]);

  return (
    <p ref={ref} className="mx-auto max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]">
      {chars.map((char, index) => {
        const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
        const adjusted = useTransform(opacity, (value) => Math.max(0.2, value - index * 0.003));
        const springOpacity = useSpring(adjusted, { stiffness: 120, damping: 20 });

        return (
          <motion.span key={`${char}-${index}`} style={{ opacity: springOpacity }} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </p>
  );
}
