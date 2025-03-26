import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "FC 25 最新アップデート情報",
      summary: "新シーズンの開始に伴い、ゲームバランスとAIの改善を含む大型アップデートが配信開始",
      date: "2023年10月15日",
      imageUrl: "/news/update.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "ULTIMATE TEAM 新シーズン開始",
      summary: "新たな選手カードとチャレンジが登場。今シーズンの目玉はレジェンド選手の追加",
      date: "2023年10月10日",
      imageUrl: "/news/ultimate-team.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "eスポーツ世界大会の詳細発表",
      summary: "FC 25ワールドチャンピオンシップの詳細が公開。予選は来月から開始",
      date: "2023年10月5日",
      imageUrl: "/news/esports.jpg",
      url: "#"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">最新ニュース</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-gray-light rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                {/* 実際の実装時には、ダミー画像を実際の画像に置き換えてください */}
                <div className="w-full h-full relative">
                  <span className="absolute z-10 inset-0 flex items-center justify-center text-gray-500">News Image</span>
                  <Image 
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-30"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                <Link href={item.url} className="text-primary font-medium hover:underline">
                  続きを読む &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#allnews" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-full font-medium">
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  );
} 