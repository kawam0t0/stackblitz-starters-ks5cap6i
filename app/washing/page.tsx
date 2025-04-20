import Image from 'next/image';
import Link from 'next/link';

export default function WashingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <Image
          src="/sleek-black-ceramic.png"
          alt="Premium Washing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">
              PREMIUM WASHING
            </h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* 手洗い洗車紹介 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">
              HANDWASH EXCELLENCE
            </h2>
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
                  src="/foamy-luxury-wash.png"
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
              <h3 className="text-2xl font-light mb-4 luxury-heading">
                プレミアム手洗い洗車
              </h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                自動洗車機では落とせない汚れも、熟練のスタッフによる手洗いで丁寧に除去します。
                高品質な洗剤と専用の道具を使用し、塗装を傷つけることなく美しく仕上げます。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">ボディの汚れを丁寧に除去</li>
                <li className="luxury-list-item">
                  ホイールとタイヤの専用クリーニング
                </li>
                <li className="luxury-list-item">ガラス面の美しい仕上げ</li>
                <li className="luxury-list-item">
                  ドアノブやモール部分の細部清掃
                </li>
              </ul>
              <Link href="/contact" className="luxury-button">
                <span className="relative z-10">予約する</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 luxury-heading">
              PRICE LIST
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto luxury-subheading">
              お客様の愛車のサイズに合わせた料金プランをご用意しています。
              すべてのプランに高品質な洗剤と専用道具を使用した丁寧な手洗いが含まれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* コンパクト */}
            <div className="border border-zinc-800 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
              <h3 className="text-xl font-light mb-2 luxury-heading">
                COMPACT
              </h3>
              <div className="w-12 h-px bg-red-600 mb-4"></div>
              <p className="text-sm text-gray-400 mb-4">
                コンパクトカー・軽自動車
              </p>
              <p className="text-4xl font-light mb-6">
                ¥6,000<span className="text-sm text-gray-400">〜</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="luxury-list-item">外装手洗い洗車</li>
                <li className="luxury-list-item">ホイールクリーニング</li>
                <li className="luxury-list-item">ガラスクリーニング</li>
                <li className="luxury-list-item">簡易内装清掃</li>
              </ul>
              <Link
                href="/contact"
                className="luxury-button w-full flex justify-center"
              >
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
              <p className="text-sm text-gray-400 mb-4">
                セダン・ミドルサイズSUV
              </p>
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
              <Link
                href="/contact"
                className="luxury-button w-full flex justify-center"
              >
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
              <Link
                href="/contact"
                className="luxury-button w-full flex justify-center"
              >
                <span className="relative z-10">予約する</span>
              </Link>
            </div>
          </div>

          {/* オプション */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-light mb-6 text-center luxury-heading">
              OPTIONAL SERVICES
            </h3>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <div className="border border-zinc-800 hover:border-red-600/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-2/3 p-4">鉄粉除去</div>
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light text-right">
                  +¥3,000
                </div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-2/3 p-4">
                  ウォータースポット除去
                </div>
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light text-right">
                  +¥3,000
                </div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-2/3 p-4">レザーシートケア</div>
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light text-right">
                  +¥4,000
                </div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-2/3 p-4">
                  エンジンルームクリーニング
                </div>
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light text-right">
                  +¥5,000
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-4">
                  簡易コーティング（1ヶ月持続）
                </div>
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light text-right">
                  +¥5,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 洗車プロセス */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">
                OUR WASHING PROCESS
              </h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 luxury-subheading">
                カーケアジャパンの手洗い洗車は、細部までこだわった丁寧な施工で
                あなたの愛車を美しく仕上げます。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    事前チェック
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    下洗い
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    シャンプー洗車
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    ホイール・タイヤ洗浄
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    すすぎ・水切り
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    ガラス清掃
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    内装清掃
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    仕上げ・最終チェック
                  </h3>
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
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">
              CONTACT US
            </h2>
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
  );
}
