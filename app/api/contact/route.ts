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
    const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com"
    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10)
    const smtpSecure = process.env.SMTP_SECURE === "true"

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

    // トランスポーター設定
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
      requireTLS: true, // TLSを強制的に使用
      debug: true, // デバッグモードを有効化
    })

    // 管理者向けメール本文（HTML形式）
    const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { color: #d40000; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .info-item { margin-bottom: 10px; }
        .label { font-weight: bold; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d40000; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>新しいお問い合わせ</h1>
        <div class="info-item"><span class="label">お名前:</span> ${formData.name}</div>
        <div class="info-item"><span class="label">メールアドレス:</span> ${formData.email}</div>
        <div class="info-item"><span class="label">電話番号:</span> ${formData.phone || "未入力"}</div>
        <div class="info-item"><span class="label">車種:</span> ${formData.carModel || "未入力"}</div>
        <div class="info-item"><span class="label">ご希望のサービス:</span> ${formData.service}</div>
        <div class="info-item"><span class="label">件名:</span> ${formData.subject}</div>
        <div class="message-box">
          <div class="label">メッセージ:</div>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    </body>
    </html>
    `

    // 管理者向けメール送信
    await transporter.sendMail({
      from: `"CAR CARE JAPAN" <${gmailUser}>`,
      to: gmailRecipient,
      subject: `【お問い合わせ】${formData.subject}`,
      html: adminEmailHtml,
      text: `
新しいお問い合わせが届きました。

【お名前】: ${formData.name}
【メールアドレス】: ${formData.email}
【電話番号】: ${formData.phone || "未入力"}
【車種】: ${formData.carModel || "未入力"}
【ご希望のサービス】: ${formData.service}
【件名】: ${formData.subject}

【メッセージ】:
${formData.message}
      `,
      replyTo: formData.email,
    })

    // 自動返信メール本文（HTML形式）
    const autoReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { max-width: 150px; }
        h1 { color: #d40000; margin-bottom: 20px; }
        .message { margin-bottom: 30px; }
        .inquiry-details { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d40000; margin-bottom: 30px; }
        .footer { border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #777; }
        .contact-info { margin-bottom: 20px; }
        .note { font-style: italic; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://carcare-japan.com/logo.png" alt="CAR CARE JAPAN" class="logo">
          <h1>お問い合わせありがとうございます</h1>
        </div>
        
        <div class="message">
          <p>${formData.name} 様</p>
          <p>この度は、CAR CARE JAPANにお問い合わせいただき、誠にありがとうございます。<br>
          お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
        </div>
        
        <div class="inquiry-details">
          <h3>お問い合わせ内容</h3>
          <p><strong>サービス:</strong> ${formData.service}</p>
          <p><strong>件名:</strong> ${formData.subject}</p>
          <p><strong>メッセージ:</strong><br>${formData.message.replace(/\n/g, "<br>")}</p>
        </div>
        
        <div class="contact-info">
          <h3>お問い合わせ先</h3>
          <p>CAR CARE JAPAN<br>
          〒157-0072 東京都世田谷区祖師谷6-19-20<br>
          TEL: 03-6411-2959<br>
          Email: info@carcarejapan.com<br>
          営業時間: 10:00〜19:00（定休日: 土/日/祝）</p>
        </div>
        
        <div class="footer">
          <p class="note">※このメールは自動送信されています。返信はできませんのでご了承ください。</p>
        </div>
      </div>
    </body>
    </html>
    `

    // 自動返信メール送信
    await transporter.sendMail({
      from: `"CAR CARE JAPAN" <${gmailUser}>`,
      to: formData.email,
      subject: `【CAR CARE JAPAN】お問い合わせありがとうございます`,
      html: autoReplyHtml,
      text: `
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
      `,
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
