// Booking form → Telegram notification
import type { Context } from "hono";

export default async function handler(c: Context) {
  const body = await c.req.json();
  const { fullName, phone, telegram, carBrand, carModel } = body;
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const text = `🚗 Новая заявка!\n👤 ${fullName}\n📞 ${phone}\n✈️ ${telegram}\n🚘 ${carBrand} ${carModel}`;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
  return c.json({ ok: true });
}