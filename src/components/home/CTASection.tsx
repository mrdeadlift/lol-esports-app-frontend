import Link from 'next/link';

export default function CTASection() {
  const editions = [
    {
      id: 1,
      name: "Standard Edition",
      price: "7,800円",
      features: [
        "基本ゲームプレイ",
        "1週間の早期アクセス",
        "限定アイテム5点"
      ],
      highlighted: false,
      url: "#"
    },
    {
      id: 2,
      name: "Ultimate Edition",
      price: "10,800円",
      features: [
        "基本ゲームプレイ",
        "3週間の早期アクセス",
        "限定アイテム10点",
        "4,600 FC Points",
        "レジェンド選手1名"
      ],
      highlighted: true,
      url: "#"
    }
  ];

  return (
    <section id="buy" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">今すぐ予約する</h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          EA SPORTS FC 25を予約して特典を手に入れよう。今予約すると発売日前から遊べる特典付き。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {editions.map((edition) => (
            <div 
              key={edition.id} 
              className={`rounded-lg p-8 ${edition.highlighted ? 'bg-accent' : 'bg-white text-gray-900'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{edition.name}</h3>
              <div className="text-3xl font-bold mb-6">{edition.price}</div>
              
              <ul className="mb-8 space-y-3">
                {edition.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={edition.url} 
                className={`block text-center py-3 px-6 rounded-full font-medium ${
                  edition.highlighted 
                    ? 'bg-white text-accent hover:bg-opacity-90' 
                    : 'bg-primary text-white hover:bg-opacity-90'
                }`}
              >
                予約する
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm opacity-80 max-w-2xl mx-auto">
            ※ 価格はすべて税込みです。プラットフォームによって価格が異なる場合があります。
            早期アクセスは対象プラットフォームのみ。詳細は販売ページでご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
} 