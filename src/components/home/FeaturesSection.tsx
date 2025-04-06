import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "最新試合結果",
      description: "世界中のLoL公式大会の最新試合結果をリアルタイムで確認できます。各地域リーグやインターナショナル大会の結果を詳細なスタッツと共にお届けします。",
      imageUrl: "/features/match-results.jpg",
      link: "/results"
    },
    {
      id: 2,
      title: "チームランキング",
      description: "各リージョンのトップチームや世界ランキングをチェック。勝率、KDA、ゴールド効率など様々な指標に基づいた詳細な分析データを提供します。",
      imageUrl: "/features/team-rankings.jpg",
      link: "/rankings"
    },
    {
      id: 3,
      title: "戦略分析",
      description: "プロの試合から学ぶメタ戦略やピック＆バン傾向の分析。トッププレイヤーのチャンピオン使用率や勝率などの統計データを確認できます。",
      imageUrl: "/features/strategy-analysis.jpg",
      link: "/analysis"
    },
    {
      id: 4,
      title: "選手インタビュー",
      description: "トッププロプレイヤーや監督へのインタビュー。試合の裏側や選手たちの思考、チーム戦略について深く掘り下げた独占コンテンツをお届けします。",
      imageUrl: "/features/player-interviews.jpg",
      link: "/interviews"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">主要コンテンツ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center relative">
                  <span className="text-gray-500 text-lg absolute z-10">Feature Image</span>
                  <Image 
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-30"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <Link href={feature.link} className="text-primary font-medium hover:underline">
                  詳細を見る &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}