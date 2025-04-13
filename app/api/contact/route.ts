import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  phone: string;
  carModel: string;
  subject: string;
  message: string;
  service: string;
};

export async function POST(request: Request) {
  try {
    // リクエストボディからフォームデータを取得
    const formData: FormData = await request.json();

    // メール本文を作成
    const emailBody = `
新しいお問い合わせが届きました。

【お名前】: ${formData.name}
【メールアドレス】: ${formData.email}
【電話番号】: ${formData.phone || '未入力'}
【車種】: ${formData.carModel || '未入力'}
【ご希望のサービス】: ${formData.service}
【件名】: ${formData.subject}

【メッセージ】:
${formData.message}
    `;

    // Gmailを使用したトランスポーターの設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmailのアプリパスワード
      },
    });

    // メール送信オプションを設定
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sh.kawamoto@navi-que.com',
      subject: `【お問い合わせ】${formData.subject}`,
      text: emailBody,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('送信されるメール内容:', emailBody);
      console.log('送信先:', 'sh.kawamoto@navi-que.com');
    }

    // 成功レスポンスを返す
    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。担当者からご連絡いたします。',
    });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'エラーが発生しました。もう一度お試しください。',
      },
      { status: 500 }
    );
  }
}
