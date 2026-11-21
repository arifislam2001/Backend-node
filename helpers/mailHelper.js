const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, subject, text) => {
  return await transporter.sendMail({
    from: `"Ariful Islam" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: process.env.EMAIL_USER,
    subject: subject || "Message from Ariful Islam",
    text,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #222; line-height: 1.6;">
        <p style="white-space: pre-wrap;">${text}</p>
      </div>
    `,
  });
};

module.exports = sendMail;
