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
                    src="/luxury-car-ceramic-coating.png"
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
              お客様の愛車に最適なプランをご用意しています。 車種やサイズによって料金が異なります。
            </p>
            <p className="text-gray-400 mt-4">
              ※掲載している料金は会員様用です。
              <br />
              ※単発の洗車も行っております。価格についてはお問い合わせください。
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-light mb-4 luxury-heading">コーティング</h3>
            <div className="w-12 h-px bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* プラチナコーティング */}
            <div className="luxury-card p-8 hover:border-red-600">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-xl font-light">01</span>
              </div>
              <h3 className="text-xl font-light mb-4 luxury-heading">プラチナコーティング</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">塗装面ダメージ(小キズ・シミ)研磨修復/高耐久性ガラスコート</p>
              <div className="mb-6">
                <h4 className="text-sm font-light mb-2">会員価格</h4>
                <p className="text-gray-400 mb-2">T 140,000円　S 160,000円　P 180,000円</p>
                <h4 className="text-sm font-light mb-2">一般価格</h4>
                <p className="text-gray-400 mb-2">T 160,000円　S 180,000円　P 200,000円</p>
                <h4 className="text-sm font-light mb-2">施工時間</h4>
                <p className="text-gray-400">2～4日</p>
              </div>
              <Link href="/coating" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">詳細を見る</span>
              </Link>
            </div>

            {/* プレミアムコーティング */}
            <div className="luxury-card p-8 border-red-600">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-xl font-light">02</span>
              </div>
              <h3 className="text-xl font-light mb-4 luxury-heading">プレミアムコーティング</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">塗装 研磨復元/高保護性ガラスコート</p>
              <div className="mb-6">
                <h4 className="text-sm font-light mb-2">会員価格</h4>
                <p className="text-gray-400 mb-2">T 90,000円　S 110,000円　P 130,000円</p>
                <h4 className="text-sm font-light mb-2">一般価格</h4>
                <p className="text-gray-400 mb-2">T 100,000円　S 120,000円　P 140,000円</p>
                <h4 className="text-sm font-light mb-2">施工時間</h4>
                <p className="text-gray-400">2～4日</p>
              </div>
              <Link href="/coating" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">詳細を見る</span>
              </Link>
            </div>
          </div>

          <div className="text-center mb-8 mt-16">
            <h3 className="text-2xl font-light mb-4 luxury-heading">手洗い洗車</h3>
            <div className="w-12 h-px bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-light mb-6 text-center luxury-heading">プレミアムプラン</h3>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-center text-gray-400 mb-8">
              ワックス洗車 or コーティング用メンテナンス洗車（艶出し撥水仕上げ）
            </p>

            <div className="overflow-x-auto">
              <table className="w-full luxury-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>月2回</th>
                    <th>月3回</th>
                    <th>月4回</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pクラス（税込）</td>
                    <td>20,000円</td>
                    <td>28,500円</td>
                    <td>36,000円</td>
                  </tr>
                  <tr>
                    <td>Sクラス（税込）</td>
                    <td>18,000円</td>
                    <td>25,500円</td>
                    <td>33,000円</td>
                  </tr>
                  <tr>
                    <td>Tクラス（税込）</td>
                    <td>16,000円</td>
                    <td>22,500円</td>
                    <td>29,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-light mb-6 text-center luxury-heading">ロイヤルプラン</h3>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-center text-gray-400 mb-8">
              手洗い洗車 グロスコート（ポリマーコート仕上げ） ＋ ルームクリーニング
            </p>

            <div className="overflow-x-auto">
              <table className="w-full luxury-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>月1回</th>
                    <th>月2回</th>
                    <th>月3回</th>
                    <th>月4回</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pクラス（税込）</td>
                    <td>29,000円</td>
                    <td>52,500円</td>
                    <td>69,300円</td>
                    <td>84,000円</td>
                  </tr>
                  <tr>
                    <td>Sクラス（税込）</td>
                    <td>26,000円</td>
                    <td>47,500円</td>
                    <td>62,700円</td>
                    <td>76,000円</td>
                  </tr>
                  <tr>
                    <td>Tクラス（税込）</td>
                    <td>23,000円</td>
                    <td>42,500円</td>
                    <td>56,100円</td>
                    <td>68,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 車種サイズ説明 */}
          <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-light mb-6 text-center luxury-heading">車種サイズについて</h3>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-center text-gray-400 mb-8">料金表に記載のT、S、Pは車種のサイズを表しています。</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600">
                <h3 className="text-xl font-light mb-2 luxury-heading">T</h3>
                <div className="w-8 h-px bg-red-600 mx-auto mb-4"></div>
                <p className="text-gray-400">軽自動車、コンパクトカーなど</p>
              </div>

              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600">
                <h3 className="text-xl font-light mb-2 luxury-heading">S</h3>
                <div className="w-8 h-px bg-red-600 mx-auto mb-4"></div>
                <p className="text-gray-400">セダン、ミドルサイズSUVなど</p>
              </div>

              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600">
                <h3 className="text-xl font-light mb-2 luxury-heading">P</h3>
                <div className="w-8 h-px bg-red-600 mx-auto mb-4"></div>
                <p className="text-gray-400">大型SUV、ミニバン、高級車など</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-8 text-center">
              ※ 表示価格はすべて税込み価格です。
              <br />※ 車種や車の状態によって追加料金が発生する場合があります。
            </p>

            {/* 車種サイズ表へのリンク */}
            <div className="text-center">
              <Link href="/coating/size-chart" className="luxury-button inline-flex items-center">
                <span className="relative z-10">車種別サイズ表を見る</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
