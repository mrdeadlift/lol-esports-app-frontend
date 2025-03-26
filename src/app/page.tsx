import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import GameplaySection from '@/components/home/GameplaySection';
import NewsSection from '@/components/home/NewsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <GameplaySection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
