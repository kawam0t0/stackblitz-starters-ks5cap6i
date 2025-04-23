"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react"

// 車種データの型定義
type CarSizeClass = "Pクラス" | "Sクラス" | "Tクラス"
type CarBrandData = {
  [key in CarSizeClass]?: string[]
}

type CarData = {
  imported: {
    [brand: string]: CarBrandData
  }
  domestic: {
    [brand: string]: CarBrandData
  }
}

// 車種データ
const carData: CarData = {
  imported: {
    ポルシェ: {
      Pクラス: ["カイエン", "パナメーラ", "マカン"],
      Sクラス: ["911", "ケイマン", "ボクスター"],
    },
    メルセデスベンツ: {
      Pクラス: ["AMG GT", "G", "GL", "GLC", "GLS", "S", "V"],
      Sクラス: ["A", "B", "C", "CLA", "CLS", "E", "GLA", "SL"],
      Tクラス: ["SLC"],
    },
    BMW: {
      Pクラス: ["7", "8", "i8", "X3", "X5", "X7"],
      Sクラス: ["3", "5", "i3", "X1", "X2", "Z4", "1"],
      Tクラス: ["Z3"],
    },
    "BMW MINI": {
      Sクラス: ["ミニ クラブマン", "ミニ クロスオーバー"],
      Tクラス: ["ミニ", "ミニ コンバーチブル"],
    },
    ベントレー: {
      Pクラス: ["アルナージ", "コンチネンタルGT", "フライングスパー", "ブルックランズ", "ベンテイガ"],
    },
    ロールスロイス: {
      Pクラス: ["カリナン", "ゴースト", "コーニッシュ", "ドーン", "ファントム", "レイス"],
    },
    フェラーリ: {
      Pクラス: ["488", "599", "812", "F12", "458", "ポルトフィーノ"],
    },
    ランボルギーニ: {
      Pクラス: ["アヴェンタドール", "ウラカン", "ウルス", "ガヤルド", "ディアブロ"],
    },
    アウディ: {
      Pクラス: ["A8", "Q5", "Q7", "Q8", "R8"],
      Sクラス: ["A4", "A6", "A7", "Q3", "TT"],
      Tクラス: ["A1"],
    },
    マセラティ: {
      Pクラス: ["クアトロポルテ", "グランツーリズモ", "レヴァンテ", "グランカブリオ"],
      Sクラス: ["ギブリ", "クーペ", "スパイダー"],
    },
    アストンマーティン: {
      Pクラス: ["DB7", "DB9", "DB11", "DBS", "ヴァンテージ", "ラピード"],
    },
    アルピナ: {
      Pクラス: ["B7", "XD3", "XD4"],
      Sクラス: ["B3", "B5", "D3", "D5"],
    },
    アルファロメオ: {
      Pクラス: ["8C", "ステルヴィオ"],
      Sクラス: ["159", "4C", "ジュリア", "ジュリエッタ", "スパイダー", "ブレラ"],
      Tクラス: ["147", "ミト"],
    },
    クライスラー: {
      Pクラス: ["グランドボイジャー", "300", "300C"],
      Sクラス: ["PTクルーザー"],
    },
    シトロエン: {
      Pクラス: ["DS7クロスバック"],
      Sクラス: ["C5エアクロスSUV", "C4カクタス", "C5", "C6", "DS5"],
      Tクラス: ["C2", "DS3"],
    },
    ジャガー: {
      Pクラス: ["Fベース", "XJ"],
      Sクラス: ["Fタイプ", "XK", "Eペース", "Xタイプ"],
    },
    ハマー: {
      Pクラス: ["H2", "H3"],
    },
    フィアット: {
      Sクラス: ["500X"],
      Tクラス: ["500", "グランデプント", "バルケッタ", "パンダ"],
    },
    フォード: {
      Pクラス: ["F-150", "エクスプローラー"],
      Sクラス: ["マスタング", "フォーカス"],
      Tクラス: ["フィエスタ"],
    },
    フォルクスワーゲン: {
      Pクラス: ["シャラン", "トゥアレグ"],
      Sクラス: ["アルテオン", "トューラン", "パサート", "ゴルフ ヴァリアント", "ジェッタ"],
      Tクラス: ["up!", "ゴルフ", "シロッコ", "ニュービートル", "ポロ"],
    },
    プジョー: {
      Sクラス: ["5008", "308", "508", "2008", "RCZ"],
      Tクラス: ["107", "208", "1007"],
    },
    ボルボ: {
      Pクラス: ["XC90"],
      Sクラス: ["S60", "V40", "V60", "V90", "XC40", "XC60"],
      Tクラス: ["C30"],
    },
    マイバッハ: {
      Pクラス: ["57", "62", "ランドレー"],
    },
    ランドローバー: {
      Pクラス: ["ヴェラール", "ヴォーグ", "ディスカバリー", "ディフェンダー", "レンジローバー"],
      Sクラス: ["イヴォーク"],
    },
    ルノー: {
      Sクラス: ["カングー", "グランセニック", "メガーヌ", "キャプチャー"],
      Tクラス: ["ルーテシア", "トュインゴ"],
    },
    ロータス: {
      Sクラス: ["エヴォーラ", "エスプリ"],
      Tクラス: ["エリーゼ"],
    },
    ジープ: {
      Pクラス: ["グランドチェロキー", "ラングラー", "コマンダー"],
      Sクラス: ["コンパス", "レネゲード"],
    },
    ダッジ: {
      Pクラス: ["ラム"],
      Sクラス: ["チャージャー", "バイパー"],
    },
    シボレー: {
      Tクラス: ["MW"],
      Pクラス: ["アストロ", "トレイルブレイザー"],
      Sクラス: ["カマロ", "コルベット"],
    },
    キャデラック: {
      Pクラス: ["SRX", "XT5", "XT6", "エスカレード"],
      Sクラス: ["CT6", "CTS"],
    },
    リンカーン: {
      Pクラス: ["MLX", "ナビゲーター"],
    },
    アバルト: {
      Tクラス: ["595", "124スパイダー"],
    },
    マクラーレン: {
      Pクラス: ["540C", "650S", "720S", "F1", "GT", "MP4-12C", "P1"],
    },
    テスラ: {
      Pクラス: ["モデルS", "モデルX"],
      Sクラス: ["モデル3", "ロードスター"],
    },
  },
  domestic: {
    レクサス: {
      Pクラス: ["NX", "LX", "RX"],
      Sクラス: ["IS", "CT", "HS", "SC", "GS", "RC", "LS"],
    },
    トヨタ: {
      Pクラス: [
        "VOXY",
        "ノア",
        "ハリアー",
        "ハイラックスサーフ",
        "エスティマ",
        "ランドクルーザープラド",
        "レジアスエース",
        "アルファード",
        "ヴェルファイア",
        "ハイエース",
        "ランドクルーザー",
        "FJクルーザー",
      ],
      Sクラス: ["アイシス", "WISH", "イプサム", "RAV4", "クルーガー", "クラウン", "セルシオ", "センチュリー"],
      Tクラス: [
        "アクア",
        "ヴィッツ",
        "ポルテ",
        "ベルタ",
        "ラクティス",
        "カローラ",
        "MR-S",
        "アベンシス",
        "アリオン",
        "ブレビス",
        "プレミオ",
        "プリウス",
        "カルディナ",
        "ブレイド",
        "bB",
        "ist",
        "プログレ",
        "マークX",
        "Sai",
        "iQ",
        "スペイド",
        "パッソ",
        "カムリ",
      ],
    },
    日産: {
      Pクラス: ["セレナ", "ムラーノ", "エルグランド", "キャラバン", "サファリ"],
      Sクラス: [
        "ウイングロード",
        "ステージア",
        "ジューク",
        "ティアナ",
        "ラフェスタ",
        "フーガ",
        "プレサージュ",
        "エクストレイル",
        "Z",
        "シーマ",
        "スカイライン",
        "GT-R",
        "プレジデント",
      ],
      Tクラス: ["マーチ", "キューブ", "ティーダ", "ノート", "シルフィ", "リーフ", "ラティオ"],
    },
    ホンダ: {
      Pクラス: ["ステップワゴン", "クロスロード", "エリシオン"],
      Sクラス: ["モビリオ", "エアウエイブ", "ストリーム", "CR-V", "レジェンド", "オデッセイ"],
      Tクラス: ["FIT", "シビック", "アコード", "S2000", "エディックス", "CR-Z", "GRACE", "ヴェゼル", "インスパイア"],
    },
    スズキ: {
      Pクラス: ["SX4", "エスクード"],
      Tクラス: ["ソリオ", "エリオ", "スイフト", "ジムニー"],
    },
    スバル: {
      Tクラス: ["インプレッサ", "アウトバック", "レガシー", "フォレスター"],
    },
    ダイハツ: {
      Tクラス: ["ブーン", "COO", "ビーゴ", "アルティス"],
    },
    マツダ: {
      Sクラス: ["プレマシー", "CX-7", "MPV"],
      Tクラス: ["デミオ", "アクセラ", "アテンザ", "ベリーザ", "ロードスター", "RX8", "RX7"],
    },
    三菱: {
      Pクラス: ["パジェロ", "デリカ"],
      Sクラス: ["グランデス", "アウトランダー"],
      Tクラス: ["コルト", "ランサー", "パジェロイオ"],
    },
  },
}

