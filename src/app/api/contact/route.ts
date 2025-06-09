import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
    console.log(process.env.EMAIL_USER || 'dont get email')

    if (!name || !email || !message) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New message from ${name} via Portfolio`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
        });

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}
