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

    // メール本文を作成（管理者向け）
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

    // トランスポーターの設定部分を以下のように明示的に変更します
    // Gmailを使用したトランスポーターの設定
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmailのアプリパスワード
      },
    })

    // 管理者向けメール送信オプションを設定
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECIPIENT || process.env.GMAIL_USER, // 受信用メールアドレス
      subject: `【お問い合わせ】${formData.subject}`,
      text: adminEmailBody,
      replyTo: formData.email, // 返信先をお客様のメールアドレスに設定
    }

    // 自動返信用のHTMLメール本文を作成
    const autoReplyHtmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問い合わせありがとうございます</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background-color: #000000;
    }
    .logo {
      max-width: 150px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
      background-color: #ffffff;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #999;
      background-color: #f1f1f1;
    }
    h1 {
      color: #d40000;
      font-weight: 300;
      margin-bottom: 20px;
      font-size: 24px;
    }
    p {
      margin-bottom: 15px;
    }
    .divider {
      height: 1px;
      background-color: #d40000;
      width: 50px;
      margin: 20px auto;
    }
    .contact-info {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #d40000;
      color: #ffffff;
      text-decoration: none;
      margin-top: 20px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    .inquiry-details {
      background-color: #f9f9f9;
      padding: 15px;
      margin-top: 20px;
      border-left: 3px solid #d40000;
    }
    .inquiry-details p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://carcarejapan.com/logo-white.png" alt="CAR CARE JAPAN" class="logo">
    </div>
    <div class="content">
      <h1>お問い合わせありがとうございます</h1>
      <div class="divider"></div>
      <p>${formData.name} 様</p>
      <p>この度は、CAR CARE JAPANにお問い合わせいただき、誠にありがとうございます。</p>
      <p>お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
      
      <div class="inquiry-details">
        <p><strong>【お問い合わせ内容】</strong></p>
        <p>サービス: ${formData.service}</p>
        <p>件名: ${formData.subject}</p>
        <p>お名前: ${formData.name}</p>
        <p>メールアドレス: ${formData.email}</p>
        ${formData.phone ? `<p>電話番号: ${formData.phone}</p>` : ""}
        ${formData.carModel ? `<p>車種: ${formData.carModel}</p>` : ""}
        <p>メッセージ:</p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      </div>
      
      <div class="contact-info">
        <p>ご不明な点がございましたら、下記までお問い合わせください。</p>
        <p>
          CAR CARE JAPAN<br>
          〒157-0072 東京都世田谷区祖師谷6-19-20<br>
          TEL: 03-6411-2959<br>
          Email: info@carcarejapan.com<br>
          営業時間: 10:00〜19:00（定休日: 土/日/祝）
        </p>
        <a href="https://carcarejapan.com" class="button">ウェブサイトへ</a>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} CAR CARE JAPAN. All Rights Reserved.</p>
      <p>このメールは自動送信されています。返信はできませんのでご了承ください。</p>
    </div>
  </div>
</body>
</html>
    `

    // 自動返信用のテキストメール本文（HTMLをサポートしていないメールクライアント用）
    const autoReplyTextBody = `
お問い合わせありがとうございます

${formData.name} 様

この度は、CAR CARE JAPANにお問い合わせいただき、誠にありがとうございます。
お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡させていただきます。

【お問い合わせ内容】
サービス: ${formData.service}
件名: ${formData.subject}
お名前: ${formData.name}
メールアドレス: ${formData.email}
${formData.phone ? `電話番号: ${formData.phone}` : ""}
${formData.carModel ? `車種: ${formData.carModel}` : ""}
メッセージ:
${formData.message}

ご不明な点がございましたら、下記までお問い合わせください。

CAR CARE JAPAN
〒157-0072 東京都世田谷区祖師谷6-19-20
TEL: 03-6411-2959
Email: info@carcarejapan.com
営業時間: 10:00〜19:00（定休日: 土/日/祝）

© ${new Date().getFullYear()} CAR CARE JAPAN. All Rights Reserved.
このメールは自動送信されています。返信はできませんのでご了承ください。
    `

    // 自動返信メール送信オプションを設定
    const autoReplyMailOptions = {
      from: `"CAR CARE JAPAN" <${process.env.GMAIL_USER}>`,
      to: formData.email,
      subject: `【CAR CARE JAPAN】お問い合わせありがとうございます`,
      text: autoReplyTextBody, // プレーンテキスト版
      html: autoReplyHtmlBody, // HTML版
    }

    // 管理者向けメール送信
    await transporter.sendMail(adminMailOptions)

    // 自動返信メール送信
    await transporter.sendMail(autoReplyMailOptions)

    // 開発環境ではコンソールに出力する部分も修正して、環境変数の値を確認できるようにします
    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === "development") {
      console.log("管理者向けメール内容:", adminEmailBody)
      console.log("送信先:", process.env.GMAIL_RECIPIENT || process.env.GMAIL_USER)
      console.log("自動返信メール送信先:", formData.email)
      console.log("GMAIL_USER環境変数:", process.env.GMAIL_USER ? "設定されています" : "設定されていません")
      console.log(
        "GMAIL_APP_PASSWORD環境変数:",
        process.env.GMAIL_APP_PASSWORD ? "設定されています" : "設定されていません",
      )
    }

    // 成功レスポンスを返す
    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。自動返信メールをお送りしましたのでご確認ください。",
    })
  } catch (error) {
    console.error("メール送信エラー:", error)
    return NextResponse.json(
      { success: false, message: "エラーが発生しました。もう一度お試しください。" },
      { status: 500 },
    )
  }
}
