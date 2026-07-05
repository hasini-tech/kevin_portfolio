import { useState } from 'react';
import { Download } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [active, setActive] = useState('Home');

  return (
    <header className="sticky top-0 z-50 bg-[#120D2F]/90 py-2 backdrop-blur-[18px] sm:py-2 lg:py-1.5">
      <nav className="mx-auto grid max-w-[1320px] grid-cols-[auto_auto] items-center justify-between gap-2 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/95 shadow-[0_16px_45px_rgba(7,4,24,0.3)] sm:h-11 sm:w-11 lg:h-10 lg:w-10">
          <img src="/images/kevinlogo.png" alt="Pasis Kevin Charlas logo" className="h-full w-full object-cover" />
        </a>

        <ul className="order-3 col-span-2 flex w-full items-center justify-between gap-1 overflow-x-auto rounded-full bg-[#1F184C] px-1.5 py-1.5 shadow-[0_20px_70px_rgba(7,4,24,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-3 sm:px-3 sm:py-2 lg:order-none lg:col-span-1 lg:mx-auto lg:w-auto lg:max-w-full lg:px-2.5 lg:py-1.5">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <li key={item.label} className="shrink-0">
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={`block rounded-full px-2 py-1.5 text-[0.56rem] font-medium uppercase tracking-[0.08em] transition duration-200 min-[360px]:px-2.5 min-[360px]:text-[0.62rem] sm:px-5 sm:py-2 sm:text-sm sm:tracking-[0.2em] lg:px-4 lg:py-1.5 lg:text-xs ${
                    isActive
                      ? 'bg-white text-[#151232] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="sm:hidden">{item.label === 'Experience' ? 'Exp' : item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/Pasis-Kevin-Charlas-Resume.pdf"
          download
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-4 text-[#151232] shadow-[0_16px_45px_rgba(7,4,24,0.3)] transition hover:-translate-y-0.5 hover:bg-[#D7E2EA] sm:h-auto sm:px-5 sm:py-2.5 lg:px-5 lg:py-2"
          aria-label="Download resume"
        >
          <Download size={17} />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.22em]">Resume</span>
        </a>
      </nav>
    </header>
  );
}
