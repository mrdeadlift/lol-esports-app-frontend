import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoL Esports Japan - 最新の試合結果、ニュース、スケジュール",
  description: "リーグ・オブ・レジェンドの最新eスポーツ情報をお届け。試合結果、チーム情報、大会スケジュール、選手インタビューなど、LoLファン必見のコンテンツが満載。",
  keywords: "LoL, リーグオブレジェンド, eスポーツ, LJL, プロゲーマー, 大会情報, MSI, Worlds, T1, Faker",
  openGraph: {
    title: "LoL Esports Japan - 最新の試合結果、ニュース、スケジュール",
    description: "リーグ・オブ・レジェンドの最新eスポーツ情報をお届け。試合結果、チーム情報、大会スケジュール、選手インタビューなど、LoLファン必見のコンテンツが満載。",
    url: "https://lol-esports.jp",
    siteName: "LoL Esports Japan",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoL Esports Japan - 最新の試合結果、ニュース、スケジュール",
    description: "リーグ・オブ・レジェンドの最新eスポーツ情報をお届け。試合結果、チーム情報、大会スケジュール、選手インタビューなど、LoLファン必見のコンテンツが満載。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
