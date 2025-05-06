"use client"

import type React from "react"
import { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [carModel, setCarModel] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("手洗い洗車")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmissionResult(null) // Reset previous result

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, carModel, subject, message, service }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmissionResult({ success: true, message: data.message })
        // フォームをリセット
        setName("")
        setEmail("")
        setPhone("")
        setCarModel("")
        setSubject("")
        setMessage("")
        setService("手洗い洗車")
      } else {
        setSubmissionResult({ success: false, message: data.message || "送信に失敗しました。" })
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error)
      setSubmissionResult({ success: false, message: "エラーが発生しました。もう一度お試しください。" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          電話番号 (任意)
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-1">
          車種 (任意)
        </label>
        <input
          type="text"
          id="carModel"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          ご希望のサービス <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>手洗い洗車</option>
          <option>コーティング</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          件名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          メッセージ <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </button>
      </div>
      {submissionResult && (
        <div
          className={`p-4 rounded-lg ${
            submissionResult.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {submissionResult.message}
        </div>
      )}
    </form>
  )
}

export default ContactForm
