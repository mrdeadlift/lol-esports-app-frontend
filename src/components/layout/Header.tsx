import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/fc25-logo.svg"
                alt="EA SPORTS FC 25"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition-colors">
              ホーム
            </Link>
            <Link href="#features" className="hover:text-secondary transition-colors">
              ゲーム情報
            </Link>
            <Link href="#gameplay" className="hover:text-secondary transition-colors">
              ゲームプレイ
            </Link>
            <Link href="#news" className="hover:text-secondary transition-colors">
              ニュース
            </Link>
            <Link href="#community" className="hover:text-secondary transition-colors">
              コミュニティ
            </Link>
          </nav>

          {/* Buy Button */}
          <div className="hidden md:flex">
            <Link href="#buy" className="bg-accent hover:bg-opacity-80 transition-colors px-6 py-2 rounded-full font-medium">
              今すぐ購入
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-dark py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-secondary transition-colors px-4">
                ホーム
              </Link>
              <Link href="#features" className="hover:text-secondary transition-colors px-4">
                ゲーム情報
              </Link>
              <Link href="#gameplay" className="hover:text-secondary transition-colors px-4">
                ゲームプレイ
              </Link>
              <Link href="#news" className="hover:text-secondary transition-colors px-4">
                ニュース
              </Link>
              <Link href="#community" className="hover:text-secondary transition-colors px-4">
                コミュニティ
              </Link>
              <Link href="#buy" className="bg-accent hover:bg-opacity-80 transition-colors px-6 py-2 rounded-full font-medium mx-4">
                今すぐ購入
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 