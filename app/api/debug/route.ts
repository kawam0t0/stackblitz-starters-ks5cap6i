import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // システム情報の収集
    const systemInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      env: process.env.NODE_ENV,
      // 重要な環境変数の存在チェック（値は表示しない）
      envVars: {
        GMAIL_USER: typeof process.env.GMAIL_USER === "string",
        GMAIL_APP_PASSWORD: typeof process.env.GMAIL_APP_PASSWORD === "string",
        GMAIL_RECIPIENT: typeof process.env.GMAIL_RECIPIENT === "string",
      },
    }

    // nodemailerのバージョン情報
    const nodemailerInfo = {
      version: nodemailer.version,
    }

    // nodemailerのデフォルト設定を確認
    let transporterConfig
    try {
      // デフォルトのトランスポーター設定を試す（ホスト指定なし）
      const testTransporter = nodemailer.createTransport({})
      transporterConfig = {
        success: false,
        message: "デフォルトトランスポーターが作成されました（これは通常発生しないはずです）",
        defaults: testTransporter.options,
      }
    } catch (configError: any) {
      transporterConfig = {
        success: false,
        message: `デフォルトトランスポーター作成エラー: ${configError.message}`,
        error: configError.toString(),
      }
    }

    // Gmailトランスポーターのテスト
    let gmailTest
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const gmailTransporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        })

        // トランスポーターの検証（実際の接続テスト）
        try {
          await gmailTransporter.verify()
          gmailTest = {
            success: true,
            message: "Gmailサーバーに正常に接続できました",
          }
        } catch (verifyError: any) {
          gmailTest = {
            success: false,
            message: `Gmail接続検証エラー: ${verifyError.message}`,
            error: verifyError.toString(),
          }
        }
      } catch (gmailError: any) {
        gmailTest = {
          success: false,
          message: `Gmailトランスポーター作成エラー: ${gmailError.message}`,
          error: gmailError.toString(),
        }
      }
    } else {
      gmailTest = {
        success: false,
        message: "Gmail環境変数が設定されていないため、テストをスキップしました",
      }
    }

    // nodemailerのモジュール解決パスを確認
    let modulePaths
    try {
      modulePaths = {
        nodemailer: require.resolve("nodemailer"),
        // 他の関連モジュールも確認可能
      }
    } catch (pathError) {
      modulePaths = {
        error: "モジュールパスの解決に失敗しました",
      }
    }

    // 結果を返す
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      system: systemInfo,
      nodemailer: nodemailerInfo,
      transporterConfig,
      gmailTest,
      modulePaths,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "デバッグ情報の収集中にエラーが発生しました",
        error: error.toString(),
      },
      { status: 500 },
    )
  }
}
