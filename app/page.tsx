'use client';
import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('送信中...');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    setStatus('送信成功！メールを確認してください！');
  }

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📧 テストメール送信アプリ</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="name" placeholder="お名前" required style={{ padding: '10px' }} />
        <input name="email" type="email" placeholder="あなたのメールアドレス" required style={{ padding: '10px' }} />
        <textarea name="message" placeholder="メッセージを入力" required style={{ padding: '10px', height: '100px' }} />
        <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          メールを送る！
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}