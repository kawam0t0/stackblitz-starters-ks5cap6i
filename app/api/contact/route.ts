import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type FormData = {
  name: string
  email: string
  phone: string
  carModel: string
  subject: string
  message: string
  service: string
}

export async function POST(request: Request) {
  try {
    // リクエストボディからフォームデータを取得
    const formData: FormData = await request.json()

    // 環境変数の取得とトリム処理
    const gmailUser = process.env.GMAIL_USER?.trim() || ""
    const gmailPassword = process.env.GMAIL_APP_PASSWORD?.trim() || ""
    const gmailRecipient = process.env.GMAIL_RECIPIENT?.trim() || gmailUser

    // 環境変数が設定されていない場合はエラーを返す
    if (!gmailUser || !gmailPassword) {
      console.error("必要な環境変数が設定されていません")
      return NextResponse.json(
        {
          success: false,
          message: "サーバー設定エラー: メール送信に必要な設定が不足しています。",
        },
        { status: 500 },
      )
    }

    // シンプルなトランスポーター設定
    const transporter = nodemailer.createTransport({
      service: "gmail", // サービス名を使用（内部で適切なホスト/ポートを設定）
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    // 管理者向けメール本文
    const adminEmailBody = `
新しいお問い合わせが届きました。

【お名前】: ${formData.name}
【メールアドレス】: ${formData.email}
【電話番号】: ${formData.phone || "未入力"}
【車種】: ${formData.carModel || "未入力"}
【ご希望のサービス】: ${formData.service}
【件名】: ${formData.subject}

【メッセージ】:
${formData.message}
    `

    // 管理者向けメール送信
    await transporter.sendMail({
      from: `"CAR CARE JAPAN" <${gmailUser}>`,
      to: gmailRecipient,
      subject: `【お問い合わせ】${formData.subject}`,
      text: adminEmailBody,
      replyTo: formData.email,
    })

    // 自動返信メール本文
    const autoReplyBody = `
${formData.name} 様

この度は、CAR CARE JAPANにお問い合わせいただき、誠にありがとうございます。
お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡させていただきます。

【お問い合わせ内容】
サービス: ${formData.service}
件名: ${formData.subject}
メッセージ:
${formData.message}

ご不明な点がございましたら、下記までお問い合わせください。

CAR CARE JAPAN
〒157-0072 東京都世田谷区祖師谷6-19-20
TEL: 03-6411-2959
Email: info@carcarejapan.com
営業時間: 10:00〜19:00（定休日: 土/日/祝）

※このメールは自動送信されています。返信はできませんのでご了承ください。
    `

    // 自動返信メール送信
    await transporter.sendMail({
      from: `"CAR CARE JAPAN" <${gmailUser}>`,
      to: formData.email,
      subject: `【CAR CARE JAPAN】お問い合わせありがとうございます`,
      text: autoReplyBody,
    })

    // 成功レスポンスを返す
    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。自動返信メールをお送りしましたのでご確認ください。",
    })
  } catch (error) {
    console.error("メール送信エラー:", error)
    return NextResponse.json(
      {
        success: false,
        message: "エラーが発生しました。もう一度お試しください。",
      },
      { status: 500 },
    )
  }
}
