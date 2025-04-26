import Image from "next/image"
import Link from "next/link"

export default function WashingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/foamy-luxury-wash.png"
          alt="Premium Washing"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-black/50 to-zinc-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">PREMIUM WASHING</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* 手洗い洗車紹介 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">HANDWASH EXCELLENCE</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              カーケアジャパンの手洗い洗車は、一台一台丁寧に施工する最高級のサービスです。
              熟練のスタッフが細部までこだわり、あなたの愛車を美しく仕上げます。
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/luxury-car-detail.png"
                  alt="Premium Hand Washing"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-red-600 flex items-center justify-center">
                <span className="text-white text-xl font-light">01</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-light mb-4 luxury-heading">プレミアム手洗い洗車</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                自動洗車機では落とせない汚れも、熟練のスタッフによる手洗いで丁寧に除去します。
                高品質な洗剤と専用の道具を使用し、塗装を傷つけることなく美しく仕上げます。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">ボディの汚れを丁寧に除去</li>
                <li className="luxury-list-item">ホイールとタイヤの専用クリーニング</li>
                <li className="luxury-list-item">ガラス面の美しい仕上げ</li>
                <li className="luxury-list-item">ドアノブやモール部分の細部清掃</li>
              </ul>
              <Link href="/contact" className="luxury-button">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-20 bg-zinc-900 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/pricing-bg.jpg" alt="Pricing Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-black/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 luxury-heading">PRICE LIST</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto luxury-subheading">
              お客様の愛車のサイズに合わせた料金プランをご用意しています。
            </p>
            <p className="text-gray-400 mt-4">
              ※掲載している料金は会員様用です。
              <br />
              ※単発の洗車も行っております。価格についてはお問い合わせください。
            </p>
          </div>

          {/* プレミアムプラン */}
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

          {/* ロイヤルプラン */}
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

      {/* 洗車プロセス */}
      <section className="py-20 bg-black luxury-section relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-2/3 opacity-20 pointer-events-none">
          <Image src="/washing-process-side.jpg" alt="Washing Process" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">OUR WASHING PROCESS</h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 luxury-subheading">
                カーケアジャパンの手洗い洗車は、細部までこだわった丁寧な施工で あなたの愛車を美しく仕上げます。
              </p>
            </div>

            <div className="space-y-12">
              {/* ステップ1 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">01</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">事前チェック</h3>
                  <p className="text-gray-400">
                    お客様の車の状態を確認し、特に気になる部分や重点的に洗車してほしい箇所をヒアリングします。
                    車種やサイズ、汚れの状態に合わせた最適な洗車プランをご提案します。
                  </p>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">02</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">下洗い</h3>
                  <p className="text-gray-400">
                    高圧洗浄機を使用して、ボディに付着した大きな汚れや砂、ほこりを洗い流します。
                    特に下回りやホイールアーチなど、汚れが溜まりやすい部分を重点的に洗浄します。
                  </p>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">03</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">シャンプー洗車</h3>
                  <p className="text-gray-400">
                    高品質なカーシャンプーと専用のマイクロファイバーミットを使用して、ボディを丁寧に手洗いします。
                    上部から下部へと順番に洗い、汚れを効率的に落としていきます。
                    塗装を傷つけないよう、常に十分な潤滑を保ちながら洗車します。
                  </p>
                </div>
              </div>

              {/* ステップ4 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">04</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">ホイール・タイヤ洗浄</h3>
                  <p className="text-gray-400">
                    専用のホイールクリーナーとブラシを使用して、ホイールとタイヤを徹底的に洗浄します。
                    ブレーキダストや道路の汚れをしっかりと落とし、ホイールの輝きを取り戻します。
                  </p>
                </div>
              </div>

              {/* ステップ5 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">05</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">すすぎ・水切り</h3>
                  <p className="text-gray-400">
                    きれいな水で丁寧にすすぎ、シャンプーや汚れを完全に洗い流します。
                    その後、専用のウォータブレードと高品質なマイクロファイバータオルで水分を丁寧に拭き取ります。
                    水滴の跡が残らないよう細心の注意を払います。
                  </p>
                </div>
              </div>

              {/* ステップ6 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">06</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">ガラス清掃</h3>
                  <p className="text-gray-400">
                    専用のガラスクリーナーを使用して、すべてのウィンドウを内側と外側から丁寧に清掃します。
                    視界を妨げる汚れや水垢を除去し、クリアな視界を確保します。
                  </p>
                </div>
              </div>

              {/* ステップ7 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">07</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">内装清掃</h3>
                  <p className="text-gray-400">
                    選択されたプランに応じて、内装の清掃を行います。バキュームでの吸引清掃、ダッシュボードや内装パネルの拭き上げ、
                    シートの清掃など、車内を清潔で快適な空間に仕上げます。
                  </p>
                </div>
              </div>

              {/* ステップ8 */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center">
                    <span className="text-2xl font-light">08</span>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-light mb-4 luxury-heading">仕上げ・最終チェック</h3>
                  <p className="text-gray-400">
                    最後に全体を丁寧に拭き上げ、光沢を出します。オプションで簡易コーティングを施すこともできます。
                    細部まで入念にチェックし、完璧な仕上がりを確認してからお客様にお引き渡しします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/contact-section-bg.jpg" alt="Contact Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-black/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">CONTACT US</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8 luxury-subheading">
              手洗い洗車についてのご質問やご予約は、お気軽にお問い合わせください。
              お客様の愛車に最適なプランをご提案いたします。
            </p>
            <Link href="/contact" className="luxury-button">
              <span className="relative z-10">お問い合わせ</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
