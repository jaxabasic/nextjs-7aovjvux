import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("📨 メール送信リクエストを受け取りました！"); // ← これが出ればOK

  try {
    const body = await request.json();
    console.log("📦 送信しようとしている宛先:", body.email);

    // メールを送信
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [body.email],
      subject: 'テストメール',
      text: body.message || 'こんにちは！',
    });

    if (error) {
      console.error("❌ Resendからのエラー:", error); // ← 犯人はここに現れる！
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("✅ 送信成功！ ID:", data?.id);
    return NextResponse.json(data);
  } catch (error) {
    console.error("💥 サーバーエラー:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}