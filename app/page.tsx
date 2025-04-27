"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // ページ読み込み完了時のアニメーション
    setTimeout(() => {
      setIsLoaded(true)
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 初期ローディングアニメーション */}
      <div
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="relative w-24 h-24">
          <Image
            src="/CCJlogo.png"
            alt="CAR CARE JAPAN"
            width={150}
            height={150}
            className="absolute inset-0 w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* メイン画像 */}
          <Image src="/main.png" alt="Luxury Car Care" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-light tracking-wider mb-6 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <span className="block transform transition-transform duration-700 hover:scale-105">PREMIUM</span>
            <span className="block transform transition-transform duration-700 hover:scale-105">CAR CARE</span>
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 tracking-wide opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            あなたの愛車に最高級のケアを。プロフェッショナルによる洗車・コーティングサービス
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fadeIn"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <Link href="#services" className="premium-button-new group">
              <span className="relative z-10 uppercase tracking-wider text-sm font-light">サービスを見る</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
            </Link>
            <Link href="#contact" className="premium-button-outline group">
              <span className="relative z-10 uppercase tracking-wider text-sm font-light group-hover:text-black transition-colors duration-300">
                お問い合わせ
              </span>
              <span className="absolute inset-0 border border-white/50 group-hover:border-white transition-colors duration-300"></span>
              <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-transparent opacity-0 blur-md group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-fadeIn"
          style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
        >
          <Link href="#services" className="animate-bounce block">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-24 bg-black relative overflow-hidden">
        {/* 装飾的な要素 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">OUR SERVICES</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6 transform transition-transform duration-500 hover:scale-x-150"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">最高級の素材と技術で、あなたの愛車を美しく保ちます。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "プレミアム洗車",
                description: "細部までこだわった手洗いによる洗車サービス。プロの技術で愛車を美しく保ちます。",
                image: "/gleaming-black-sedan.png",
              },
              {
                title: "高級コーティング",
                description: "最高級素材を使用したコーティングで、長期間の輝きと保護を実現します。",
                image: "/sleek-black-ceramic.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-zinc-900 rounded-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <Link
                    href={
                      service.title === "プレミアム洗車"
                        ? "/washing"
                        : service.title === "高級コーティング"
                          ? "/coating"
                          : "#"
                    }
                    className="inline-flex items-center text-sm text-red-600 hover:text-red-400 transition-colors relative overflow-hidden group-hover:font-medium"
                  >
                    <span>詳細を見る</span>
                    <svg
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        {/* 装飾的な要素 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">WHY CHOOSE US</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6 transform transition-transform duration-500 hover:scale-x-150"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              カーケアジャパンは、お客様の愛車に最高級のケアを提供することをお約束します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "プロフェッショナル",
                description: "経験豊富なスタッフによる高品質なサービス",
              },
              {
                title: "最高級素材",
                description: "世界トップクラスの素材と製品のみを使用",
              },
              {
                title: "細部へのこだわり",
                description: "見えない部分まで徹底的にケア",
              },
              {
                title: "満足保証",
                description: "お客様満足度98%の実績",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/5 bg-zinc-900/50 backdrop-blur-sm"
              >
                <div className="text-red-600 mb-4 text-xl font-light flex items-center">
                  <span className="mr-3 opacity-60">{String(index + 1).padStart(2, "0")}</span>
                  <div className="flex-grow h-px bg-gradient-to-r from-red-600/80 to-transparent"></div>
                </div>
                <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
        {/* 装飾的な要素 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4">CONTACT US</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6 transform transition-transform duration-500 hover:scale-x-150"></div>
            <p className="text-gray-400 mb-8">お問い合わせやご予約は、以下のボタンからお気軽にどうぞ。</p>
            <Link href="/contact" className="premium-button-new group">
              <span className="relative z-10 uppercase tracking-wider text-sm font-light">お問い合わせ</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* LINE誘導セクション */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* 装飾的な要素 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 p-8 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 bg-zinc-900/30 backdrop-blur-sm">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-4 luxury-heading">OFFICIAL LINE</h2>
                <div className="w-16 h-px bg-red-600 mx-auto md:mx-0 mb-6"></div>
                <p className="text-gray-400 mb-8">
                  公式LINEアカウントでは、最新のキャンペーン情報やお得な特典をいち早くお届けします。
                  また、LINEからのご予約・お問い合わせも承っております。
                </p>
                <a
                  href="https://lin.ee/bmvruKl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button-new group inline-flex items-center"
                >
                  <span className="relative z-10 uppercase tracking-wider text-sm font-light">友だち追加</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#06C755] to-[#04A348] transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                  <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
