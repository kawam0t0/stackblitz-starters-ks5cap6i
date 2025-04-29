"use client"

import type React from "react"
import { useState } from "react"
import { sendEmail } from "@/app/actions/email"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    subject: "",
    message: "",
    service: "選択してください",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // サーバーアクションを呼び出してメール送信
      const result = await sendEmail(formData)
      setSubmitResult(result)

      // 送信成功時にフォームをリセット
      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          carModel: "",
          subject: "",
          message: "",
          service: "選択してください",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "エラーが発生しました。もう一度お試しください。",
      })
      console.error("送信エラー:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 page-transition">
      {/* ヘッダー画像 */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src="/contact-hero.jpg" alt="Contact Us" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 luxury-heading">CONTACT US</h1>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-black luxury-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6 luxury-heading">GET IN TOUCH</h2>
            <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 luxury-subheading">
              お問い合わせやご予約は、以下のフォームからお気軽にどうぞ。 専門スタッフが丁寧にご対応いたします。
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-4 luxury-heading">ADDRESS</h3>
                  <div className="w-12 h-px bg-red-600 mb-4"></div>
                  <p className="text-gray-400">
                    〒157-0072
                    <br />
                    東京都世田谷区祖師谷6-19-20
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 luxury-heading">PHONE</h3>
                  <div className="w-12 h-px bg-red-600 mb-4"></div>
                  <p className="text-gray-400">03-6411-2959</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 luxury-heading">EMAIL</h3>
                  <div className="w-12 h-px bg-red-600 mb-4"></div>
                  <p className="text-gray-400">info@carcarejapan.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 luxury-heading">BUSINESS HOURS</h3>
                  <div className="w-12 h-px bg-red-600 mb-4"></div>
                  <p className="text-gray-400">
                    10:00〜19:00
                    <br />
                    定休日: 土/日/祝
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              {submitResult && (
                <div
                  className={`p-4 mb-6 border ${
                    submitResult.success
                      ? "border-green-600 bg-green-600/10 text-green-500"
                      : "border-red-600 bg-red-600/10 text-red-500"
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6"
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      お名前
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6"
                      placeholder=" "
                      required
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      メールアドレス
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6"
                      placeholder=" "
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      電話番号
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6"
                      placeholder=" "
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="carModel"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      車種
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6 appearance-none"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="選択してください" disabled className="bg-zinc-900">
                      ご希望のサービス
                    </option>
                    <option value="プレミアム洗車" className="bg-zinc-900">
                      プレミアム洗車
                    </option>
                    <option value="コーティング" className="bg-zinc-900">
                      コーティング
                    </option>
                    <option value="その他" className="bg-zinc-900">
                      その他問い合わせ
                    </option>
                  </select>
                  <label
                    htmlFor="service"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-red-600"
                  >
                    ご希望のサービス
                  </label>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border-b border-zinc-700 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors peer pt-6"
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                  >
                    メッセージ
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="premium-button-new group" disabled={isSubmitting}>
                    <span className="relative z-10 uppercase tracking-wider text-sm font-light">
                      {isSubmitting ? "送信中..." : "送信する"}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                    <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
