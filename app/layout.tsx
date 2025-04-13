import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CAR CARE JAPAN | プレミアムカーケアサービス',
  description:
    '最高級のカーケアサービスを提供するカーケアジャパン。洗車、コーティング、インテリアケアなど、あなたの愛車に最高のケアを。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
