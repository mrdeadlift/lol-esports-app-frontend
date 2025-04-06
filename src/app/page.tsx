import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import GameplaySection from '@/components/home/GameplaySection';
import NewsSection from '@/components/home/NewsSection';
import ScheduleSection from '@/components/home/ScheduleSection';
import TeamsSection from '@/components/home/TeamsSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ScheduleSection />
        <GameplaySection />
        <TeamsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
