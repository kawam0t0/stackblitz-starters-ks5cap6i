import Image from "next/image"
import Link from "next/link"

export default function CoatingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="/sleek-onyx-shine.png" alt="Premium Coating" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">PREMIUM COATING</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* コーティング紹介 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">極上のコーティングをご存知ですか？</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              適切な塗装状態の見極め（劣化状態、汚れの状態、凹凸）、
              デリケートな汚れ除去、塗装面の平滑化、最高の溶剤で、最高の施工をする。
            </p>
            <p className="text-gray-400 luxury-subheading mt-4">
              この道25年の「技を持った匠」が
              <br />
              <span className="text-red-600 font-medium">最上級の溶剤と</span>
              <br />
              <span className="text-red-600 font-medium">そして、卓越の技をこの価格で</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* コーティング種類1 */}
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
              <p className="text-gray-400 mb-6">
                最高の磨き技術×最高の溶剤×最高の丁寧さで仕上げた、最高峰のガラスコーティング。今まで、各高級輸入車、スーパーカーなどの施工実績を誇る匠が、日本最高峰のコーティングをご提供します。
                持続性、耐候性、強度などにおいても最高峰の溶剤を惜しみなく使い、施工します。
              </p>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">お問い合わせ</span>
              </Link>
            </div>

            {/* コーティング種類2 */}
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
              <p className="text-gray-400 mb-6">
                プラチナコーティングの技はそのまま、<br />溶剤の一部を変更し施工します。<br />
                上級のガラスコーティングを実感したい<br />お客様に最適です。
              </p>
              <Link href="/contact" className="luxury-button w-full flex justify-center">
                <span className="relative z-10">お問い合わせ</span>
              </Link>
            </div>
          </div>

          {/* お問い合わせボタン */}
          <div className="text-center mb-20">
            <Link href="/contact" className="luxury-button inline-block px-12 py-4">
              <span className="relative z-10">コーティングのご相談はこちら</span>
            </Link>
          </div>

          {/* メンテナンスメニュー */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">メンテナンスメニュー</h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            </div>

            <div className="luxury-card p-8 mb-16">
              <h3 className="text-xl font-light mb-4 luxury-heading">メンテナンス洗車</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <div className="mb-6">
                <h4 className="text-sm font-light mb-2">会員価格</h4>
                <p className="text-gray-400 mb-2">T 9,000円　S 10,000円　P 11,000円</p>
                <h4 className="text-sm font-light mb-2">一般価格</h4>
                <p className="text-gray-400 mb-2">T 10,000円　S 11,000円　P 12,000円</p>
                <h4 className="text-sm font-light mb-2">施工時間</h4>
                <p className="text-gray-400">90分</p>
              </div>
              <p className="text-gray-400 mb-6">
                ガラスコーティングの性能を保つための専用メンテナンスを行います。被膜の汚れを落とし、長持ちさせます。もちろん日々の洗車として、定期的にご自宅に訪問し、お客様のお手間を最小限にいたします。
              </p>
            </div>

            {/* 年間パッケージ */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">ボディガラスコーティングの年間パッケージ案内</h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            </div>

            <div className="luxury-card p-8 mb-16">
              <h3 className="text-xl font-light mb-4 luxury-heading">プレミアムコーティングプラン</h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-4">出張洗車をご契約のお客様向けの価格</p>
              <p className="text-xl font-light mb-6">T 月額に +6,750円　S 月額に +8,250円　P 月額に +9,750円</p>
              <p className="text-gray-400 mb-6">
                年1回、極上品質のボディガラスコーティングが組み込まれたプランです。
                <br />
                コーティング施工後の定期訪問では、専用メンテナンス洗車を行います。
                <br />
                毎月の洗車月額に少額加算というスタイルで、大変お得なパッケージ内容です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* オプションセクション */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">オプション</h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 luxury-subheading">
                コーティングと合わせてご利用いただける追加オプションです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* オプション1 */}
              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
                <h3 className="text-xl font-light mb-2 luxury-heading">ホイールコーティング</h3>
                <div className="w-12 h-px bg-red-600 mb-4"></div>
                <p className="text-xl font-light mb-4">4本セット 20,000円</p>
                <p className="text-gray-400">
                  ホイールの汚れを取り、ガラス被膜のコーティングを実施します。すべてのサイズ同一価格です。
                </p>
              </div>

              {/* オプション2 */}
              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
                <h3 className="text-xl font-light mb-2 luxury-heading">ウインドウ ウロコ除去</h3>
                <div className="w-12 h-px bg-red-600 mb-4"></div>
                <p className="text-xl font-light mb-4">1面 8,000円</p>
                <p className="text-gray-400">油膜及びウロコじみを研磨除去し、クリアな視界を確保します。</p>
              </div>

              {/* オプション3 */}
              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
                <h3 className="text-xl font-light mb-2 luxury-heading">ヘットライトクリーニング</h3>
                <div className="w-12 h-px bg-red-600 mb-4"></div>
                <p className="text-xl font-light mb-4">6,000円</p>
                <p className="text-gray-400">
                  経年によるヘッドライトレンズのクスミを除去し、美観向上と良好な照度を確保します。
                </p>
              </div>

              {/* オプション4 */}
              <div className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/10">
                <h3 className="text-xl font-light mb-2 luxury-heading">精密除菌・抗菌ルームクリーニング</h3>
                <div className="w-12 h-px bg-red-600 mb-4"></div>
                <p className="text-xl font-light mb-4">T 50,000円　S 60,000円　P 70,000円</p>
                <p className="text-gray-400">
                  細部に及ぶ車内全体のクリーニングを行い、清潔な空間を作り上げます。清掃、除菌、抗菌を徹底的に行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コーティングプロセス */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">CAR CARE JAPAN ガラスコーティングの特徴</h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 luxury-subheading">
                カーケアジャパンのコーティング施工は、徹底した下準備と丁寧な施工で 最高の仕上がりを実現します。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">徹底洗車</h3>
                  <p className="text-gray-400">
                    専用の洗剤と道具を使用し、ボディの汚れを徹底的に落とします。
                    特に細部の汚れにこだわり、完璧な下地を作ります。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">鉄粉除去・粘土処理</h3>
                  <p className="text-gray-400">
                    ボディに付着した鉄粉を専用の薬剤で除去し、粘土バーで表面の微細な汚れを取り除きます。
                    これにより、塗装面が滑らかになります。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">研磨作業</h3>
                  <p className="text-gray-400">
                    必要に応じて塗装面を研磨し、小さな傷や水垢を除去します。
                    これにより、コーティング後の仕上がりが格段に向上します。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">コーティング施工</h3>
                  <p className="text-gray-400">
                    選択したコーティング剤を丁寧に塗布し、適切な時間硬化させます。
                    必要に応じて複数回の施工を行い、均一で美しい仕上がりを実現します。
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">最終仕上げ</h3>
                  <p className="text-gray-400">
                    コーティング後の表面を丁寧に拭き上げ、完璧な仕上がりを確認します。
                    お客様への引き渡し前に、細部まで検査を行います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 車種サイズ説明 */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">車種サイズについて</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8 luxury-subheading">料金表に記載のT、S、Pは車種のサイズを表しています。</p>

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

            <p className="text-gray-400 text-sm mb-8">
              ※ 表示価格はすべて税込み価格です。
              <br />※ 車種や車の状態によって追加料金が発生する場合があります。
            </p>

            {/* 車種サイズ表へのリンク */}
            <Link href="/coating/size-chart" className="luxury-button inline-flex items-center">
              <span className="relative z-10">車種別サイズ表を見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">CONTACT US</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8 luxury-subheading">
              コーティングについてのご質問やお見積りのご依頼は、お気軽にお問い合わせください。
              専門スタッフがお客様のご要望に合わせたプランをご提案いたします。
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
