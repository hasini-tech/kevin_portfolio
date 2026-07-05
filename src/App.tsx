import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <Header />
      <main className="bg-[#0C0C0C]">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
