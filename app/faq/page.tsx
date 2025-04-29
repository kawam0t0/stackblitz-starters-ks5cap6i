import Link from "next/link"
import Image from "next/image"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="/images/faq-header.jpg" alt="FAQ" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">FAQ</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* FAQ セクション */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              お客様からよくいただくご質問をまとめました。 その他のご質問は、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* FAQ カテゴリー */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "サービスについて", count: 8 },
                { title: "料金について", count: 5 },
                { title: "予約・キャンセルについて", count: 4 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border border-zinc-800 p-6 text-center transition-all duration-300 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/10"
                >
                  <h3 className="text-xl font-light mb-2">{category.title}</h3>
                  <div className="w-8 h-px bg-red-600 mx-auto my-2"></div>
                  <p className="text-gray-400 text-sm">{category.count}件の質問</p>
                </div>
              ))}
            </div>

            {/* FAQ リスト */}
            <div className="space-y-12">
              {/* 出張洗車についてのご質問 */}
              <div>
                <h3 className="text-2xl font-light mb-6 luxury-heading">出張洗車についてのご質問</h3>
                <div className="w-12 h-px bg-red-600 mb-6"></div>
                <div className="space-y-6">
                  {[
                    {
                      question: "頼みたい時にすぐ洗車に来てくれますか？",
                      answer:
                        "弊社スタッフのスケジュールにより、即日ですと伺えない場合もございますが、できる限りお客様のご希望に沿ったスケジューリングで洗車をさせて頂いております。",
                    },
                    {
                      question: "どこまで細かく洗浄してくれますか？",
                      answer: "キャリパーや給油口など細かなパーツまですべてきれいに洗車させていただきます。",
                    },
                    {
                      question: "何時頃まで洗車の依頼ができますか？",
                      answer:
                        "隅々まできれいに洗車するというポリシーから日没までのご依頼を承っております。（ライトをお持ちすることは可能ですので、ライトアップしても近隣にご迷惑の掛からない環境に限り日没後もご依頼をお受けすることは出来ます。）",
                    },
                    {
                      question: "出張洗車可能なエリアはどこまでですか？",
                      answer:
                        "東京23区内・神奈川県・千葉県はお伺いさせていただきます。特に目黒区、世田谷、港区、渋谷区の皆様に多くご愛顧いただいています。また大阪府・兵庫県・京都府にも近日中に出張可能になる予定です。",
                    },
                    {
                      question: "雨の日は洗車ができますか？",
                      answer: "屋根があって伺える場合は洗車にお伺いします。",
                    },
                    {
                      question: "出張洗車のスケジュールはどのように決めますか？",
                      answer:
                        "基本スケジュールは前月に翌月の出張洗車のスケジュールを仮決めさせていただいております。あとからスケジュールの変更も可能です。",
                    },
                    {
                      question: "定期分の出張洗車ができなかったらどうなりますか？",
                      answer:
                        "翌月に洗車を繰り越すことが出来ます。例えば2回定期で1回しか出張洗車できなかった場合は、翌月に3回出張洗車にお伺いします。",
                    },
                    {
                      question: "長期間家を空けるので洗車サービスの利用を休止することは出来ますか？",
                      answer: "はい。ご契約を一時的にストップすることができます。",
                    },
                    {
                      question: "個人の車ですが法人契約できますか？",
                      answer: "法人契約も承っております。",
                    },
                    {
                      question: "支払い方法は？",
                      answer:
                        "基本は銀行引き落としでお願いさせていただいております。また、クレジットカードの定期決済もご利用頂けます。お伺いした際に当社のスタッフがご料金をいただくことはありません。",
                    },
                    {
                      question: "家を空けていても良いですか？",
                      answer:
                        "はい、外出頂いて構いません。ただ、車内清掃をお望みの場合は基本的にご在宅頂いております。",
                    },
                    {
                      question: "水道、電気がありませんが洗車できますか？",
                      answer:
                        "はい可能です。水は弊社で用意しております。発電機を用意しておりますので電気がなくても洗車はできます。ただ、発電機を使用すると近隣の迷惑になる場合があるので車内清掃をお望みの場合は、電気をお貸しいただけると助かります。",
                    },
                    {
                      question: "駐車場が狭いのですが洗車できますか？",
                      answer:
                        "ひと一人が一周できる幅があれば洗車できます。（約50cm） 50cmのスペースが確保できない場合でも近くに移動できる場所があれば洗車できます。",
                    },
                    {
                      question: "いつも同じ人が洗ってくれるんですか？",
                      answer: "基本的に担当者制になっており、専属のスタッフが洗車させていただきます。",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10"
                    >
                      <h4 className="text-xl font-light mb-4">{faq.question}</h4>
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
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/faq-contact-bg.jpg" alt="Contact Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-black/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 luxury-heading">STILL HAVE QUESTIONS?</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8 luxury-subheading">
              ご質問がある場合は、お気軽にお問い合わせください。 専門スタッフが丁寧にご対応いたします。
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
