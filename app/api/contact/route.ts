import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // 環境変数からメール設定を取得
    const adminEmail = process.env.GMAIL_USER
    const appPassword = process.env.GMAIL_APP_PASSWORD

    if (!adminEmail || !appPassword) {
      console.error("環境変数が設定されていません")
      return NextResponse.json({ message: "環境変数が設定されていません" }, { status: 500 })
    }

    // トランスポーターの作成
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: true, // デバッグモードを有効化
    })

    // 管理者向けメールオプション
    const adminMailOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: "お問い合わせがありました",
      text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
    }

    // 自動返信メールオプション
    const autoReplyMailOptions = {
      from: adminEmail,
      to: email,
      subject: "お問い合わせありがとうございます",
      text: `お問い合わせありがとうございます。\n内容を確認後、ご連絡いたします。\n\nお問い合わせ内容:\n名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
    }

    // メール送信処理
    console.log("管理者向けメール送信開始...")
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions)
      console.log("管理者向けメール送信成功:", adminInfo.messageId)
    } catch (adminMailError: any) {
      console.error("管理者向けメール送信失敗:", adminMailError)
      console.error("エラー詳細:", JSON.stringify(adminMailError))
      // 管理者向けメールが失敗しても処理を続行
    }

    console.log("自動返信メール送信開始...")
    try {
      const autoReplyInfo = await transporter.sendMail(autoReplyMailOptions)
      console.log("自動返信メール送信成功:", autoReplyInfo.messageId)
    } catch (autoReplyError: any) {
      console.error("自動返信メール送信失敗:", autoReplyError)
      console.error("エラー詳細:", JSON.stringify(autoReplyError))
      // 自動返信メールが失敗しても処理を続行
    }

    return NextResponse.json({ message: "メールを送信しました" }, { status: 200 })
  } catch (error) {
    console.error("エラー:", error)
    return NextResponse.json({ message: "メール送信に失敗しました" }, { status: 500 })
  }
}
