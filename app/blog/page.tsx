import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/blog-header.png"
          alt="Our Blog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">BLOG</h1>
            <div className="w-16 h-px bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      {/* ブログ記事一覧 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">LATEST ARTICLES</h2>
            <div className="w-16 h-px bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              カーケアに関する最新情報や役立つ情報を発信しています。
              愛車のケアに役立つヒントをご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "セラミックコーティングの魅力とは？",
                excerpt: "最新のセラミックコーティング技術について解説します。従来のコーティングとの違いや、その効果について詳しく紹介します。",
                date: "2023.05.15",
                category: "コーティング",
                image: "/blog-1.png",
              },
              {
                title: "愛車を長持ちさせる洗車の秘訣",
                excerpt: "正しい洗車方法を知っていますか？間違った洗車は塗装を傷つける原因になります。プロが教える正しい洗車方法を紹介します。",
                date: "2023.04.28",
                category: "洗車",
                image: "/blog-2.png",
              },
              {
                title: "レザーシートのお手入れ方法",
                excerpt: "高級車によく使われるレザーシート。適切なケアをしないと、乾燥やひび割れの原因になります。正しいお手入れ方法を解説します。",
                date: "2023.04.10",
                category: "インテリア",
                image: "/blog-3.png",
              },
              {
                title: "ホイールの汚れを効果的に落とす方法",
                excerpt: "ブレーキダストや道路の汚れが付着するホイール。効果的な洗浄方法と、美しさを保つコツを紹介します。",
                date: "2023.03.22",
                category: "洗車",
                image: "/blog-4.png",
              },
              {
                title: "雨の季節に備える！撥水コーティングの効果",
                excerpt: "梅雨の季節に活躍する撥水コーティング。その効果と施工のタイミングについて解説します。",
                date: "2023.03.05",
                category: "コーティング",
                image: "/blog-5.png",
              },
              {
                title: "新車購入後のカーケアについて",
                excerpt: "新車を購入したら、まず何をすべきか？新車の輝きを長く保つためのカーケアのポイントを紹介します。",
                date: "2023.02.18",
                category: "コラム",
                image: "/blog-6.png",
              },
            ].map((post, index) => (
              <div key={index} className="luxury-card group overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-white text-black px-3 py-1 text-xs uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-light mb-3 group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${index + 1}`}
                    className="inline-flex items-center text-sm text-white hover:text-gray-200 transition-colors relative overflow-hidden"
                  >
                    <span>続きを読む</span>
                    <svg
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                1
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                2
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                3
              </Link>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-white transition-colors"
              >
                10
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリーとタグ */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* カテゴリー */}
            <div>
              <h2 className="text-2xl font-light mb-6 luxury-heading">CATEGORIES</h2>
              <div className="space-y-4">
                {[
                  { name: "コーティング", count: 12 },
                  { name: "洗車", count: 8 },
                  { name: "インテリア", count: 6 },
                  { name: "ポリッシング", count: 5 },
                  { name: "コラム", count: 10 },
                  { name: "メンテナンス", count: 7 },
                ].map((category, index) => (
                  <Link
                    key={index}
                    href="#"  index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center justify-between border border-zinc-800 p-4 hover:border-white transition-colors"
                  >
                    <span>{category.name}</span>
                    <span className="text-gray-400 text-sm">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* タグ */}
            <div>
              <h2 className="text-2xl font-light mb-6 luxury-heading">POPULAR TAGS</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "セラミックコーティング",
                  "ガラスコーティング",
                  "手洗い洗車",
                  "ポリッシング",
                  "レザーケア",
                  "ホイールクリーニング",
                  "撥水コーティング",
                  "新車",
                  "メンテナンス",
                  "DIY",
                  "プロテクション",
                  "高級車",
                ].map((tag, index) => (
                  <Link\
                    key={index}
                    href="#"
                    className="border border-zinc-800 px-3 py-1 text-smm hover:border-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
