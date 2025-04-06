import Link from 'next/link';

type Match = {
  id: number;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  date: string;
  time: string;
  tournament: string;
  isLive: boolean;
};

export default function ScheduleSection() {
  // サンプルデータ - 実際の実装では API から取得することを想定
  const upcomingMatches: Match[] = [
    {
      id: 1,
      team1: {
        name: 'T1',
        logo: '/teams/t1.png'
      },
      team2: {
        name: 'Gen.G',
        logo: '/teams/geng.png'
      },
      date: '2025年4月6日',
      time: '19:00',
      tournament: 'LCK Spring Split',
      isLive: false
    },
    {
      id: 2,
      team1: {
        name: 'DRX',
        logo: '/teams/drx.png'
      },
      team2: {
        name: 'DWG KIA',
        logo: '/teams/dwg.png'
      },
      date: '2025年4月7日',
      time: '15:00',
      tournament: 'LCK Spring Split',
      isLive: false
    },
    {
      id: 3,
      team1: {
        name: 'DetonatioN FocusMe',
        logo: '/teams/dfm.png'
      },
      team2: {
        name: 'Sengoku Gaming',
        logo: '/teams/sengoku.png'
      },
      date: '2025年4月8日',
      time: '18:00',
      tournament: 'LJL Summer Split',
      isLive: false
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">試合スケジュール</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-4 bg-primary text-white font-bold">今後の注目試合</div>
            
            <div className="divide-y divide-gray-200">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {match.isLive && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></span>
                          LIVE
                        </span>
                      )}
                      <span className="text-sm text-gray-500">{match.tournament}</span>
                    </div>
                    <span className="text-sm text-gray-500">{match.date} {match.time}</span>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-7 items-center">
                    <div className="col-span-3 flex items-center justify-end">
                      <span className="font-medium text-right mr-2">{match.team1.name}</span>
                      <div className="w-8 h-8 relative bg-gray-200 rounded-full">
                        {/* 実際の実装時にはチームロゴを表示 */}
                        <span className="absolute inset-0 flex items-center justify-center text-xs">ロゴ</span>
                      </div>
                    </div>
                    
                    <div className="col-span-1 text-center font-bold">VS</div>
                    
                    <div className="col-span-3 flex items-center">
                      <div className="w-8 h-8 relative bg-gray-200 rounded-full">
                        {/* 実際の実装時にはチームロゴを表示 */}
                        <span className="absolute inset-0 flex items-center justify-center text-xs">ロゴ</span>
                      </div>
                      <span className="font-medium ml-2">{match.team2.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/schedule" className="inline-block bg-primary hover:bg-primary-dark text-white transition-colors px-6 py-3 rounded-full font-medium">
              すべての試合スケジュールを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
