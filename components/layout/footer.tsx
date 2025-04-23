import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/CCJlogo.png"
                alt="CAR CARE JAPAN"
                width={150}
                height={150}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              最高級のカーケアサービスを提供する、カーケアジャパン。あなたの愛車のコンシェルジュ。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 relative inline-block">
              サービス
              <span className="absolute -bottom-1 left-0 w-8 h-px bg-red-600"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center"
                >
                  <span className="w-0 h-px bg-red-600 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/washing"
                  className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center"
                >
                  <span className="w-0 h-px bg-red-600 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  プレミアム洗車
                </Link>
              </li>
              <li>
                <Link
                  href="/coating"
                  className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center"
                >
                  <span className="w-0 h-px bg-red-600 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  コーティング
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 relative inline-block">
              会社情報
              <span className="absolute -bottom-1 left-0 w-8 h-px bg-red-600"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/company"
                  className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center"
                >
                  <span className="w-0 h-px bg-red-600 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                  会社概要
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 relative inline-block">
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-8 h-px bg-red-600"></span>
            </h3>
            <address className="not-italic text-gray-400 text-sm space-y-3">
              <p>〒123-4567</p>
              <p>東京都渋谷区○○町1-2-3</p>
              <p>
                TEL:{" "}
                <a href="tel:0312345678" className="hover:text-white transition-colors">
                  03-1234-5678
                </a>
              </p>
              <p>営業時間: 10:00〜19:00</p>
              <p>定休日: 水曜日</p>
              <Link href="/contact" className="inline-flex items-center text-white mt-4 group">
                <span className="relative z-10 text-sm uppercase tracking-wider group-hover:text-red-600 transition-colors">
                  お問い合わせをする
                </span>
                <svg
                  className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CAR CARE JAPAN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
