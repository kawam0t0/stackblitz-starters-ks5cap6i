import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-black to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">
              FAQ
            </h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* FAQ セクション */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              お客様からよくいただくご質問をまとめました。
              その他のご質問は、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* FAQ カテゴリー */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { title: 'サービスについて', count: 8 },
                { title: '料金について', count: 5 },
                { title: '予約・キャンセルについて', count: 4 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border border-zinc-800 p-6 text-center transition-all duration-300 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/10"
                >
                  <h3 className="text-xl font-light mb-2">{category.title}</h3>
                  <div className="w-8 h-px bg-red-600 mx-auto my-2"></div>
                  <p className="text-gray-400 text-sm">
                    {category.count}件の質問
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ リスト */}
            <div className="space-y-12">
              {/* カテゴリー1 */}
              <div>
                <h3 className="text-2xl font-light mb-6 luxury-heading">
                  サービスについて
                </h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <div className="space-y-6">
                  {[
                    {
                      question: 'どのようなサービスを提供していますか？',
                      answer:
                        'カーケアジャパンでは、プレミアム洗車、各種コーティング（ガラス、セラミック、ポリマー）、インテリアクリーニング、ポリッシング、ヘッドライトの黄ばみ除去など、幅広いカーケアサービスを提供しています。',
                    },
                    {
                      question: '施工にはどのくらいの時間がかかりますか？',
                      answer:
                        'サービス内容によって異なります。基本的な洗車は約1時間、コーティングは車種や状態によって4〜8時間程度かかります。インテリアクリーニングは2〜4時間程度です。詳細はお問い合わせください。',
                    },
                    {
                      question: 'コーティングの持続期間はどのくらいですか？',
                      answer:
                        'コーティングの種類によって異なります。ポリマーコーティングは3〜6ヶ月、ガラスコーティングは6ヶ月〜1年、セラミックコーティングは1〜3年程度持続します。ただし、使用状況やメンテナンス状態によって変わります。',
                    },
                    {
                      question: '施工後のメンテナンス方法を教えてください。',
                      answer:
                        'コーティング後は、中性洗剤での手洗いをおすすめします。強い洗剤や自動洗車機の使用は避けてください。また、3〜6ヶ月ごとの定期的なメンテナンスを受けることで、より長く美しい状態を保つことができます。',
                    },
                    {
                      question: 'どのような車種に対応していますか？',
                      answer:
                        '国産車、輸入車を問わず、すべての車種に対応しています。セダン、SUV、スポーツカー、ミニバンなど、あらゆる車種のカーケアが可能です。',
                    },
                    {
                      question: '施工中は待つことができますか？',
                      answer:
                        'はい、待合室をご用意しています。Wi-Fi、コーヒー、雑誌などをご利用いただけます。ただし、長時間の施工の場合は、一度お帰りいただくことをおすすめします。',
                    },
                    {
                      question: '出張サービスはありますか？',
                      answer:
                        'はい、一部のサービスについては出張施工も承っております。ただし、コーティングなどの専門的な施工は、最適な環境で行うため店舗での施工をおすすめしています。詳細はお問い合わせください。',
                    },
                    {
                      question: '施工前に準備することはありますか？',
                      answer:
                        '特別な準備は必要ありませんが、車内の貴重品や不要な荷物は事前に取り出しておくことをおすすめします。また、燃料は半分以上入れておくとスムーズです。',
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10"
                    >
                      <h4 className="text-xl font-light mb-4">
                        {faq.question}
                      </h4>
                      <div className="w-8 h-px bg-red-600 mb-4"></div>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* カテゴリー2 */}
              <div>
                <h3 className="text-2xl font-light mb-6 luxury-heading">
                  料金について
                </h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <div className="space-y-6">
                  {[
                    {
                      question: '料金はどのように決まりますか？',
                      answer:
                        '料金は車種（サイズ）とサービス内容によって決まります。セダン、SUV、ミニバンなど、車のサイズによって基本料金が異なります。また、オプションサービスを追加することもできます。',
                    },
                    {
                      question: '料金の支払い方法は何がありますか？',
                      answer:
                        '現金、クレジットカード（VISA、MasterCard、JCB、American Express）、銀行振込に対応しています。法人のお客様には請求書払いも対応可能です。',
                    },
                    {
                      question: '分割払いは可能ですか？',
                      answer:
                        'クレジットカードでのお支払いの場合、カード会社の分割払いサービスをご利用いただけます。詳細はカード会社にお問い合わせください。',
                    },
                    {
                      question: '定期的なメンテナンスプランはありますか？',
                      answer:
                        'はい、月額制のメンテナンスプランをご用意しています。月1回の洗車と3ヶ月ごとのメンテナンスコーティングがセットになったお得なプランです。詳細はお問い合わせください。',
                    },
                    {
                      question: '見積もりは無料ですか？',
                      answer:
                        'はい、見積もりは無料です。お電話、メール、または店舗にて車種とご希望のサービスをお伝えいただければ、お見積りをご提供いたします。',
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10"
                    >
                      <h4 className="text-xl font-light mb-4">
                        {faq.question}
                      </h4>
                      <div className="w-8 h-px bg-red-600 mb-4"></div>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* カテゴリー3 */}
              <div>
                <h3 className="text-2xl font-light mb-6 luxury-heading">
                  予約・キャンセルについて
                </h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <div className="space-y-6">
                  {[
                    {
                      question: '予約は必要ですか？',
                      answer:
                        'はい、スムーズなサービス提供のため、事前のご予約をお願いしています。お電話またはお問い合わせフォームからご予約いただけます。',
                    },
                    {
                      question: 'どのくらい前に予約すればいいですか？',
                      answer:
                        '特に週末や祝日は混雑しますので、1週間前までのご予約をおすすめします。平日であれば2〜3日前でもご予約可能な場合があります。',
                    },
                    {
                      question: 'キャンセルポリシーを教えてください。',
                      answer:
                        '予約日の24時間前までのキャンセルは無料です。24時間を切ってからのキャンセルの場合、キャンセル料として予約サービス料金の30%をいただく場合があります。',
                    },
                    {
                      question: '予約の変更は可能ですか？',
                      answer:
                        'はい、予約日の48時間前までであれば、空き状況に応じて予約の変更が可能です。お早めにご連絡ください。',
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10"
                    >
                      <h4 className="text-xl font-light mb-4">
                        {faq.question}
                      </h4>
                      <div className="w-8 h-px bg-red-600 mb-4"></div>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
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
              STILL HAVE QUESTIONS?
            </h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8 luxury-subheading">
              ご質問がある場合は、お気軽にお問い合わせください。
              専門スタッフが丁寧にご対応いたします。
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
