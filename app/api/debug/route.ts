import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // 環境変数の取得（値の一部を安全に表示）
    const gmailUser = process.env.GMAIL_USER || ""
    const gmailPassword = process.env.GMAIL_APP_PASSWORD || ""
    const gmailRecipient = process.env.GMAIL_RECIPIENT || ""
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com"
    const smtpPort = process.env.SMTP_PORT || "587"
    const smtpSecure = process.env.SMTP_SECURE || "false"

    // 環境変数の安全な表示（最初の3文字と最後の2文字のみ表示）
    const safeDisplay = (str: string) => {
      if (!str) return "未設定"
      if (str.length <= 5) return "***" // 短すぎる場合は全て隠す
      return `${str.substring(0, 3)}...${str.substring(str.length - 2)}`
    }

    // 環境変数の詳細情報
    const envInfo = {
      GMAIL_USER: {
        value: safeDisplay(gmailUser),
        length: gmailUser.length,
        hasWhitespace: /\s/.test(gmailUser),
        isEmpty: gmailUser.length === 0,
      },
      GMAIL_APP_PASSWORD: {
        value: safeDisplay(gmailPassword),
        length: gmailPassword.length,
        hasWhitespace: /\s/.test(gmailPassword),
        isEmpty: gmailPassword.length === 0,
      },
      GMAIL_RECIPIENT: {
        value: safeDisplay(gmailRecipient),
        length: gmailRecipient.length,
        hasWhitespace: /\s/.test(gmailRecipient),
        isEmpty: gmailRecipient.length === 0,
      },
      SMTP_HOST: smtpHost,
      SMTP_PORT: smtpPort,
      SMTP_SECURE: smtpSecure,
    }

    // SMTP接続テスト
    let connectionTest: { success: boolean; message: string; details: any } = {
      success: false,
      message: "",
      details: null,
    }

    try {
      // トランスポーター設定
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number.parseInt(smtpPort, 10),
        secure: smtpSecure === "true",
        auth: {
          user: gmailUser,
          pass: gmailPassword,
        },
        debug: true,
      })

      // 接続テスト
      const verifyResult = await transporter.verify()
      connectionTest = {
        success: true,
        message: "SMTP接続テスト成功",
        details: verifyResult || null,
      }
    } catch (error: any) {
      connectionTest = {
        success: false,
        message: "SMTP接続テスト失敗",
        details: {
          name: error.name,
          message: error.message,
          code: error.code,
          command: error.command,
          response: error.response,
          responseCode: error.responseCode,
          stack: error.stack?.split("\n").slice(0, 3).join("\n"),
        },
      }
    }

    // Gmail API情報
    const gmailApiInfo = {
      requiredScopes: ["https://mail.google.com/"],
      authUrl: "https://myaccount.google.com/security",
      appPasswordUrl: "https://myaccount.google.com/apppasswords",
      twoFactorAuthUrl: "https://myaccount.google.com/signinoptions/two-step-verification",
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envInfo,
      connectionTest,
      gmailApiInfo,
      recommendations: [
        "Gmailアカウントで2段階認証が有効になっていることを確認してください",
        "アプリパスワードが正確に入力されていることを確認してください",
        "アプリパスワードを再生成してみてください",
        "環境変数に余分な空白や改行がないことを確認してください",
        "SMTPポート設定が正しいことを確認してください（587または465）",
        "Gmailアカウントがロックされていないか確認してください",
      ],
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "デバッグ情報の収集中にエラーが発生しました",
        error: error.toString(),
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
