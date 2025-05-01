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

    // 環境変数のデバッグ出力
    console.log("環境変数チェック:")
    console.log("GMAIL_USER:", process.env.GMAIL_USER ? "設定済み" : "未設定")
    console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "設定済み" : "未設定")
    console.log("GMAIL_RECIPIENT:", process.env.GMAIL_RECIPIENT ? "設定済み" : "未設定")

    // 環境変数が設定されていない場合はエラーを返す
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("必要な環境変数が設定されていません")
      return NextResponse.json(
        {
          success: false,
          message: "サーバー設定エラー: メール送信に必要な設定が不足しています。管理者にお問い合わせください。",
        },
        { status: 500 },
      )
    }

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

    // トランスポーターの設定を明示的に行う - ここが重要
    const transporter = nodemailer.createTransport({
      service: "gmail", // serviceを使用する方法に変更
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // トランスポーターの検証
    console.log("トランスポーター検証中...")
    try {
      await transporter.verify()
      console.log("トランスポーター検証成功: SMTPサーバーに接続できました")
    } catch (verifyError) {
      console.error("トランスポーター検証失敗:", verifyError)
      return NextResponse.json(
        {
          success: false,
          message: "メールサーバーに接続できません。しばらく経ってからもう一度お試しください。",
        },
        { status: 500 },
      )
    }

    // 管理者向けメール送信オプションを設定
    const adminMailOptions = {
      from: `"CAR CARE JAPAN" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECIPIENT || process.env.GMAIL_USER,
      subject: `【お問い合わせ】${formData.subject}`,
      text: adminEmailBody,
      replyTo: formData.email,
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

    // 自動返信用のテキストメール本文
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
      text: autoReplyTextBody,
      html: autoReplyHtmlBody,
    }

    // メール送信処理
    console.log("管理者向けメール送信開始...")
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions)
      console.log("管理者向けメール送信成功:", adminInfo.messageId)
    } catch (adminMailError) {
      console.error("管理者向けメール送信失敗:", adminMailError)
      // 管理者向けメールが失敗しても処理を続行
    }

    console.log("自動返信メール送信開始...")
    try {
      const autoReplyInfo = await transporter.sendMail(autoReplyMailOptions)
      console.log("自動返信メール送信成功:", autoReplyInfo.messageId)
    } catch (autoReplyError) {
      console.error("自動返信メール送信失敗:", autoReplyError)
      // 自動返信メールが失敗しても処理を続行
    }

    // 成功レスポンスを返す
    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。自動返信メールをお送りしましたのでご確認ください。",
    })
  } catch (error) {
    console.error("メール送信処理全体のエラー:", error)
    return NextResponse.json(
      {
        success: false,
        message: "エラーが発生しました。もう一度お試しください。",
      },
      { status: 500 },
    )
  }
}
