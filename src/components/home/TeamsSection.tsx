import Link from 'next/link';

type Team = {
  id: number;
  name: string;
  logo: string;
  region: string;
  wins: number;
  losses: number;
};

export default function TeamsSection() {
  // サンプルデータ - 実際の実装では API から取得することを想定
  const teams: Team[] = [
    {
      id: 1,
      name: 'T1',
      logo: '/teams/t1.png',
      region: 'LCK',
      wins: 16,
      losses: 2
    },
    {
      id: 2,
      name: 'Gen.G',
      logo: '/teams/geng.png',
      region: 'LCK',
      wins: 15,
      losses: 3
    },
    {
      id: 3,
      name: 'JD Gaming',
      logo: '/teams/jdg.png',
      region: 'LPL',
      wins: 14,
      losses: 4
    },
    {
      id: 4,
      name: 'DetonatioN FocusMe',
      logo: '/teams/dfm.png',
      region: 'LJL',
      wins: 12,
      losses: 0
    },
    {
      id: 5,
      name: 'G2 Esports',
      logo: '/teams/g2.png',
      region: 'LEC',
      wins: 13,
      losses: 5
    },
    {
      id: 6,
      name: 'Cloud9',
      logo: '/teams/c9.png',
      region: 'LCS',
      wins: 12,
      losses: 6
    }
  ];

  return (
    <section id="teams" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">トップチーム</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div key={team.id} className="bg-gray-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    {/* 実際の実装時にはチームロゴを表示 */}
                    <span className="text-gray-500 text-xs">ロゴ</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <span className="text-sm text-gray-500">{team.region}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium">{team.wins}勝 {team.losses}敗</span>
                    <span className="text-gray-500 ml-2">({Math.round(team.wins / (team.wins + team.losses) * 100)}%)</span>
                  </div>
                  <Link href={`/teams/${team.id}`} className="text-primary hover:underline text-sm font-medium">
                    詳細を見る &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/teams" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-full font-medium">
            すべてのチームを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
