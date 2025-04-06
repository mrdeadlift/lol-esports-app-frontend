import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "MSI 2025 開催地が決定",
      summary: "今年のMid-Season Invitationalは東京で開催。アジア、ヨーロッパ、北米の強豪チームが集結",
      date: "2025年4月2日",
      imageUrl: "/news/msi-2025.jpg",
      url: "/news/msi-2025-location"
    },
    {
      id: 2,
      title: "LJL Spring Split 決勝戦レポート",
      summary: "DetonatioN FocusMe が接戦を制し、3年連続のLJLチャンピオンに。MSI出場権を獲得",
      date: "2025年3月30日",
      imageUrl: "/news/ljl-finals.jpg",
      url: "/news/ljl-spring-finals-2025"
    },
    {
      id: 3,
      title: "T1のFaker、復帰戦で圧巻のプレー",
      summary: "怪我からの復帰戦で5キル0デスの完璧なパフォーマンス。チームの勝利に大きく貢献",
      date: "2025年3月25日",
      imageUrl: "/news/faker-return.jpg",
      url: "/news/faker-comeback-match"
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
          <Link href="/news" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-full font-medium">
            すべてのニュースを見る
          </Link>
        </div>
      </div>
    </section>
  );
}