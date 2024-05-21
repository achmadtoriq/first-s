import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { nama, email, nohp, alamat } = await request.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      // user: 'ahfan2016@gmail.com',
      // pass: 'yciiobvkpiegupsr',

      // qqlnxzgkirfxdvkd -> afandi.achmadtoriq@gmail.com
    },
  });

  try {
    // Send mail with defined transport object
    const content =`Nama: ${nama} \n No.Hp (WA) : ${nohp} \n Email from: ${email} \n Alamat: ${alamat}`
    await transporter.sendMail({
      sender: `"${nama} - ${email}" <${email}>`,
      to: 'thoriqahmad17@gmail.com',
      subject: "Pendaftaran Calon Member Firsmedia",
      text: content,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }

}
