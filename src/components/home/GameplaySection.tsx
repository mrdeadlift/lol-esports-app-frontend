import Link from 'next/link';

export default function GameplaySection() {
  return (
    <section id="gameplay" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">最新ライブ</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* 試合ライブストリーミングプレイスホルダー */}
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-12">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span className="text-xl">最新試合ライブを見る</span>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">試合結果とライブストリーミング情報</h3>
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
                <div className="text-center">
                  <p className="text-lg font-bold">T1</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">VS</p>
                  <p className="text-sm text-gray-400 mt-1">2025年4月6日 19:00 JST</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">Gen.G</p>
                </div>
              </div>
              <Link href="/schedule" className="inline-block bg-accent hover:bg-opacity-80 transition-colors px-6 py-2 rounded-full font-medium mt-2">
                試合結果を見る
              </Link>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
                <div className="text-center">
                  <p className="text-lg font-bold">DRX</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">VS</p>
                  <p className="text-sm text-gray-400 mt-1">2025年4月7日 15:00 JST</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">DWG KIA</p>
                </div>
              </div>
              <Link href="/schedule" className="inline-block bg-accent hover:bg-opacity-80 transition-colors px-6 py-2 rounded-full font-medium mt-2">
                試合結果を見る
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/live" className="inline-block border-2 border-white hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full font-medium text-lg">
              全てのライブストリーミングを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}