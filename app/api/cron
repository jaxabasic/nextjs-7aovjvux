import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '210069@kindai-toyooka.ed.jp', // あなたのメールアドレス
      subject: '【自動配信】朝の単語テスト ☀️',
      html: `
        <h1>おはようございます！</h1>
        <p>朝7時です。今日の単語テストの時間です！</p>
        <hr />
        <p><strong>Q1. Apple</strong></p>
        <p>答え: リンゴ</p>
        <br />
        <p><strong>Q2. School</strong></p>
        <p>答え: 学校</p>
        <hr />
        <p>今日も一日頑張りましょう！💪</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}