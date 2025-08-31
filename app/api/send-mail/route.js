import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { Name, email, inquiry } = await req.json();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change to recipient email
      subject: `New Contact Form Submission from ${Name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${inquiry || "No subject"}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
