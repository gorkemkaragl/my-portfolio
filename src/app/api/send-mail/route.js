import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik alanlar" }, { status: 400 });
    }

    await sendMail({
      to: process.env.MAIL_USER, //mailin gideceği adres
      subject: "Yeni İletişim Formu Mesajı",
      //mailin içeriği
      html: ` 
    <h2>Yeni Mesaj</h2>
    <p><strong>İsim:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <hr />
    <p>${message}</p>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Mail gönderilemedi" }, { status: 500 });
  }
}
