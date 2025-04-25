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
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">代表取締役</div>
                <div className="w-full md:w-2/3 p-4">岡本　直也</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">所在地</div>
                <div className="w-full md:w-2/3 p-4">■東京本社（Tokyo-Head-Office）
                <br/>〒157-0072 東京都世田谷区祖師谷6-19-20
                <br/><br/>■横濱ファクトリー（Yokohama-Factory）<br/>
                〒223-0057 神奈川県横浜市港北区新羽町849
                <br/><br/>■関西支社（Kansai-Office）<br/>
                〒532-0021 大阪府大阪市淀川区田川北1-13-5
                <br/><br/>■大阪ファクトリー（Kansai-Office）<br/>
                〒581-0039 大阪府八尾市太田新町4-120</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">電話番号</div>
                <div className="w-full md:w-2/3 p-4">03-6411-2959</div>
              </div>
              <div className="flex flex-col md:flex-row border-b border-zinc-800">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">営業時間</div>
                <div className="w-full md:w-2/3 p-4">10:00〜17:00（定休日：土曜日/日曜日/祝日）</div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-4 bg-zinc-900/50 font-light">事業内容</div>
                <div className="w-full md:w-2/3 p-4">
                  <ul className="space-y-2">
                    <li className="luxury-list-item">自動車洗車・コーティングサービス</li>
                    <li className="luxury-list-item">自動車内装クリーニング</li>
                    <li className="luxury-list-item">車検</li>
                    <li className="luxury-list-item">定期点検</li>
                    <li className="luxury-list-item">一般整備</li>
                    <li className="luxury-list-item">修理全般</li>
                    <li className="luxury-list-item">新車・中古車販売</li>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2276112798397!2d139.59856687619837!3d35.65119997259684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4f3d4e1c8c1%3A0x9e8f4e3ffd6a3d5d!2z44CSMTU3LTAwNzIg5p2x5Lqs6YO95LiW55Sw6LC35Yy66aSo5biC6LC377yW5LiB55uu77yR77yZ4oiS77yS77yA!5e0!3m2!1sja!2sjp!4v1713701234567!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="z-10"
                title="Google Map - CAR CARE JAPAN"
              ></iframe>
              <div className="absolute bottom-4 right-4 z-20">
                <Link
                  href="https://maps.app.goo.gl/Yd9Yd9Yd9Yd9Yd9Yd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 inline-flex items-center transition-all duration-300 hover:bg-red-700"
                >
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
                <p>営業時間: 10:00〜17:00</p>
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
