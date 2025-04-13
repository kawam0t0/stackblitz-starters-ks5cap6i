import Image from 'next/image';
import Link from 'next/link';

export default function CoatingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/gallery-6.png"
          alt="Premium Coating"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">
              PREMIUM COATING
            </h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* コーティング紹介 */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">
              THE ULTIMATE PROTECTION
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              カーケアジャパンのプレミアムコーティングは、最高級の素材と技術で
              あなたの愛車を美しく保護します。長期間の輝きと保護を実現する
              各種コーティングをご用意しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* コーティング種類1 */}
            <div className="luxury-card p-8 hover:border-red-600">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-xl font-light">01</span>
              </div>
              <h3 className="text-xl font-light mb-4 luxury-heading">
                ガラスコーティング
              </h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                ガラス系の成分を含む特殊なコーティング剤で、硬度が高く耐久性に優れています。
                水をはじき、汚れが付きにくい表面を作り出します。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="luxury-list-item">高い硬度と耐久性</li>
                <li className="luxury-list-item">優れた撥水性</li>
                <li className="luxury-list-item">6ヶ月〜1年の持続性</li>
              </ul>
              <p className="text-xl font-light mb-4">
                ¥30,000<span className="text-sm text-gray-400">〜</span>
              </p>
            </div>

            {/* コーティング種類2 */}
            <div className="luxury-card p-8 border-red-600">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-xl font-light">02</span>
              </div>
              <h3 className="text-xl font-light mb-4 luxury-heading">
                セラミックコーティング
              </h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                最先端のセラミック技術を使用したコーティングで、最高レベルの保護と輝きを提供します。
                紫外線、酸性雨、鳥の糞などから塗装を守ります。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="luxury-list-item">最高レベルの保護</li>
                <li className="luxury-list-item">深みのある光沢</li>
                <li className="luxury-list-item">1年〜3年の持続性</li>
              </ul>
              <p className="text-xl font-light mb-4">
                ¥50,000<span className="text-sm text-gray-400">〜</span>
              </p>
            </div>

            {/* コーティング種類3 */}
            <div className="luxury-card p-8 hover:border-red-600">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mb-6">
                <span className="text-xl font-light">03</span>
              </div>
              <h3 className="text-xl font-light mb-4 luxury-heading">
                ポリマーコーティング
              </h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-6">
                ポリマー系の成分を含むコーティングで、柔軟性があり施工が比較的簡単です。
                定期的なメンテナンスで美しい状態を維持できます。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="luxury-list-item">柔軟性のある保護膜</li>
                <li className="luxury-list-item">自然な光沢</li>
                <li className="luxury-list-item">3ヶ月〜6ヶ月の持続性</li>
              </ul>
              <p className="text-xl font-light mb-4">
                ¥20,000<span className="text-sm text-gray-400">〜</span>
              </p>
            </div>
          </div>

          {/* コーティングプロセス */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4 luxury-heading">
                OUR COATING PROCESS
              </h2>
              <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-400 luxury-subheading">
                カーケアジャパンのコーティング施工は、徹底した下準備と丁寧な施工で
                最高の仕上がりを実現します。
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
                    徹底洗車
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    鉄粉除去・粘土処理
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    研磨作業
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    コーティング施工
                  </h3>
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
                  <h3 className="text-xl font-light mb-4 luxury-heading">
                    最終仕上げ
                  </h3>
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

      {/* お問い合わせセクション */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">
              CONTACT US
            </h2>
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
  );
}
