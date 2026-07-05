import { profile } from '../data/profile';

export function FooterSection() {
  return (
    <footer className="bg-[#080808] px-5 py-10 text-[#AEB8C9] sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-8 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-[#AEB8C9]/90">
            Data analyst portfolio focused on data science, machine learning, analytics, and practical technical execution.
          </p>
        </div>
        <p className="text-[0.9rem] text-[#AEB8C9]/80 sm:text-[0.95rem]">(c) {new Date().getFullYear()} Kevin. All rights reserved.</p>
      </div>
    </footer>
  );
}
