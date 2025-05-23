import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
      
      {/* 背景画像（LoL esports の試合や選手の画像） */}
      <div className="absolute inset-0 opacity-60 z-10">
        <div className="w-full h-full bg-[url('/images/lol-esports-hero.jpg')] bg-cover bg-center"></div>
      </div>
      
      {/* コンテンツ */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">LoL Esports</h1>
          <p className="text-xl md:text-2xl mb-8">リーグ・オブ・レジェンド eスポーツ公式情報サイト</p>
          <p className="text-lg md:text-xl mb-12">最新の試合結果、チーム情報、大会スケジュールをチェックしよう</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="bg-accent hover:bg-opacity-80 transition-colors px-8 py-4 rounded-full font-medium text-lg">
              試合スケジュール
            </Link>
            <Link href="/results" className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full font-medium text-lg">
              最新試合結果
            </Link>
          </div>
        </div>
      </div>
      
      {/* 下部の矢印 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}