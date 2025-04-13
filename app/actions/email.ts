'use server';

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

export async function sendEmail(formData: FormData) {
  try {
    // メール送信のためのトランスポーターを作成
    // 注意: 実際のSMTP設定は環境変数から取得するか、デプロイ時に設定してください
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'user@example.com',
        pass: process.env.SMTP_PASSWORD || 'password',
      },
    });

    // メール本文を作成
    const mailBody = `
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

    // メール送信オプションを設定
    const mailOptions = {
      from: process.env.MAIL_FROM || 'noreply@carcarejapan.com',
      to: 'sh.kawamoto@navi-que.com',
      subject: `【お問い合わせ】${formData.subject}`,
      text: mailBody,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'メールが送信されました' };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { success: false, message: 'メール送信に失敗しました' };
  }
}