// 輸入車ブランド一覧
const importedBrands = Object.keys(carData.imported)

// 国産車ブランド一覧
const domesticBrands = Object.keys(carData.domestic)

export default function SizeChartPage() {
  const [activeTab, setActiveTab] = useState<"imported" | "domestic">("imported")
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [expandedBrands, setExpandedBrands] = useState<Record<string, boolean>>({})

  // ブランドの展開状態を切り替える
  const toggleBrand = (brand: string) => {
    setExpandedBrands((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <Image src="/sleek-black-sedan.png" alt="Car Size Chart" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">車種サイズ表</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 戻るリンク */}
            <div className="mb-8">
              <Link
                href="/coating"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>コーティングページに戻る</span>
              </Link>
            </div>

            {/* サイズ説明 */}
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6 luxury-heading">サイズクラスについて</h2>
              <div className="w-16 h-px bg-red-600 mb-6"></div>
              <p className="text-gray-400 mb-8">
                コーティング料金は車のサイズによって異なります。以下の表で、お客様の車種がどのサイズクラスに該当するかをご確認いただけます。
              </p>

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
            </div>

            {/* タブ切り替え */}
            <div className="flex mb-8 border-b border-zinc-800">
              <button
                className={`px-6 py-3 font-light transition-colors ${
                  activeTab === "imported" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("imported")}
              >
                輸入車
              </button>
              <button
                className={`px-6 py-3 font-light transition-colors ${
                  activeTab === "domestic" ? "text-white border-b-2 border-red-600" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("domestic")}
              >
                国産車
              </button>
            </div>

            {/* ブランド一覧 */}
            <div className="mb-12">
              <h3 className="text-2xl font-light mb-6 luxury-heading">
                {activeTab === "imported" ? "輸入車" : "国産車"}ブランド一覧
              </h3>
              <div className="w-12 h-px bg-red-600 mb-6"></div>

              <div className="space-y-4">
                {(activeTab === "imported" ? importedBrands : domesticBrands).map((brand) => (
                  <div key={brand} className="border border-zinc-800 hover:border-red-600 transition-all duration-300">
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center text-left"
                      onClick={() => toggleBrand(brand)}
                    >
                      <span className="text-lg font-light">{brand}</span>
                      {expandedBrands[brand] ? (
                        <ChevronUp className="h-5 w-5 text-red-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {expandedBrands[brand] && (
                      <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/30">
                        <table className="w-full luxury-table">
                          <thead>
                            <tr>
                              <th>クラス</th>
                              <th>車種</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(
                              activeTab === "imported" ? carData.imported[brand] : carData.domestic[brand],
                            ).map(([sizeClass, models]) => (
                              <tr key={sizeClass}>
                                <td className="w-1/4 font-light">{sizeClass}</td>
                                <td>{models.join("、 ")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 注意書き */}
            <div className="bg-zinc-900/50 p-6 border border-zinc-800">
              <h3 className="text-xl font-light mb-4">ご注意</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="luxury-list-item">
                  同じ車種でも、年式やグレードによってサイズクラスが異なる場合があります。
                </li>
                <li className="luxury-list-item">記載のないモデルについては、お問い合わせください。</li>
                <li className="luxury-list-item">特殊な仕様や改造車の場合、別途お見積りとなる場合があります。</li>
              </ul>
            </div>

            {/* お問い合わせボタン */}
            <div className="mt-12 text-center">
              <Link href="/contact" className="luxury-button">
                <span className="relative z-10">お問い合わせ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
