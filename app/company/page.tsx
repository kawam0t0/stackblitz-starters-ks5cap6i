import Link from "next/link"
import Image from "next/image"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="/company.avif" alt="Company" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">COMPANY</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* 会社概要 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">ABOUT US</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              カーケアジャパンは、最高級のカーケアサービスを提供する専門店です。
              お客様の愛車を美しく保つために、最高の技術と素材を使用しています。
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2 bg-gradient-to-br from-zinc-900 to-black aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <Image src="/gallery-2.png" alt="Our Story" fill className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/70"></div>
              <div className="text-red-600 text-5xl relative z-10">CAR CARE</div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-light mb-6 luxury-heading">OUR STORY</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                カーケアジャパンは、2010年に創業者の岡本直也によって設立されました。
                自動車整備士としての経験を持つ山田は、日本の自動車オーナーに最高級のカーケアサービスを提供したいという
                情熱から、このビジネスを始めました。
              </p>
              <p className="text-gray-400 mb-6">
                創業以来、私たちは常に最高の品質とサービスを追求し、多くのお客様から信頼を得てきました。
                現在では、東京を中心に複数の店舗を展開し、多くの高級車オーナーから支持されています。
              </p>
              <p className="text-gray-400">
                私たちの使命は、お客様の愛車を美しく保ち、長く乗り続けていただくことです。
                そのために、最新の技術と最高級の素材を使用し、一台一台丁寧に施工しています。
              </p>
            </div>
          </div>

          {/* 会社情報テーブル */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-light mb-6 text-center luxury-heading">COMPANY INFORMATION</h3>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <div className="border border-zinc-800 hover:border-red-600/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">会社名</div>
                <div className="w-full md:w-2/3 p-4">株式会社CAR CARE JAPAN</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">設立</div>
                <div className="w-full md:w-2/3 p-4">2010年4月</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">代表取締役</div>
                <div className="w-full md:w-2/3 p-4">岡本　直也</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">資本金</div>
                <div className="w-full md:w-2/3 p-4">1,000万円</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">所在地</div>
                <div className="w-full md:w-2/3 p-4">〒157-0072 東京都世田谷区祖師谷6-19−20</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">電話番号</div>
                <div className="w-full md:w-2/3 p-4">03-6411-2959</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">営業時間</div>
                <div className="w-full md:w-2/3 p-4">10:00〜19:00（定休日：土曜日/日曜日/祝日）</div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">事業内容</div>
                <div className="w-full md:w-2/3 p-4">
                  <ul className="space-y-2">
                    <li className="luxury-list-item">自動車洗車・コーティングサービス</li>
                    <li className="luxury-list-item">自動車内装クリーニング</li>
                    <li className="luxury-list-item">カーケア製品の販売</li>
                    <li className="luxury-list-item">カーケアコンサルティング</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 luxury-heading">ACCESS</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto luxury-subheading">
              カーケアジャパン本社へのアクセス情報です。 ご来店の際は、事前にご予約いただくことをおすすめします。
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2 h-[400px] bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-red-600/30 transition-colors duration-300 relative overflow-hidden">
              <Image src="/images/company-map.jpg" alt="Map" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="text-center relative z-10">
                <p className="text-gray-200 mb-4">Google Mapが表示されます</p>
                <Link href="#" className="luxury-button">
                  <span className="relative z-10">Google Mapで見る</span>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-light mb-6 luxury-heading">LOCATION</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <div className="space-y-4 text-gray-400">
                <p>〒157-0072</p>
                <p>東京都世田谷区祖師谷６-19-20</p>
                <p>TEL: 03-6411-2959</p>
                <p>Email: info@carcarejapan.com</p>
              </div>

              <h3 className="text-2xl font-light mt-8 mb-6 luxury-heading">BUSINESS HOURS</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <div className="space-y-4 text-gray-400">
                <p>営業時間: 10:00〜19:00</p>
                <p>定休日: 土曜日/日曜日/祝日</p>
                <p>※ 年末年始・GW・お盆期間は営業時間が変更になる場合があります</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
