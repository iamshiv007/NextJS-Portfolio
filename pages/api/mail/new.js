// pages/api/send-email.js
import nodemailer from "nodemailer";

import { connectDb } from "@/database/connect";
import { Mail } from "@/models/mail";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const { name, email, subject, message } = req.body;

        // Replace these with your actual email service settings
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "shivrajg20032003@gmail.com",
                pass: "xsxdelmvdzzbrqft",
            },
        });

        const mailOptions = {
            from: "shivrajg20032003@gmail.com",
            to: "iamshiv20032003@gmail.com",
            subject,
            text: `name = ${name}, email = ${email}, message = ${message}`
        };

        try {
            await transporter.sendMail(mailOptions);

            connectDb()
            const mail = await Mail.create(req.body)

            res.status(200).json({ success: true, message: "Email sent successfully", mail });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "An error occurred while sending the email" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
