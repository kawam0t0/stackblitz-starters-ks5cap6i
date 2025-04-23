"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "サービス", path: "/services" },
    { name: "手洗い洗車", path: "/washing" },
    { name: "コーティング", path: "/coating" },
    { name: "会社情報", path: "/company" },
    { name: "よくある質問", path: "/faq" },
    { name: "お問い合わせ", path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-zinc-700 ${
        scrollPosition > 50 ? "py-3 shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-10 group">
          <Image
            src="/red-cj-carcare.png"
            alt="CAR CARE JAPAN"
            width={150}
            height={150}
            className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white via-white to-transparent transition-all duration-500 group-hover:w-full"></span>
        </Link>

        <nav
          className={`fixed md:relative top-0 right-0 bottom-0 md:top-auto md:right-auto md:bottom-auto z-30 
          w-64 md:w-auto bg-zinc-700 md:bg-transparent shadow-2xl md:shadow-none
          transition-transform duration-500 md:transition-none
          ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end
          p-10 md:p-0 space-y-6 md:space-y-0 md:space-x-8`}
        >
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span className="sr-only">閉じる</span>
            <svg
              className="w-6 h-6 text-white hover:text-red-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full pt-10 md:pt-0 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-end space-y-6 md:space-y-0 md:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-white text-sm uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${
                  pathname === item.path ? "text-white font-medium" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>
        </nav>

        <button
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center overflow-hidden group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">メニュー</span>
          <div className="relative w-6 h-6">
            <span
              className={`absolute inset-0 transform transition-transform duration-300 flex items-center justify-center ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            >
              <span className="w-6 h-px bg-white group-hover:bg-white transition-colors duration-200"></span>
            </span>
            <span
              className={`absolute inset-0 transform transition-transform duration-300 flex items-center justify-center ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="w-6 h-px bg-white group-hover:bg-white transition-colors duration-200"></span>
            </span>
            <span
              className={`absolute inset-0 transform transition-transform duration-300 flex items-center justify-center ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            >
              <span className="w-6 h-px bg-white group-hover:bg-white transition-colors duration-200"></span>
            </span>
          </div>
        </button>
      </div>
    </header>
  )
}
