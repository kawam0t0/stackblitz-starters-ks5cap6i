import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="/gleaming-black-sedan.png" alt="Our Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">OUR SERVICES</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* サービス紹介 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">PREMIUM CAR CARE</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              カーケアジャパンでは、お客様の愛車に最高級のケアを提供しています。
              プロフェッショナルによる丁寧な施工で、あなたの車を美しく保ちます。
            </p>
          </div>

          <div className="space-y-24">
            {/* サービス1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="/luxury-car-detail.png"
                    alt="Premium Car Wash"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xl font-light">01</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-light mb-4 luxury-heading">プレミアム洗車</h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <p className="text-gray-400 mb-6">
                  最高級の洗車サービスを提供します。手洗いによる丁寧な洗車で、ボディの隅々まで美しく仕上げます。
                  特殊な洗剤と道具を使用し、塗装を傷つけることなく汚れを落とします。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="luxury-list-item">手洗いによる丁寧な洗車</li>
                  <li className="luxury-list-item">特殊洗剤による汚れ落とし</li>
                  <li className="luxury-list-item">ホイールとタイヤの専用クリーニング</li>
                  <li className="luxury-list-item">ガラスの美しい仕上げ</li>
                </ul>
                <Link href="/contact" className="luxury-button">
                  <span className="relative z-10">予約する</span>
                </Link>
              </div>
            </div>

            {/* サービス2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src="/black-car-ceramic-coating.png"
                    alt="Luxury Car Coating"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xl font-light">02</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-light mb-4 luxury-heading">高級コーティング</h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <p className="text-gray-400 mb-6">
                  最高級のコーティング剤を使用し、長期間の輝きと保護を実現します。
                  紫外線や雨、汚れから塗装を守り、美しい光沢を長期間維持します。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="luxury-list-item">ガラスコーティング</li>
                  <li className="luxury-list-item">セラミックコーティング</li>
                  <li className="luxury-list-item">ポリマーコーティング</li>
                  <li className="luxury-list-item">長期保証付きプレミアムコーティング</li>
                </ul>
                <Link href="/contact" className="luxury-button">
                  <span className="relative z-10">予約する</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 luxury-heading">PRICE LIST</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto luxury-subheading">
              お客様の愛車に最適なプランをご用意しています。
              車種やサイズによって料金が異なりますので、詳細はお問い合わせください。
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-light mb-4 luxury-heading">コーティング</h3>
            <div className="w-12 h-px bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* プラン1 */}
            <div className="border border-zinc-800 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
              <h3 className="text-xl font-light mb-2 luxury-heading">STANDARD</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-4xl font-light mb-6">
                ¥15,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">手洗い洗車</li>
                <li className="luxury-list-item">ホイールクリーニング</li>
                <li className="luxury-list-item">ガラスクリーニング</li>
                <li className="luxury-list-item">簡易コーティング（1ヶ月保証）</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>

            {/* プラン2 */}
            <div className="border border-red-600 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/20 relative bg-zinc-900/80">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs uppercase tracking-wider">
                Popular
              </div>
              <h3 className="text-xl font-light mb-2 luxury-heading">PREMIUM</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-4xl font-light mb-6">
                ¥30,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">手洗い洗車（ディテール）</li>
                <li className="luxury-list-item">ホイール徹底クリーニング</li>
                <li className="luxury-list-item">ガラスコーティング（6ヶ月保証）</li>
                <li className="luxury-list-item">簡易内装クリーニング</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>

            {/* プラン3 */}
            <div className="border border-zinc-800 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
              <h3 className="text-xl font-light mb-2 luxury-heading">LUXURY</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-4xl font-light mb-6">
                ¥50,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">フルディテーリング</li>
                <li className="luxury-list-item">セラミックコーティング（1年保証）</li>
                <li className="luxury-list-item">フル内装クリーニング</li>
                <li className="luxury-list-item">エンジンルームクリーニング</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>
          </div>

          <div className="text-center mb-8 mt-16">
            <h3 className="text-2xl font-light mb-4 luxury-heading">手洗い洗車</h3>
            <div className="w-12 h-px bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* コンパクト */}
            <div className="border border-zinc-800 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
              <h3 className="text-xl font-light mb-2 luxury-heading">COMPACT</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-sm text-gray-400 mb-4">コンパクトカー・軽自動車</p>
              <p className="text-4xl font-light mb-6">
                ¥6,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">外装手洗い洗車</li>
                <li className="luxury-list-item">ホイールクリーニング</li>
                <li className="luxury-list-item">ガラスクリーニング</li>
                <li className="luxury-list-item">簡易内装清掃</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>

            {/* セダン・ミドルサイズ */}
            <div className="border border-red-600 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/20 relative bg-zinc-900/80">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs uppercase tracking-wider">
                Popular
              </div>
              <h3 className="text-xl font-light mb-2 luxury-heading">SEDAN</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-sm text-gray-400 mb-4">セダン・ミドルサイズSUV</p>
              <p className="text-4xl font-light mb-6">
                ¥8,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">外装手洗い洗車</li>
                <li className="luxury-list-item">ホイールクリーニング</li>
                <li className="luxury-list-item">ガラスクリーニング</li>
                <li className="luxury-list-item">内装バキューム清掃</li>
                <li className="luxury-list-item">ダッシュボード清掃</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>

            {/* ラージサイズ */}
            <div className="border border-zinc-800 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
              <h3 className="text-xl font-light mb-2 luxury-heading">LARGE</h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-sm text-gray-400 mb-4">大型SUV・ミニバン</p>
              <p className="text-4xl font-light mb-6">
                ¥10,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">外装手洗い洗車</li>
                <li className="luxury-list-item">ホイールクリーニング</li>
                <li className="luxury-list-item">ガラスクリーニング</li>
                <li className="luxury-list-item">内装フル清掃</li>
                <li className="luxury-list-item">シート清掃</li>
                <li className="luxury-list-item">トランク清掃</li>
              </ul>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
