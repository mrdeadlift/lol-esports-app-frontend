export default function GameplaySection() {
  return (
    <section id="gameplay" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">ゲームプレイ</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* 動画プレーヤーの代わりに表示するプレースホルダー */}
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-12">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span className="text-xl">ゲームプレイトレーラーを見る</span>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">リアルなサッカー体験</h3>
            <p className="text-lg md:text-xl mb-8">
              新しいFC INTELLIGENCEエンジンにより、よりリアルなプレイ感覚と戦術的深さを実現。
              AIが進化し、選手の動き、パス、シュートなど全ての動作が実際のサッカーに近づきました。
            </p>
            <p className="text-lg md:text-xl">
              高度なモーションキャプチャー技術で実在の選手の動きを忠実に再現。
              スタジアムの雰囲気、観客の盛り上がり、実況解説も含め、リアルなサッカー体験をお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 