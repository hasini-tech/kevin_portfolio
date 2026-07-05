import { ArrowUpRight } from 'lucide-react';

export function LiveProjectButton() {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-[0.35em] text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base">
      Live Project
      <ArrowUpRight size={16} />
    </button>
  );
}
