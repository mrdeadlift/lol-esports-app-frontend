import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">LoL Esports</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">サイト紹介</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">ニュース</Link></li>
              <li><Link href="/schedule" className="hover:text-secondary transition-colors">試合スケジュール</Link></li>
              <li><Link href="/results" className="hover:text-secondary transition-colors">試合結果</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">大会情報</h3>
            <ul className="space-y-2">
              <li><Link href="/tournaments/worlds" className="hover:text-secondary transition-colors">World Championship</Link></li>
              <li><Link href="/tournaments/msi" className="hover:text-secondary transition-colors">Mid-Season Invitational</Link></li>
              <li><Link href="/tournaments/ljl" className="hover:text-secondary transition-colors">LJL</Link></li>
              <li><Link href="/tournaments/lck" className="hover:text-secondary transition-colors">LCK</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">チーム・選手</h3>
            <ul className="space-y-2">
              <li><Link href="/teams" className="hover:text-secondary transition-colors">チーム一覧</Link></li>
              <li><Link href="/players" className="hover:text-secondary transition-colors">選手情報</Link></li>
              <li><Link href="/rankings" className="hover:text-secondary transition-colors">ランキング</Link></li>
              <li><Link href="/analysis" className="hover:text-secondary transition-colors">戦略分析</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">公式情報</h3>
            <ul className="space-y-2">
              <li><Link href="https://lolesports.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LoL Esports 公式</Link></li>
              <li><Link href="https://www.riotgames.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Riot Games</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">利用規約</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p> 2025 LoL Esports Fan Site. </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/lolesports" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/c/lolesports" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
              <Link href="https://www.twitch.tv/riotgames" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}