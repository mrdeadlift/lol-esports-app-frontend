import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "FC INTELLIGENCE",
      description: "全く新しいフットボールエンジンでプレイする。FC INTELLIGENCEはプレイヤーの動き、ポジショニング、戦術的決断に革命をもたらします。",
      imageUrl: "/features/intelligence.jpg"
    },
    {
      id: 2,
      title: "ULTIMATE TEAM",
      description: "夢のチームを作り上げよう。新しい選手、アイテム、報酬システムでULTIMATE TEAMを体験しましょう。",
      imageUrl: "/features/ultimate-team.jpg"
    },
    {
      id: 3,
      title: "CAREER MODE",
      description: "監督として、または選手として、サッカー界の頂点を目指しましょう。新しいキャリアの道が待っています。",
      imageUrl: "/features/career.jpg"
    },
    {
      id: 4,
      title: "CLUBS",
      description: "友達と一緒にプレイし、最高のクラブチームを作りましょう。新しいカスタマイズとプログレッションシステムを体験できます。",
      imageUrl: "/features/clubs.jpg"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">ゲームの特徴</h2>
        
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
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 