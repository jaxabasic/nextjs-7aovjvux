import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '210069@kindai-toyooka.ed.jp', // あなたのメールアドレス
      subject: '【学習】自作単語アプリでテストしよう！📱',
      html: `
        <h1>お疲れ様です！</h1>
        <p>自作した単語帳アプリで学習を始めましょう。</p>
        <p>以下のボタンからアプリを開けます👇</p>
        <br />
        <a href="https://v0.app/chat/-e6PVPb8Wlxs" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
          🚀 アプリを開く
        </a>
        <br />
        <br />
        <p>継続は力なり！</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}